(function () {
  angular
    .module("votacion", ["chart.js"])
    .config(function (ChartJsProvider) {
      // Configure all charts
      ChartJsProvider.setOptions({
        colors: ['#ED7635', '#393E80', '#F8B451', '#EA5A57', '#00A880', '#949FB1', '#4D5360']
      });
    })
    .config(['$stateProvider','$locationProvider', rutas_votacion ]);

  function rutas_votacion() {
      $stateProvider
        .state('votacion',{
          url: '/votacion',
          templateUrl: '',
          controller: 'BarCtrl'
        })
  }
})();
