const express = require('express');
const router = express.Router();
const misiController = require('../controller/admin/Misi');

router.get('/', misiController.get);
router.post('/', misiController.create);
router.put('/:id', misiController.update);
router.delete('/:id', misiController.destroy);


module.exports = router;
