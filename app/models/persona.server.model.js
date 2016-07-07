var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  voto_musica: {
    type: ObjectId,
    ref: obras,
    required: true,
  },
  voto_audiovisuales: {
    type: ObjectId,
    ref: obras,
    required: true,
    default: null,
  },
  voto_visuales: {
    type: ObjectId,
    ref: obras,
    required: true,
    default: null,
  },
  voto_escenicas: {
    type: ObjectId,
    ref: obras,
    required: true,
    default: null,
  },
  voto_letras: {
    type: ObjectId,
    ref: obras,
    required: true,
    default: null,
  },
});
mongoose.Model('Persona' PersonaSchema);
