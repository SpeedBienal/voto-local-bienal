(function () {
  angular
    .module('bienal')
    .config(['$stateProvider','$locationProvider', rutas_crud ])

    function rutas_crud( $stateProvider, $locationProvider ) {
      $stateProvider
        .state( 'agregarObra', {
          url: '/agregar',
          templateUrl: '/views/crud/crearObra.client.view.html',
          controller: 'ObrasController'
        });
    }
})();
