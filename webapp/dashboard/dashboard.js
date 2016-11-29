angular
    .module('samarth.dashboard',[])
    .config(config);

    function config($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.signin.dashboard', {
        url:'/dashboard',
        views: {
            'content@': {
                templateUrl: 'dashboard/template/dashboard.html',
                controller:  'dashboardCtrl',
                controllerAs : 'vm'

            }
        }

    });
 }
