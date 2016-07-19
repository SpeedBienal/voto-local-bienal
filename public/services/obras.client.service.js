(function () {
  angular
    .module('bienal')
    .factory('obrasService', function( $http ) {
      return {
        crear: function (obj) {
          return $http.post('http://localhost:3000/api/obras', obj);
        }
      };
    });
})();
