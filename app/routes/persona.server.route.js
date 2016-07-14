var persona = require('../controllers/persona.server.controller');

module.exports = function( app ) {
  app.route( '/api/personas' )
    .get( persona.list )
    .post( persona.create );

  app.route( '/api/personas/:personaId' )
    .get( persona.read )
    .put( persona.update )
    .delete( persona.delete );

  app.route( 'api/personas/dni/:personaDNI' )
    .get( persona.read )
    .put( persona.update )
    .delete( persona.delete );

  app.param( 'personaId', persona.personaId );
  app.param( 'personaDNI', persona.personaDNI );
};
