var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var movies = require('./routes/movies');
var pusher = require('./routes/pusher');
var dbservice=require('./services/dbservice');
//var testForm=require('./routes/testForm');
var testRoute=require('./routes/testRoute');
//var authFile=require('./.well-known/pki-validation/9684F1870DC29C5776ADAEDF71F1A2AF.txt');
var app = express();
var Pusher = require('pusher');



dbservice.createConnection();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'AUTH')));
//app.use(express.static(path.join(__dirname, '.well-known/pki-validation/9684F1870DC29C5776ADAEDF71F1A2AF.txt')));
app.use('/test',testRoute);
app.use('/', index);
app.use('/movies', movies);
app.use('/pusher', pusher);
//app.use('/.well-known/pki-validation/9684F1870DC29C5776ADAEDF71F1A2AF.txt',index);

app.use('/zohoverify/verifyforzoho.html', function(req, res){
  res.sendfile(__dirname + '/verifyforzoho.html');
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
