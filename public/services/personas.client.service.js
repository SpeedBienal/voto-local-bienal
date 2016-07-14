(function () {

  angular
    .module('bienal')
    .factory('personasService', personas_)
    .run(function ($log) {
      $log.debug('cargo personas service')
    });

  function personas_() {
    return {
      cotejar_datos_de_persona: function ( categoria ) {
        return $http
          .get('http://localhost:3000/api/obras/categorias/'+categoria)
          .then(function (response) {
            //success
            return response.data;
          }, function (response) {
            //error
            return response.status != 200 ? false : response.data;
          });
      },

      enviar_voto: function ( obj ) {
        return $http.post('http://localhost:3000/api/votacion', obj )
          .then(function (resp) {
            return resp;
          }, function (resp) {
            return resp;
          });
      }
    }
  }

})();
