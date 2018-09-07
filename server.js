const express = require('express');
const app = express();


var port = 2000;
var server = app.listen(port, () => {
  console.log('we are live at:',server.address().port);
});


