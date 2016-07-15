(function () {

  angular
    .module('bienal')
    .factory('personasService', personas_)
    .run(function ($log) {
      $log.debug('cargo personas service')
    });

  function personas_() {
    return {
      cotejar_datos_de_persona: function ( nombre, apellido, email, dni ) {
        var obj = {nombre: nombre, apellido: apellido, email: email, dni: dni};
        return $http
          .post('http://localhost:3000/api/personas/buscar/', obj)
          .then(function (response) {
            //success
            return response.data.puede_votar;
          });
      },

      enviar_voto: function ( obj ) {
        return $http.post('http://localhost:3000/api/persona/', obj )
          .then(function (resp) {
            return resp;
          }, function (resp) {
            return resp;
          });
      }
    }
  }

})();
