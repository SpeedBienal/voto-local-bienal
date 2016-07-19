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
        })
        /*.state( 'verObra' {
          url: '/ver',
          templateUrl: '/views/crud/verObra.client.view.html',
          controller: 'ObrasController'
        })
        .state( 'editarObra' {
          url: '/editar',
          templateUrl: '/views/crud/editarObra.client.view.html',
          controller: 'ObrasController'
        })
        .state( 'eliminarObra' {
          url: '/eliminar',
          templateUrl: '/views/crud/eliminarObra.client.view.html',
          controller: 'ObrasController'
        })
        .state( 'listarObra' {
          url: '/listar',
          templateUrl: '/views/crud/listarObra.client.view.html',
          controller: 'ObrasController'
        })*/;
    }
})();
