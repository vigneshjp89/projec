var movies=require('./movieData');
var dbservice=require('../services/dbservice.js');
var Pusher=require('pusher');
var channels_client = new Pusher({
  appId: '877778',
  key: '16bd28c3ebe1d7318d90',
  secret: '0d561a531f329154eb51',
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
    window.alert("Success");
    
  });
  channels_client.trigger('presence-my-channel', 'client-event', {
    "message": "New Record Added"
  });
  window.location.replace("../public/index.html");
}
