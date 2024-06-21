// src/routes/mocking.router.js
const express = require('express');
const router = express.Router();
const generateMockProducts = require('../mocking.js');

router.get('/mockingproducts', (req, res) => {
    const mockProducts = generateMockProducts();
    res.json(mockProducts);
});

module.exports = router;
