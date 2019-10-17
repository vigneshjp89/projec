var Pusher=require('pusher');
var channels_client = new Pusher({
  appId: '877778',
  key: '16bd28c3ebe1d7318d90',
  secret: '0d561a531f329154eb51',
  cluster: 'ap2',
  encrypted: true
});



exports.auth= function(req,res){
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var timestamp=Date.now();
    var presenceData = {
      user_id: timestamp,
      user_info: {
        name: timestamp
      }
    };
    fetch("https://webhook.site/7ad5d03b-9afd-4af4-8cc6-dcef779a2be1",{method:"POST",body:{"test":"pusher Auth","req":req},headers:{"Content-Type":"application/json"}}).then(function(){
      console.log();
    });
    var auth = pusher.authenticate(socketId, channel, presenceData);
    res.send(auth);
}
// exports.addNewMovie=function(req,res,next){
//   var db=dbservice.database;
//   var moviesCollection=db.collection("movies");
//   var movie=req.body;
//   //window.alert(movie);
//   var data={
//     "name": movie.movie_name,
//     "thumbnailUrl": movie.link_name,
//     "posterUrl": movie.post,
//     "releaseYear": movie.release_year,
//     "rating": movie.rating,
//     "language": movie.lang,
//     "plot": movie.plot,
//     "cast": movie.cast
// };
//   movieCollection=db.collection("movies");
//   movieCollection.insert(data).then(function(save_data){
//     return res.json({
//       "isSuccess":true
//     });
//     window.alert("Success");
//     window.location.replace("../public/index.html");
//   });
//   channels_client.trigger('private-channel', 'client-event', {
//     "message": "New Record Added"
//   });
// }
