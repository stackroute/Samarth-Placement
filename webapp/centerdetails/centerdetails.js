angular
    .module('samarth.centerdetails', [])
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
        .state('index.centerdetails', {
            url: '/centerdetails',
            views: {
                'content@': {
                    templateUrl: 'centerdetails/templates/centerdetails.html',
                    // controller: 'centerdetailCtrl2',
                    resolve: {
                                loginRequired: loginRequired
                                   
                            }
                }
            }
        });
        
}
