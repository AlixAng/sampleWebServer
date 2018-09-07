
const path = require('path');
module.exports = function(app){
  app.get('/', (req,res) => {
    res.send('Hello world !');
  });

  app.get('/image',function(req,res) {
    res.sendFile(path.join(__dirname, '../public/Nzinga.jpg'));
  });

  app.get('*', (req,res)=>{
    res.status(404).sendFile(path.join(__dirname, '../public/404.jpg'));
  })
}
