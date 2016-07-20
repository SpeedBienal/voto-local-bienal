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
    $scope.votos = $stateParams.votos;
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
        $scope.votos.audiovisuales = obra;
        $state
          .go('visuales', {
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            email:$scope.email,
            dni:$scope.dni,
            votos:$scope.votos
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
    $scope.votos = $stateParams.votos;
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
      .textContent('¿Desea votar la obra "'+ obra.titulo + '"" de '+ obra.autor+', en la categoria de visuales?')
      .ariaLabel('confirm')
      .targetEvent(ev)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show( confirm ).then(function() {
        $scope.votos.visuales = obra;
        $state
          .go('musica', {
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            email:$scope.email,
            dni:$scope.dni,
            votos:$scope.votos
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
    $scope.votos = $stateParams.votos;
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
      .textContent('¿Desea votar la obra "'+ obra.titulo + '"" de '+ obra.autor+'?')
      .ariaLabel('confirm')
      .targetEvent(ev)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show( confirm ).then(function() {
        $scope.votos.musica = obra;
        $state
          .go('escenicas', {
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            email:$scope.email,
            dni:$scope.dni,
            votos:$scope.votos
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
    $scope.votos = $stateParams.votos;
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
      .textContent('¿Desea votar la obra "'+ obra.titulo + '"" de '+ obra.autor+'?')
      .ariaLabel('confirm')
      .targetEvent(ev)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show( confirm ).then(function() {
        $scope.votos.escenicas = obra;
        $state
          .go('letras', {
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            email:$scope.email,
            dni:$scope.dni,
            votos:$scope.votos
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
    $scope.votos = $stateParams.votos;
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
      .textContent('¿Desea votar la obra "'+ obra.titulo + '"" de '+ obra.autor+'?')
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
            votos:$scope.votos
          });
      }, function() {
        //cancel handler
        //do nothing
      });
    };
  }

})();
