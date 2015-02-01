var express     = require('express');

var app=express();
  app.use(express.static(__dirname + '/'));
  console.log('server started at port 3003');

app.listen(3003);
