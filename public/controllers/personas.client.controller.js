(function () {

  angular
    .module('bienal')
    .controller('PersonasController', ['$scope', '$state', '$mdDialog', 'personasService', PersonasCtrl]);

  function PersonasCtrl($scope, $state, $mdDialog, personasService) {
    $scope.nombre = "";
    $scope.apellido = "";
    $scope.dni = "";
    $scope.email = "";
    $scope.votos = { 'musica': null,   'audiovisuales': null,
      'visuales': null, 'letras': null, 'escenicas': null };
    $scope.persona_disponible_de_voto = true;

    $scope.cotejar_datos_de_persona = function (nombre, apellido, email, dni) {
      return personasService.cotejar_datos_de_persona(nombre, apellido, email, dni);
    };

    $scope.comprobar_disponibilidad = function () {
      $scope.cotejar_datos_de_persona( $scope.nombre, $scope.apellido, $scope.email, $scope.dni )
        .then(function (res) {
          $scope.persona_disponible_de_voto = res.data.puede_votar;
          if ( $scope.persona_disponible_de_voto ) {
            $state.go('votoAudioVisuales');
          } else {
            //raiseo el error de que ya voto, que no se olvide D:
            $state.go('repetido');
          }
        },function (res) {
          console.log("No se resolvio la promesa de controlar la persona");
        });
    };

    $scope.enviar_voto = function () {
      var obj = {};
      obj.nombre = $scope.nombre;
      obj.apellido = $scope.apellido;
      obj.dni = $scope.dni;
      obj.email = $scope.email;
      obj.votos = $scope.votos;
      var promise = personasService.enviar_voto( obj );
      if (promise.status != 200) {
        $log.debug(promise);
        return false;
      } else {
        return true;
      }
    };

    $scope.seleccionar_voto = function (obra) {
      switch (obra.categoria) {
        case 'escenicas':
        $scope.votos.escenicas = obra;
        $state.go('votoLetras');
        break;

        case 'musica':
        $scope.votos.musica = obra;
        $state.go('votoEscenicas');
        break;

        case 'visuales':
        $scope.votos.visuales = obra;
        $state.go('votoMusica');
        break;

        case 'audiovisuales':
        $scope.votos.audiovisuales = obra;
        $state.go('votoVisuales');
        break;

        case 'letras':
        $scope.votos.letras = obra;
        $state.go('agradecimiento');
        break;
        default:
      }
    };

    $scope.showConfirm = function(ev, obra) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
      .title('Confirmar voto')
      .textContent('¿Desea votar la obra "'+ obra.titulo + '"" de '+ obra.autor+'?')
      .ariaLabel('confirm')
      .targetEvent(ev)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show( confirm ).then(function() {

        $scope.seleccionar_voto(obra);

      }, function() {
        //cancel handler
        //do nothing
      });
    };
  }
})();
