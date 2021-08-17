var MongoClient=require('mongodb').MongoClient;
exports.createConnection=function(){
  MongoClient.connect("mongodb+srv://vignesh:<password>@cluster0.zisnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(function(client){
      console.log("connected to db");
      exports.database=client.db("projectorjv");

});
}
