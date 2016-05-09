var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.resolve("/root/TrashTalk/frontend/index.html"));
});

//app.get('/:folder/:filename', function(req,res){
//  res.sendFile(path.resolve(__dirname + '../' + req.params.folder + '/' + req.params.filename));
//});

app.get('/frontend/main-controller.js', function(req, res) {
  console.log("here we are");
  res.sendFile(path.resolve("/root/TrashTalk/frontend/main-controller.js"));
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
