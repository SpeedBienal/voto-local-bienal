(function () {
  angular
    .module('votacion', ['chart.js', 'ui.router'])
    /*.config(function (ChartJsProvider) {
      // Configure all charts
      ChartJsProvider.setOptions({
        colors: ['#ED7635', '#393E80', '#F8B451', '#EA5A57', '#00A880', '#949FB1', '#4D5360']
      });
    })*/
    .config(['$stateProvider','$locationProvider', rutas_votacion ])
    .run(['$state', function ( $state ) {
      $state.go('votacion');
    }]);

  function rutas_votacion( $stateProvider, $locationProvider ) {
      $stateProvider
        .state('votacion',{
          url: '/votacion',
          templateUrl: '/views/votacion.client.view.html',
          controller: 'BarCtrl'
        });
  }
})();
