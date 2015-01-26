var express     = require('express');

var app=express();
  app.use(express.static(__dirname + '/www'));
  console.log('server started at port 3000');

app.listen(3000);
