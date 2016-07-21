(function () {

  angular
    .module('bienal')
    .controller('PersonasController', ['$scope', '$state', '$stateParams', 'personasService', PersonasCtrl])
    .controller('ConfirmarController', ['$scope', '$state', '$stateParams', 'localServices', 'personasService', ConfirmarCtrl]);
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

  function ConfirmarCtrl($scope, $state, $stateParams, localServices, personasService) {
    $scope.nombre = $stateParams.nombre;
    $scope.apellido = $stateParams.apellido;
    $scope.email = $stateParams.email;
    $scope.dni = $stateParams.dni;
    $scope.voto_audiovisuales = $stateParams.voto_audiovisuales;
    $scope.voto_visuales = $stateParams.voto_visuales;
    $scope.voto_musica = $stateParams.voto_musica;
    $scope.voto_escenicas = $stateParams.voto_escenicas;
    $scope.voto_letras = $stateParams.voto_letras;
    $scope.votos = [];

    localServices.getObra( $scope.voto_audiovisuales )
      .then(function (res) {
        $scope.votos.push(res.data);
        localServices.getObra( $scope.voto_visuales )
          .then(function (res) {
            $scope.votos.push(res.data);
            localServices.getObra( $scope.voto_musica )
              .then(function (res) {
                $scope.votos.push(res.data);
                localServices.getObra( $scope.voto_escenicas )
                  .then(function (res) {
                    $scope.votos.push(res.data);
                    localServices.getObra( $scope.voto_letras )
                      .then(function (res) {
                        $scope.votos.push(res.data)
                      },function (res) {
                        console.log("Falló al recuperar letras");
                      });
                  },function (res) {
                    console.log("Falló al recuperar escenicas");
                  });
              },function (res) {
                console.log("Falló al recuperar musica");
              });
          },function (res) {
            console.log("Falló al recuperar visuales");
          });
      },function (res) {
        console.log("Falló al recuperar audiovisuales");
      });

    $scope.enviar_voto = function () {
      var obj = {};
      obj.nombre = $scope.nombre;
      obj.apellido = $scope.apellido;
      obj.dni = $scope.dni;
      obj.email = $scope.email;
      obj.voto_audiovisuales = $scope.voto_audiovisuales;
      obj.voto_visuales = $scope.voto_visuales;
      obj.voto_musica = $scope.voto_musica;
      obj.voto_escenicas = $scope.voto_escenicas;
      obj.voto_letras = $scope.voto_letras;
      
      personasService.enviar_voto( obj ).then(function (res) {
        $state.go('agradecimiento');
      },function (res) {
        console.log('Errores al enviar voto al servidor');
      });
    };
  }
})();
