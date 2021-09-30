const express = require('express');
const router = express.Router();
const teamController = require('../controller/admin/team');

router.get('/', teamController.get);
router.post('/', teamController.create);
router.put('/:id', teamController.update);
router.delete('/:id', teamController.destroy);


module.exports = router;
