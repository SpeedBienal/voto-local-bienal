var obra = require('../controllers/obra.server.controller');

module.exports = function( app ) {
  app.route( '/api/obra' )
    .get( obra.list )
    .post( obra.create );

  app.route( '/api/obra/:obraId' )
    .get( obra.read )
    .put( obra.update )
    .delete( obra.delete );

  app.param( 'obraId', obra.obraByID );
};
