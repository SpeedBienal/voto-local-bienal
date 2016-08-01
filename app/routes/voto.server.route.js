var voto = require('../controllers/voto.server.controller');

module.exports = function ( app ) {
  app.route( '/api/votos' )
    .get( voto.list );

  app.route( '/api/votacion' )
    .get( voto.list_short );
};
