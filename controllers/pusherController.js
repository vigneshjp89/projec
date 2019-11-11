var Pusher=require('pusher');
var channels_client = new Pusher({
  appId: '702824',
  key: '61861b3b18545139a467',
  secret: '75fd0f860936e07881ae',
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
    // fetch("https://webhook.site/7ad5d03b-9afd-4af4-8cc6-dcef779a2be1",{method:"POST",body:{"test":"pusher Auth","req":req},headers:{"Content-Type":"application/json"}}).then(function(){
    //   console.log();
    // });
    var auth = channels_client.authenticate(socketId, channel, presenceData);
    //res.setHeader('Content-Type','application/json');
    console.log(auth);
    res.send(auth);
}