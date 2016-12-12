angular.module("samarth-webcomponents")
    .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.empreg', {
        url:'employerregistration',
        views: {
            'content@': {
                templateUrl: './samarth-webcomponents/jobproviderreg/template/jobproviderregistration.html'

            }
        }

    })
 });
