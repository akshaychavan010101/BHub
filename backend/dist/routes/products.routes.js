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
const products_model_1 = __importDefault(require("../models/products.model"));
const ProductRouter = express.Router();
// add product route
ProductRouter.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { image, name, price, description, quantity } = req.body;
        if (!image || !name || !price || !description || !quantity) {
            const response = {
                status: 0,
                data: null,
                message: "Missing required fields",
            };
            return res.status(400).json(response);
        }
        const product = new products_model_1.default({
            image,
            name,
            price,
            description,
            quantity,
        });
        yield product.save();
        const response = {
            status: 1,
            data: null,
            message: "Product added successfully",
        };
        return res.status(201).json(response);
    }
    catch (error) {
        console.log(error);
        const response = {
            status: 0,
            data: null,
            message: "Error adding product",
        };
        return res.status(500).json(response);
    }
}));
// edit product route
ProductRouter.patch("/edit/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { image, name, price, description, quantity } = req.body;
        if (!id || !image || !name || !price || !description || !quantity) {
            const response = {
                status: 0,
                data: null,
                message: "Missing required fields",
            };
            return res.status(400).json(response);
        }
        const isUpdated = yield products_model_1.default.findByIdAndUpdate(id, {
            image,
            name,
            price,
            description,
            quantity,
        });
        if (!isUpdated) {
            const response = {
                status: 0,
                data: null,
                message: "Product not found",
            };
            return res.status(404).json(response);
        }
        const response = {
            status: 1,
            data: null,
            message: "Product updated successfully",
        };
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        const response = {
            status: 0,
            data: null,
            message: "Error updating product",
        };
        res.status(500).json(response);
    }
}));
// get all products route
ProductRouter.get("/get-all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_model_1.default.find();
        const response = {
            status: 1,
            data: products,
            message: "Products fetched successfully",
        };
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        const response = {
            status: 0,
            data: null,
            message: "Error fetching products",
        };
        return res.status(500).json(response);
    }
}));
// pagination route
ProductRouter.get("/paginate/:page", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.params.page;
        const limit = 10;
        const skip = (page - 1) * limit;
        const products = yield products_model_1.default.find()
            .skip(skip)
            .limit(limit);
        const response = {
            status: 1,
            data: products,
            message: "Products fetched successfully",
        };
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        const response = {
            status: 0,
            data: null,
            message: "Error fetching products",
        };
        return res.status(500).json(response);
    }
}));
// search and sort route
ProductRouter.get("/:searchTerm/:sortOrder", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.params.searchTerm;
        const sortOrder = req.params.sortOrder;
        let products = [];
        if (searchTerm == "all") {
            products = yield products_model_1.default.find().sort({
                price: sortOrder,
            });
        }
        else {
            products = yield products_model_1.default.find({
                name: { $regex: searchTerm, $options: "i" },
            }).sort({
                price: sortOrder,
            });
        }
        const response = {
            status: 1,
            data: products,
            message: "Products fetched successfully",
        };
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        const response = {
            status: 0,
            data: null,
            message: "Error fetching products",
        };
        return res.status(500).json(response);
    }
}));
exports.default = ProductRouter;
