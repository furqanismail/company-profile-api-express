const express = require('express');
const router = express.Router();
const visiController = require('../controller/admin/visi');

router.get('/', visiController.get);
router.post('/', visiController.create);
router.put('/:id', visiController.update);
router.delete('/:id', visiController.destroy);


module.exports = router;
