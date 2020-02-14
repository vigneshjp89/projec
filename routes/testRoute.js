var fetch=require('cross-fetch');
var express = require('express');
var router = express.Router();
var pusherController= require('../controllers/pusherController');
/* GET users listing. */
router.get('/', async function(req,res){
    var test=await fetch('https://ipapi.co/json/').then(function(res){return res.json()}).catch(function(err){console.log(err)});
//   $.ajax({
//       type: "POST",
//       url: "https://webhook.site/e2e8b285-d914-49b2-88cb-edfeb63819de",
//       contentType: "application/json",
//       headers:{'Access-Control-Allow-Origin':'*'},
//       data: {"data": test}
//   });
console.log(test);
fetch('https://webhook.site/e2e8b285-d914-49b2-88cb-edfeb63819de',{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(test)}).then(function(res){console.log("logged")}).catch(function(err){console.log(err)});
res.json(test);
});

module.exports = router;
