"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRouter = express.Router();
const users_model_1 = __importDefault(require("../models/users.model"));
UserRouter.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Check if email and password are provided
        if (!email || !password) {
            const response = {
                status: 0,
                data: null,
                message: "Email and password are required",
            };
            return res.status(400).json(response);
        }
        // Hash password
        const hashedPassword = yield bcrypt.hash(password, 10);
        // Check if user exists already
        const ispresent = yield users_model_1.default.findOne({ email });
        // If user exists, return error
        if (ispresent) {
            const response = {
                status: 0,
                data: null,
                message: "User already exists",
            };
            return res.status(400).json(response);
        }
        // Create user, save to database and return success message
        const user = new users_model_1.default({ email: email, password: hashedPassword });
        yield user.save();
        const response = {
            status: 1,
            data: null,
            message: "User registered successfully",
        };
        return res.status(201).json(response);
    }
    catch (error) {
        console.log(error);
        const response = {
            status: 0,
            data: null,
            message: "Server error",
        };
        return res.status(500).json(response);
    }
}));
UserRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Check if email and password are provided
        if (!email || !password) {
            const response = {
                status: 0,
                data: null,
                message: "Email and password are required",
            };
            return res.status(400).json(response);
        }
        // Check if user exists
        const ispresent = yield users_model_1.default.findOne({ email });
        if (!ispresent) {
            const response = {
                status: 0,
                data: null,
                message: "User does not exist",
            };
            return res.status(400).json(response);
        }
        // Check if password is correct
        const user = ispresent;
        const isMatch = yield bcrypt.compare(password, user.password);
        if (!isMatch) {
            const response = {
                status: 0,
                data: null,
                message: "Invalid credentials",
            };
            return res.status(400).json(response);
        }
        // Create token, send to client and return success message
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        // along with the token, you can send the user details as well
        const response = {
            status: 1,
            data: {
                token,
                user,
            },
            message: "User logged in successfully",
        };
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        const response = {
            status: 0,
            data: null,
            message: "Server error",
        };
        return res.status(500).json(response);
    }
}));
exports.default = UserRouter;
