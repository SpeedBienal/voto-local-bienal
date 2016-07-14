(function () {

  angular
    .module('bienal')
    .controller('AudioVisualesController',  ['$scope', 'localServices', AudioVisualesCtrl])
    .controller('VisualesController',       ['$scope', 'localServices', VisualesCtrl])
    .controller('MusicaController',         ['$scope', 'localServices', MusicaCtrl])
    .controller('EscenicasController',      ['$scope', 'localServices', EscenicasCtrl])
    .controller('LetrasController',         ['$scope', 'localServices', LetrasCtrl])
    .run(function ($log) {
      $log.debug('cargo listas controllers')
    });

  function AudioVisualesCtrl($scope, localServices) {
    $scope.obras = [];
    $scope.filtro = "";

    $scope.getAll = function () {
      return localServices.getAll;
    };

    $scope.obras = $scope.getAll('audiovisuales');
  }

  function VisualesCtrl($scope, localServices) {
    $scope.obras = [];
    $scope.filtro = "";

    $scope.getAll = function () {
      return localServices.getAll;
    };

    $scope.obras = $scope.getAll('visuales');
  }

  function MusicaCtrl($scope, localServices) {
    $scope.obras = [];
    $scope.filtro = "";

    $scope.getAll = function () {
      return localServices.getAll;
    };

    $scope.obras = $scope.getAll('musica');
  }

  function EscenicasCtrl($scope, localServices) {
    $scope.obras = [];
    $scope.filtro = "";

    $scope.getAll = function () {
      return localServices.getAll;
    };

    $scope.obras = $scope.getAll('escenicas');
  }

  function LetrasCtrl($scope, localServices) {
    $scope.obras = [];
    $scope.filtro = "";

    $scope.getAll = function () {
      return localServices.getAll;
    };

    $scope.obras = $scope.getAll('letras');
  }

})();
