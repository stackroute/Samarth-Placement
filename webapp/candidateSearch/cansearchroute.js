angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.signin.candidatesearch', {
        url:'/candidatesearch',
        views: {
            'content@': {
                templateUrl: 'candidateSearch/template/searchcandidate.html',
                
            }
        }
 
    })
 });