const express = require('express');
const router = express.Router();
const categoryArticleController = require('../controller/admin/category_article');

router.get('/', categoryArticleController.get);
router.post('/', categoryArticleController.create);
router.put('/:id', categoryArticleController.update);
router.delete('/:id', categoryArticleController.destroy);


module.exports = router;
