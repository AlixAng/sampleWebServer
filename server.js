const express = require('express');
const config = require('./config/config.js');
const app = express();
require('./routes/route')(app);

var server = app.listen(config.server.port, ()=>{
  console.log('we are live at:', config.server.host, server.address().port);
});
