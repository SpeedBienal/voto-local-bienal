(function () {

  angular
    .module('bienal')
    .factory('personasService', personas_);

  function personas_($http) {
    return {
      cotejar_datos_de_persona: function ( nombre, apellido, email, dni ) {
        var obj = {nombre: nombre, apellido: apellido, email: email, dni: dni};
        return $http
          .post('http://localhost:3000/api/personas/buscar/', obj);
      },

      enviar_voto: function ( obj ) {
        return $http.post('http://localhost:3000/api/personas/', obj );
      }
    }
  }

})();
