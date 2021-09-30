const express = require('express');
const router = express.Router();
const homeController = require('../controller/app');

router.get('/', homeController.home);


module.exports = router;
