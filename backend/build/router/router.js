"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.get('/sobre', (req, res) => {
    res.send('Sobre o sistema!');
});
exports.default = router;
