const express = require('express');
const router = express.Router();
const categoryPortofolioController = require('../controller/admin/category_portofolio');

router.get('/', categoryPortofolioController.get);
router.post('/', categoryPortofolioController.create);
router.put('/:id', categoryPortofolioController.update);
router.delete('/:id', categoryPortofolioController.destroy);


module.exports = router;
