var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.resolve("/root/TrashTalk/frontend/index.html"));
});

app.get('/:folder/:filename', function(req,res){
  res.sendFile(path.resolve('/root/TrashTalk/' + req.params.folder + '/' + req.params.filename));
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
