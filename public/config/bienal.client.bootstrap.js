(function () {

  angular
    .module('bienal', ['ngMaterial','ngMessages','ui.router'])
    //configuro las rutas
    .config(['$stateProvider','$locationProvider', rutas ])
    //primer estado, es el ingreso de la persona
    .run(['$state', function ( $state ) {
      $state.go('ingresoDePersona');
    }]);


//funciones de llamado en la configuracion
    function rutas( $stateProvider, $locationProvider ) {
      $stateProvider
        .state('ingresoDePersona',{
          url:'/',
          templateUrl: '/views/comprobar.client.view.html',
          controller: 'PersonasController'
        })
        .state('votoAudioVisuales',{
          url:'/audiovisuales',
          templateUrl: '/views/audiovisuales.client.view.html',
          controller: 'AudioVisualesController'
        })
        .state('votoVisuales',{
          url:'/visuales',
          templateUrl: '/views/visuales.client.view.html',
          controller: 'VisualesController'
        })
        .state('votoMusica',{
          url: '/musica',
          templateUrl: '/views/musica.client.view.html',
          controller: 'MusicaController'
        })
        .state('votoLetras',{
          url: '/letras',
          templateUrl: '/views/letras.client.view.html',
          controller: 'LetrasController'
        })
        .state('votoEscenicas',{
          url: '/escenicas',
          templateUrl: '/views/escenicas.client.view.html',
          controller: 'EscenicasController'
        })
        .state('agradecimiento',{
          url: '/gracias',
          templateUrl: '/views/mensajes/agradecimiento.client.view.html',
          controller: ''
        })
        .state('repetido', {
          url: '/error',
          templateUrl: '/views/mensajes/repetido.client.view.html',
          controller: ''
        });
    }

})();
