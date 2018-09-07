const env = process.env.NODE_ENV || 'dev'; // dev or prod

const dev = {
  server : {
    host : process.env.HOST ||'0.0.0.0',
    port : process.env.PORT || 2000
  }
};

const prod = {
  server : {
    host : process.env.HOST ||'0.0.0.0',
    port : process.env.PORT || 2000
  }
};

const config ={dev, prod};
module.exports = config[env];
