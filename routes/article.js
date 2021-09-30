const express = require('express');
const router = express.Router();
const articleController = require('../controller/admin/article');

router.get('/', articleController.get);
router.post('/', articleController.create);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.destroy);


module.exports = router;
