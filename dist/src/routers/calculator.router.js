"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    const { val1, val2 } = req.query;
    const sum = Number(val1) + Number(val2);
    res.send(sum);
});
const calculatorRouter = router;
exports.default = calculatorRouter;
