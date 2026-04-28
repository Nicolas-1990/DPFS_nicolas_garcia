const express = require('express');
const router = express.Router();
const productsAPI = require('../../controllers/api/productsAPI');

router.get('/', productsAPI.list);
router.get('/:id', productsAPI.detail);

module.exports = router;