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
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const db_1 = __importDefault(require("./config/db"));
require("dotenv").config();
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/v1/users", users_routes_1.default);
app.use("/api/v1/products", products_routes_1.default);
app.listen(process.env.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default;
    }
    catch (error) {
        console.log(error);
    }
    console.log(`Server running on port ${process.env.PORT}`);
}));
