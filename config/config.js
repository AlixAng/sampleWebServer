const env = process.env.NODE_ENV || 'dev'; // dev or prod

const dev = {
  server : {
    host : process.env.HOST ||'0.0.0.0',
    port : process.env.PORT || 2000
  }
};

const production = {
  server : {
    host : process.env.HOST ||'0.0.0.0',
    port : process.env.PORT || 2000
  }
};

const config ={dev, production};
module.exports = config[env];
