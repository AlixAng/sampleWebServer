
const path = require('path');
module.exports = function(app){
  app.get('/', (req,res) => {
    res.send('Hello world !');
  });

  app.get('/image',function(req,res) {
    // res.send('Queen Nzinga !');
    res.sendFile(path.join(__dirname, '../public/Nzinga.jpg'));
  });
}
