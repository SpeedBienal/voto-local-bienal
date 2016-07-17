(function () {

  angular
    .module('bienal')
    .controller('AudioVisualesController',  ['$scope', 'localServices', AudioVisualesCtrl])
    .controller('VisualesController',       ['$scope', 'localServices', VisualesCtrl])
    .controller('MusicaController',         ['$scope', 'localServices', MusicaCtrl])
    .controller('EscenicasController',      ['$scope', 'localServices', EscenicasCtrl])
    .controller('LetrasController',         ['$scope', 'localServices', LetrasCtrl]);

  function AudioVisualesCtrl($scope, localServices) {
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
  }

  function VisualesCtrl($scope, localServices) {
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
  }

  function MusicaCtrl($scope, localServices) {
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
  }

  function EscenicasCtrl($scope, localServices) {
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
  }

  function LetrasCtrl($scope, localServices) {
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
  }

})();
