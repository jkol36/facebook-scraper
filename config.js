global.Promise = require('bluebird')

if(process.env.NODE_ENV !== 'production')
  require('dotenv').config()