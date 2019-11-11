var movies=require('./movieData');
var dbservice=require('../services/dbservice.js');
var Pusher=require('pusher');
var channels_client = new Pusher({
  appId: '702824',
  key: '61861b3b18545139a467',
  secret: '75fd0f860936e07881ae',
  cluster: 'ap2',
  encrypted: true
});



exports.getAllMovies= function(req,res){
  var db=dbservice.database;
  var moviesCollection=db.collection("movies");
  channels_client.trigger('presence-my-channel', 'client-event', {
    "message": "Presence Channel - Client Event: Page Loaded"
  });
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
  var moviesCollection=db.collection("movies");
  var movie=req.body;
  //window.alert(movie);
   //var axios=require('axios');
  var data={
    "name": movie.movie_name,
    "thumbnailUrl": movie.link_name,
    "posterUrl": movie.post,
    "releaseYear": movie.release_year,
    "rating": movie.rating,
    "language": movie.lang,
    "plot": movie.plot,
    "cast": movie.cast
};
  movieCollection=db.collection("movies");
  movieCollection.insert(data).then(function(save_data){
    return res.json({
      "isSuccess":true
    });
    
  });
  channels_client.trigger('my-test-channel', 'my-event', {
    "message": "New Record Added"
  });
  res.redirect("../index.html");
}
