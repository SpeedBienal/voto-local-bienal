(function () {

  angular
    .module('bienal')
    .factory('localServices', locales_);

  function locales_($http) {
    return {
      getAll: function ( categoria ) {
        return $http.get('http://localhost:3000/api/obras/categorias/'+categoria);
      }
    }
  }

})();