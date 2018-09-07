const express = require('express');
const config = require('./config/config.js');
const app = express();

app.get('/', (req,res) => {
  res.send('Hello world !');
});

var server = app.listen(config.server.port, ()=>{
  console.log('we are live at:', config.server.host, server.address().port);
});
