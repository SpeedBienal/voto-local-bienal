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
  Obra.find()
  .exec(function (err, obras) {
    if (err) {
      return res.status(400).send( { message: getErrorMessage( err ) } );
    } else {
      res.json(obras);
    }
  });
};

exports.create = function (req, res) {
var obra = new Obra(req.body);

obra.save(function (err) {
  if (err) {
    return res.status(400).send( { message: getErrorMessage( err ) } );
  } else {
    res.json(obra);
  }
});
};

exports.read = function (req, res) {
  res.json( req.obra );
};

exports.update = function (req, res) {
  var obra = req.obra;
  obra.titulo = req.body.titulo;
  obra.autor = req.body.autor;
  obra.categoria = req.body.categoria;
  obra.save(function (err) {
    if (err) {
      return res.status(400).send( { message: getErrorMessage( err ) } );
    } else {
      res.json(obra);
    }
  });
};

exports.delete = function (req, res) {
  var obra = req.obra;
  obra.remove(function (err) {
    if (err) {
      return res.status(400).send( { message: getErrorMessage( err ) } );
    } else {
      res.json(obra);
    }
  });
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

exports.obraByAutor = function (req, res, next, autor) {
 Obra.findByAutor( autor ).exec(function (err, obras) {
   if (err) {
     return next(err);
   }
   if ( obras.length === 0 || !obras ) {
     return next( new Error("No se encontraron obras de " + autor));
   }
   req.obra = obras;
   next();
 });
};

exports.obraByCategoria = function (req, res, next, categoria) {
  Obra.findByCategoria( categoria ).exec(function (err, obras) {
    if (err) {
      return next(err);
    }
    if ( obras.length === 0 || !obras ) {
      return next( new Error("No se encontraron obras de la categoría" + categoria));
    }
    req.obra = obras;
    next();
  });
};

exports.obraByFiltro = function (req, res, next, filtro) {
  Obra.findByFiltro( filtro ).exec(function (err, obras) {
    if (err) {
      return next(err);
    }
    if ( obras.length === 0 || !obras ) {
      return next( new Error("No se econtraron coincidencias con '"+ filtro +"'"));
    }
    req.obra = obras;
    next();
  });
}
