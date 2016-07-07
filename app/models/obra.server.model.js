var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObraSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },

});
mongoose.Model('Obra' ObraSchema);
