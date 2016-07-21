(function () {

  angular
    .module('bienal')
    .controller('AudioVisualesController',  ['$scope', '$state', '$stateParams', '$mdDialog','localServices', AudioVisualesCtrl])
    .controller('VisualesController',       ['$scope', '$state', '$stateParams', '$mdDialog','localServices', VisualesCtrl])
    .controller('MusicaController',         ['$scope', '$state', '$stateParams', '$mdDialog','localServices', MusicaCtrl])
    .controller('EscenicasController',      ['$scope', '$state', '$stateParams', '$mdDialog','localServices', EscenicasCtrl])
    .controller('LetrasController',         ['$scope', '$state', '$stateParams', '$mdDialog','localServices', LetrasCtrl]);

  function AudioVisualesCtrl($scope, $state, $stateParams, $mdDialog, localServices) {
    $scope.nombre = $stateParams.nombre;
    $scope.apellido = $stateParams.apellido;
    $scope.email = $stateParams.email;
    $scope.dni = $stateParams.dni;
    $scope.obras = [];
    $scope.filtro = "";

    $scope.getAll = function () {
      return localServices.getAll('audiovisuales');
    };

    $scope.getAll().then(function (res) {
      $scope.obras = res.data;
    },function (res) {
      console.log("No se resolvió la promesa de audiovisuales");
    });

    $scope.showConfirm = function(ev, obra) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
      .title('Confirmar voto')
      .textContent('¿Desea votar la obra "'+ obra.titulo + '"" de '+ obra.autor+', para la categoría audiovisuales?')
      .ariaLabel('confirm')
      .targetEvent(ev)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show( confirm ).then(function() {
        $state
          .go('votoVisuales', {
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            email:$scope.email,
            dni:$scope.dni,
            voto_audiovisuales: obra.id
          });
      }, function() {
        //cancel handler
        //do nothing
      });
    };
  }

  function VisualesCtrl($scope, $state, $stateParams, $mdDialog, localServices) {
    $scope.nombre = $stateParams.nombre;
    $scope.apellido = $stateParams.apellido;
    $scope.email = $stateParams.email;
    $scope.dni = $stateParams.dni;
    $scope.voto_audiovisuales = $stateParams.voto_audiovisuales;
    $scope.obras = [];
    $scope.filtro = "";

    $scope.getAll = function () {
      return localServices.getAll('visuales');
    };

    $scope.getAll().then(function (res) {
      $scope.obras = res.data;
    },function (res) {
      console.log("No se resolvió la promesa de visuales");
    });

    $scope.showConfirm = function(ev, obra) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
      .title('Confirmar voto')
      .textContent('¿Desea votar la obra "'+ obra.titulo + '"" de '+ obra.autor+', en la categoría de visuales?')
      .ariaLabel('confirm')
      .targetEvent(ev)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show( confirm ).then(function() {
        $state
          .go('votoMusica', {
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            email:$scope.email,
            dni:$scope.dni,
            voto_audiovisuales: $scope.voto_audiovisuales,
            voto_visuales: obra.id
          });
      }, function() {
        //cancel handler
        //do nothing
      });
    };
  }

  function MusicaCtrl($scope, $state, $stateParams, $mdDialog, localServices) {
    $scope.nombre = $stateParams.nombre;
    $scope.apellido = $stateParams.apellido;
    $scope.email = $stateParams.email;
    $scope.dni = $stateParams.dni;
    $scope.voto_audiovisuales = $stateParams.voto_audiovisuales;
    $scope.voto_visuales = $stateParams.voto_visuales;
    $scope.obras = [];
    $scope.filtro = "";

    $scope.getAll = function () {
      return localServices.getAll('musica');
    };

    $scope.getAll().then(function (res) {
      $scope.obras = res.data;
    },function (res) {
      console.log("No se resolvió la promesa de música");
    });

    $scope.showConfirm = function(ev, obra) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
      .title('Confirmar voto')
      .textContent('¿Desea votar la obra "'+ obra.titulo + '"" de '+ obra.autor+', para la categoría música?')
      .ariaLabel('confirm')
      .targetEvent(ev)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show( confirm ).then(function() {
        $state
          .go('votoEscenicas', {
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            email:$scope.email,
            dni:$scope.dni,
            voto_audiovisuales: $scope.voto_audiovisuales,
            voto_visuales: $scope.voto_visuales,
            voto_musica: obra.id
          });
      }, function() {
        //cancel handler
        //do nothing
      });
    };
  }

  function EscenicasCtrl($scope, $state, $stateParams, $mdDialog, localServices) {
    $scope.nombre = $stateParams.nombre;
    $scope.apellido = $stateParams.apellido;
    $scope.email = $stateParams.email;
    $scope.dni = $stateParams.dni;
    $scope.voto_audiovisuales = $stateParams.voto_audiovisuales;
    $scope.voto_visuales = $stateParams.voto_visuales;
    $scope.voto_musica = $stateParams.voto_musica;
    $scope.obras = [];
    $scope.filtro = "";

    $scope.getAll = function () {
      return localServices.getAll('escenicas');
    };

    $scope.getAll().then(function (res) {
      $scope.obras = res.data;
    },function (res) {
      console.log("No se resolvió la promesa de escénicas");
    });

    $scope.showConfirm = function(ev, obra) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
      .title('Confirmar voto')
      .textContent('¿Desea votar la obra "'+ obra.titulo + '"" de '+ obra.autor+', para la categoría escénicas?')
      .ariaLabel('confirm')
      .targetEvent(ev)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show( confirm ).then(function() {
        $state
          .go('votoLetras', {
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            email:$scope.email,
            dni:$scope.dni,
            voto_audiovisuales: $scope.voto_audiovisuales,
            voto_visuales: $scope.voto_visuales,
            voto_musica: $scope.voto_musica,
            voto_escenicas: obra.id
          });
      }, function() {
        //cancel handler
        //do nothing
      });
    };
  }

  function LetrasCtrl($scope, $state, $stateParams, $mdDialog, localServices) {
    $scope.nombre = $stateParams.nombre;
    $scope.apellido = $stateParams.apellido;
    $scope.email = $stateParams.email;
    $scope.dni = $stateParams.dni;
    $scope.voto_audiovisuales = $stateParams.voto_audiovisuales;
    $scope.voto_visuales = $stateParams.voto_visuales;
    $scope.voto_musica = $stateParams.voto_musica;
    $scope.voto_escenicas = $stateParams.voto_escenicas;
    $scope.obras = [];
    $scope.filtro = "";

    $scope.getAll = function () {
      return localServices.getAll('letras');
    };

    $scope.getAll().then(function (res) {
      $scope.obras = res.data;
    },function (res) {
      console.log("No se resolvió la promesa de letras");
    });

    $scope.showConfirm = function(ev, obra) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
      .title('Confirmar voto')
      .textContent('¿Desea votar la obra "'+ obra.titulo + '"" de '+ obra.autor+', para la categoría letras?')
      .ariaLabel('confirm')
      .targetEvent(ev)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show( confirm ).then(function() {
        $scope.votos.letras = obra;
        $state
          .go('confirmar', {
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            email:$scope.email,
            dni:$scope.dni,
            voto_audiovisuales: $scope.voto_audiovisuales,
            voto_visuales: $scope.voto_visuales,
            voto_musica: $scope.voto_musica,
            voto_escenicas: $scope.voto_escenicas,
            voto_letras: obra.id
          });
      }, function() {
        //cancel handler
        //do nothing
      });
    };
  }

})();
