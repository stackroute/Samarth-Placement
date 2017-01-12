angular
    .module('samarth.centerdetailsreg', [])
    .config(config);
    
function config($stateProvider) {
                 let loginRequired = ['$q','$location', '$auth', function($q, $location, $auth) {
                let deferred = $q.defer();
                if ($auth.isAuthenticated()) {
                    deferred.resolve();
                } else {
                    $location.path('/home');
                }
                return deferred.promise;
            }];
   
    $stateProvider
        .state('index.centerdetailsreg', {
            url: '/centerdetailsreg',
            views: {
                'content@': {
                    templateUrl: 'centerdetailsreg/templates/centerdetailsreg.html',
                    controller: 'centerdetailsregCtrl',
                    controllerAs: 'vm',

                    resolve: {
                                loginRequired: loginRequired
                                   
                            }
                }
            }
        });
}
