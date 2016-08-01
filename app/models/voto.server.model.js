var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VotoSchema = new Schema({
  obra: {
    type: Schema.ObjectId,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
    enum: ['audiovisuales','visuales','musica','escenicas','letras'],
  },
  created: {
    type: Date,
    default: Date.now,
  }
});

VotoSchema.statics.findByCategoria = function (categoria, callback) {
  this.find({"categoria": new RegExp( '^'+categoria+'$', 'i' )}, callback );
};

VotoSchema.statics.top3ByCategoria = function (categoria, callback) {
  this.aggregate(
    { $match: { categoria: categoria } },
    { $group: { _id: {obra:"$obra", categoria: "$categoria"}, total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 3 },
    callback);
};

VotoSchema.set( 'toJSON', { getters: true } );

mongoose.model('Voto', VotoSchema);
