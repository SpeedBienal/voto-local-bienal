(function () {

  angular
    .module('bienal')
    .controller('PersonasController', ['$scope', '$state', '$stateParams', 'personasService', PersonasCtrl])
    .controller('ConfirmarController', ['$scope', '$state', '$stateParams', 'personasService', ConfirmarCtrl]);

  function PersonasCtrl($scope, $state, $stateParams, personasService) {
    $scope.nombre = "";
    $scope.apellido = "";
    $scope.dni = "";
    $scope.email = "";
    $scope.votos = { musica: null, audiovisuales: null,
      visuales: null, letras: null, escenicas: null };
    $scope.persona_disponible_de_voto = true;

    $scope.cotejar_datos_de_persona = function (nombre, apellido, email, dni) {
      return personasService.cotejar_datos_de_persona(nombre, apellido, email, dni);
    };

    $scope.comprobar_disponibilidad = function () {
      $scope.cotejar_datos_de_persona( $scope.nombre, $scope.apellido, $scope.email, $scope.dni )
        .then(function (res) {
          $scope.persona_disponible_de_voto = res.data.puede_votar;
          if ( $scope.persona_disponible_de_voto ) {
            $state
            .go('votoAudioVisuales',{
              nombre:$scope.nombre,
              apellido:$scope.apellido,
              email:$scope.email,
              dni:$scope.dni,
              votos: JSON.stringify($scope.votos)
            });
          } else {
            //raiseo el error de que ya voto, que no se olvide D:
            $state.go('repetido');
          }
        },function (res) {
          console.log("No se resolvio la promesa de controlar la persona");
        });
    };

  }

  function ConfirmarCtrl($scope, $state, $stateParams, personasService) {
    $scope.nombre = $stateParams.nombre;
    $scope.apellido = $stateParams.apellido;
    $scope.email = $stateParams.email;
    $scope.dni = $stateParams.dni;
    $scope.votos = $stateParams.votos;

    $scope.enviar_voto = function () {
      var obj = {};
      obj.nombre = $scope.nombre;
      obj.apellido = $scope.apellido;
      obj.dni = $scope.dni;
      obj.email = $scope.email;
      obj.votos = $scope.votos;
      personasService.enviar_voto( obj ).then(function (res) {
        $state.go('agradecimiento');
      },function (res) {
        console.log('Errores al enviar voto al servidor');
      });
    };
  }
})();
