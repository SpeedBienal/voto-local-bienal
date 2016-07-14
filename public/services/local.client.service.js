(function () {

  angular
    .module('bienal')
    .factory('localServices', locales_)
    .run(function ($log) {
      $log.debug('cargo local service')
    });

  function locales_($http) {
    return {
      getAll: function ( categoria ) {
        return $http
          .get('http://localhost:3000/api/obras/categorias/'+categoria)
          .then(function (response) {
            //success
            return response.data;
          }, function (response) {
            //error
            return response.status != 200 ? false : response.data;
          });
      }
    }
  }

})();
