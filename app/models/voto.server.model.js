var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Obra = mongoose.model('Obra');

var VotoSchema = new Schema({
  obra: {
    type: Schema.ObjectId,
    ref: 'Obra',
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

//aux
function _top_3(categoria, callback) {
  this.aggregate([
    { $match: { categoria: categoria } },
    { $group: { _id:"$obra", suma: { $sum: 1 } } },
    { $sort: { suma: -1 } },
    { $limit: 3 }])
    .exec(function (err, datos) {
      //populate de datos
      Obra.populate(datos, {path: '_id titulo categoria'}, callback);
    });
};

VotoSchema.statics.findByCategoria = function (categoria, callback) {
  this.find({"categoria": new RegExp( '^'+categoria+'$', 'i' )}, callback );
};

VotoSchema.statics.top3ByCategoria = _top_3;


VotoSchema.statics.totalCategoria = function (categoria, callback) {
  this.count({"categoria": categoria}, callback);
};

/*VotoSchema.statics.super_top = function (callback) {
  _top_3('audiovisuales', function (err, av) {
    _top_3('visuales',function (err, v) {
      _top_3('musica',function (err, m) {
        _top_3('escenicas',function (err, e) {
          _top_3('letras', function (err, l) {
            data = av.concat(v,m,e,l);
            callback(null,data);

          })
        })
      })
    })
  });
}; */

VotoSchema.set( 'toJSON', { getters: true } );

mongoose.model('Voto', VotoSchema);
