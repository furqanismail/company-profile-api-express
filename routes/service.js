const express = require('express');
const router = express.Router();
const serviceController = require('../controller/admin/service');

router.get('/', serviceController.get);
router.post('/', serviceController.create);
router.put('/:id', serviceController.update);
router.delete('/:id', serviceController.destroy);


module.exports = router;
