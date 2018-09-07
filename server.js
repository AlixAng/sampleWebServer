const express = require('express');
const config = require('./config/config.js');
const app = express();
require('./routes/route')(app);


// middleware to allow cross origin
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Header, Origin, X-request-With, Content-Type, Accept');
  next();
});

var server = app.listen(config.server.port, ()=>{
  console.log('we are live at:', config.server.host, server.address().port);
});
