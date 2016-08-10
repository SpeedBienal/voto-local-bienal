angular
  .module("votacion")
  .controller("BarCtrl", ['$scope', 'socket', 'votacionService', BarCtrl_]);

function BarCtrl_ ($scope, socket, votacionService) {
  $scope.labels = ['Audiovisuales', 'Visuales', 'Música', 'Escénicas', 'Letras'];
  //$scope.series = ['Serie A', 'Series B'];

  $scope.values = [[],[],[]];

  votacionService.getInitial().then(function (res) {
    $scope.values[0].push( parseInt(res.data.audiovisuales[0].total) );
    $scope.values[1].push( parseInt(res.data.audiovisuales[1].total) );
    $scope.values[2].push( parseInt(res.data.audiovisuales[2].total) );
    $scope.values[0].push( parseInt(res.data.visuales[0].total) );
    $scope.values[1].push( parseInt(res.data.visuales[1].total) );
    $scope.values[2].push( parseInt(res.data.visuales[2].total) );
    $scope.values[0].push( parseInt(res.data.musica[0].total) );
    $scope.values[1].push( parseInt(res.data.musica[1].total) );
    $scope.values[2].push( parseInt(res.data.musica[2].total) );
    $scope.values[0].push( parseInt(res.data.escenicas[0].total) );
    $scope.values[1].push( parseInt(res.data.escenicas[1].total) );
    $scope.values[2].push( parseInt(res.data.escenicas[2].total) );
    $scope.values[0].push( parseInt(res.data.letras[0].total) );
    $scope.values[1].push( parseInt(res.data.letras[1].total) );
    $scope.values[2].push( parseInt(res.data.letras[2].total) );
  }, function (res) {
    for (var i = 0; i < $scope.values.length; i++) {
      for (var j = 0; j < 5; j++) {
        $scope.values[i].push(0);
      }
    }
  });

  socket.on('voto', function (data) {
    $scope.values[0][0] = parseInt(data.audiovisuales[0].total);
    $scope.values[1][0] = parseInt(data.audiovisuales[1].total);
    $scope.values[2][0] = parseInt(data.audiovisuales[2].total);
    $scope.values[0][1] = parseInt(data.visuales[0].total);
    $scope.values[1][1] = parseInt(data.visuales[1].total);
    $scope.values[2][1] = parseInt(data.visuales[2].total);
    $scope.values[0][2] = parseInt(data.musica[0].total);
    $scope.values[1][2] = parseInt(data.musica[1].total);
    $scope.values[2][2] = parseInt(data.musica[2].total);
    $scope.values[0][3] = parseInt(data.escenicas[0].total);
    $scope.values[1][3] = parseInt(data.escenicas[1].total);
    $scope.values[2][3] = parseInt(data.escenicas[2].total);
    $scope.values[0][4] = parseInt(data.letras[0].total);
    $scope.values[1][4] = parseInt(data.letras[1].total);
    $scope.values[2][4] = parseInt(data.letras[2].total);

  });

  $scope.$on('$destroy', function() {
      socket.removeListener('voto');
  });
}
