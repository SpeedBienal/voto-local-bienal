var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
  var db = mongoose.connect( config.db );

  require('../app/models/persona.server.model');
  require('../app/models/obra.server.model')

  return db;
};
