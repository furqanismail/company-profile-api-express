const express = require('express');
const router = express.Router();
const heroController = require('../controller/admin/hero');

router.get('/', heroController.get);
router.post('/', heroController.create);
router.put('/:id', heroController.update);
router.delete('/:id', heroController.destroy);


module.exports = router;
