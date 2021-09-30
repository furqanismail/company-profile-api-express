const express = require('express');
const router = express.Router();
const portofolioController = require('../controller/admin/portofolio');

router.get('/', portofolioController.get);
router.post('/', portofolioController.create);
router.put('/:id', portofolioController.update);
router.delete('/:id', portofolioController.destroy);


module.exports = router;
