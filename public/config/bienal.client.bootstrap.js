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
          url:'/audiovisuales/:nombre/:apellido/:email/:dni/',
          templateUrl: '/views/listas/audiovisuales.client.view.html',
          controller: 'AudioVisualesController'
        })
        .state('votoVisuales',{
          url:'/visuales/:nombre/:apellido/:email/:dni/:voto_audiovisuales',
          templateUrl: '/views/listas/visuales.client.view.html',
          controller: 'VisualesController'
        })
        .state('votoMusica',{
          url: '/musica/:nombre/:apellido/:email/:dni/:voto_audiovisuales/:voto_visuales',
          templateUrl: '/views/listas/musica.client.view.html',
          controller: 'MusicaController'
        })
        .state('votoLetras',{
          url: '/letras/:nombre/:apellido/:email/:dni/:voto_audiovisuales/:voto_visuales/:voto_musica/:voto_escenicas',
          templateUrl: '/views/listas/letras.client.view.html',
          controller: 'LetrasController'
        })
        .state('votoEscenicas',{
          url: '/escenicas/:nombre/:apellido/:email/:dni/:voto_audiovisuales/:voto_visuales/:voto_musica',
          templateUrl: '/views/listas/escenicas.client.view.html',
          controller: 'EscenicasController'
        })
        .state('agradecimiento',{
          url: '/gracias',
          templateUrl: '/views/mensajes/agradecimiento.client.view.html'
        })
        .state('repetido', {
          url: '/error',
          templateUrl: '/views/mensajes/repetido.client.view.html'
        })
        .state('confirmar', {
          url: '/confirmar/:nombre/:apellido/:email/:dni/:voto_audiovisuales/:voto_visuales/:voto_musica/:voto_escenicas/:voto_letras',
          templateUrl: '/views/mensajes/confirmacion.client.view.html',
          controller: 'ConfirmarController'
        });

        $locationProvider.html5Mode({
          enabled: false,
          requireBase: false
        });
    }

})();
