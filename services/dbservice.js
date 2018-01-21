var MongoClient=require('mongodb').MongoClient;
exports.createConnection=function(){
  MongoClient.connect("mongodb://vignesh:Zxcv1234!@ds255787.mlab.com:55787/projectorjv").then(function(client){
      console.log("connected to db");
      exports.database=client.db("projectorjv");

});
}
