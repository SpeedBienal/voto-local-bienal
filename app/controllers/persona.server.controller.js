var Persona = require('mongoose').model('Persona');

exports.list = function (req, res, next) {
  Persona.find({}, function (err, personas) {
    if (err) {
      return next(err);
    } else {
      res.json(personas);
    }
  });
};

exports.create = function (req, res, next) {
  var persona = new Persona( req.body );
  persona.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(persona);
    }
  });
};

exports.read = function (req, res) {
  res.json( req.persona );
};

exports.update = function (req, res) {
  Persona.findByIdAndUpdate( req.persona._id, persona.body, function (err, persona) {
    if (err) {
      return next(err);
    } else {
      res.json( persona );
    }
  });
};

exports.delete = function (req, res) {
  req.persona.remove( function ( err, persona ) {
    if ( err ) {
      return next( err );
    } else {
      res.json( req.persona );
    }
  });
};

exports.personaId = function (req, res, next, id) {
  Persona.findOne( {_id: id}, function (err, perona) {
    if (err) {
      return next(err);
    } else {
      req.persona = persona;
      next();
    }
  });
}

exports.personaDNI = function (req, res, next, dni) {
  Persona.findOne( {dni: dni}, function (err, persona) {
    if (err) {
      return next(err);
    } else {
      req.persona = persona;
      next();
    }
  });
}
