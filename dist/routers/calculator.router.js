"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    const { a, b } = req.query;
    let sum = Number(a) + Number(b);
    res.status(200).send({ result: `sum: ${sum}` });
});
const calculatorRouter = router;
exports.default = calculatorRouter;
