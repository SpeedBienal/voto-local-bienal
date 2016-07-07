var Obra = require('mongoose').model('Obra');

var getErrorMessage = function ( err ) {
  if ( err.errors ) {
    for ( var errName in err.errors ) {
      if ( err.errors[ errName ].message )
        return err.errors[ errName ].message;
    }
  } else {
    return 'Unknown server error, pal'
  }
};

exports.list = function (req, res) {

};

exports.create = function (req, res) {

};

exports.read = function (req, res) {

};

exports.update = function (req, res) {

};

exports.delete = function (req, res) {

};

exports.obraByID = function (req, res, next, id) {
  Obra.findById( id )
  .exec( function (err, obra) {
    if (err) {
      return next(err);
    }
    if (!obra) {
      return next( new Error("Falló al cargar la obra " + id));
    }
    req.obra = obra;
    next();
  });
};
