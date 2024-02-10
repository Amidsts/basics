"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const calculator_router_1 = __importDefault(require("./src/routers/calculator.router"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Welcome to the beginning of nothingness");
});
app.use("/calculator", calculator_router_1.default);
app.listen(2020, () => {
    console.log(`Server is running on port 2020`);
});
