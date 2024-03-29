//
$.ajax({
  type:"GET",
  url:"https://localhost:3000/movies/all",
  dataType:"json",
  success:function(response){
console.log("Data from success",response);
var data=   formObject(response);
constructDOM(data);
  },
  error:function(err){
    console.log("Data from error",err);
  }
});
function formObject(response){
  var flags=[],categoryObject=[];var length=response.length;
  for(var i=0;i<length;i++){
    var movie=response[i];
    //console.log("movie",movie);
var temp=flags.indexOf(movie.language);
if(temp==-1){
  flags.push(movie.language);
}
else{
  categoryObject[temp].movies.push(movie);
  continue;
}


  var objectScheme={
    "category":movie.language,
    "movies":[]
  }
  objectScheme.movies.push(movie);
  categoryObject.push(objectScheme);
  //console.log("formObject response",response);

}
return categoryObject;
//console.log(categoryObject);
}
function constructDOM(data){
console.log(data);
var categoryContent=[];
for(var i=0;i<data.length;i++){
  var objectSchema=data[i];
  var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
  categoryContent.push(categoryTitle);
  for(var j=0;j<objectSchema.movies.length;j++)
  {
    console.log(objectSchema.movies[j].name);
    var cat=$('<div class="movie fleft"><a href="#" onclick="_gs(\'event\', \'Click the movie\')"><div class="poster"><img src="'+objectSchema.movies[j].posterUrl+'"/></div></a><p class="release year">'+objectSchema.movies[j].releaseYear+'</p><h4 class="name">'+objectSchema.movies[j].name+'</h4></div>');
     categoryContent.push(cat);
  }


}
$('.content').html(categoryContent);
console.log(categoryContent);
}
