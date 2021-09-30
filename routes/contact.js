const express = require('express');
const router = express.Router();
const contactController = require('../controller/admin/contact');

router.get('/', contactController.get);
router.post('/', contactController.create);
router.put('/:id', contactController.update);
router.delete('/:id', contactController.destroy);


module.exports = router;
