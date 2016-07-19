(function () {
  angular
    .module('bienal')
    .controller('ObrasController', [ '$scope', 'obrasService', 'localServices', obra_ ] );

  class Obra {
    constructor(_titulo, _autor, _categoria) {
      this.titulo = _titulo;
      this.autor = _autor;
      this.categoria = _categoria;
    }
  }

  function obra_( $scope, obrasService, localServices ) {

    $scope.obras = [];
    $scope.obras['audiovisuales'] = [];
    $scope.obras['visuales'] = [];
    $scope.obras['musica'] = [];
    $scope.obras['escenicas'] = [];
    $scope.obras['letras'] = [];

    $scope.titulo = '';
    $scope.autor = '';
    $scope.categoria = '';

    localServices.getEntireList().then(function (res) {
      var data = res.data;
      for (var variable in data) {
        if (res.data.hasOwnProperty(variable)) {
          var obj = data[variable];
          var cat = obj.categoria;
          $scope.obras[ cat ].push( obj );
        }
      }
    }, function (res) {
      console.log('Salio mal algo');
      console.log(res);
    });

    $scope.agregarObra = function () {
      var obj = new Obra($scope.titulo, $scope.autor, $scope.categoria);
      obrasService.crear(obj).then(function (res) {
        console.log('Obra creada <'+$scope.titulo+','+$scope.autor+'>');

        $scope.obras[ obj.categoria ].unshift( obj );
        $scope.titulo = '';
        $scope.autor = '';
      },function () {
        console.log('!! NO SE PUDO CREAR LA OBRA !!<'+$scope.titulo+','+$scope.autor+'>');
      });
    };
  }
})();
