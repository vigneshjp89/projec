var movies=require('./movieData');
var dbservice=require('../services/dbservice.js');
exports.getAllMovies= function(req,res){
 var db=dbservice.database;
 var moviesCollection=db.collection("movies");
 moviesCollection.find().toArray().then(function(result){
   //console.log("RESULT: "+result);
   var outputJSON={
     "isSuccess":true,
     "data":result
   }
   console.log(outputJSON);
   return res.json(outputJSON);
 });
  //return res.json(movies);*

}
exports.addNewMovie=function(req,res,next){
  var db=dbservice.database;
  var movie=req.body,
  movieCollection=db.collection("movies");
  movieCollection.insert(movie).then(function(save_data){
    return res.json({
      "isSuccess":true

    });
  });
}
