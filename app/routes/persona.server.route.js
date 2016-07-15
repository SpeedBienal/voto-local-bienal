var persona = require('../controllers/persona.server.controller');

module.exports = function( app ) {
  app.route( '/api/personas' )
    .get( persona.list )
    .post( persona.create );

  app.route( '/api/personas/:personaId' )
    .get( persona.read )
    .put( persona.update )
    .delete( persona.delete );

  app.route( '/api/personas/dni/:personaDNI' )
    .get( persona.read )
    .put( persona.update )
    .delete( persona.delete );

  app.route( '/api/personas/buscar')
    .post( persona.puedeVotar );

  app.param( 'personaId', persona.personaById );
  app.param( 'personaDNI', persona.personaByDNI );
};
