var voto = require('../controllers/voto.server.controller');

module.exports = function ( app ) {
  app.route( '/api/votos' )
    .get( voto.list );

  app.route( '/api/votacion' )
    .get( voto.list_short );

  app.route( '/api/votacion/:categoria_voto' )
    .get( voto.single_top );

  app.param( 'categoria_voto', voto.single_top );
};
