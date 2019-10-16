var express = require('express');
var router = express.Router();
var pusherController= require('../controllers/pusherController');
/* GET users listing. */
router.get('/auth', pusherController.auth)
.post('/auth',pusherController.auth);

module.exports = router;
