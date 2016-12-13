angular.module('samarth.dashboard')
  .controller('dashboardCtrl',dashboardCtrl);

   function dashboardCtrl($scope, $mdDialog, $log, circlesGetService,$rootScope,$auth,$location,$state) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
               console.log("kumari");
                //if user is already traversing to index stage, ignore this check
                //Here ignore all those states, which need not have authentication 
                if (toState.name == 'index') {
                    //index state does not need prior authentication
                    $location.path('/home/dashboard');
                }
                });
               
               $rootScope.user=$auth.getPayload();
               console.log($rootScope.user);
                
            if ($auth.isAuthenticated()) {
               $rootScope.sideicon = true;
               $rootScope.logout = true;
            
           } else {
               $rootScope.logout = false;
               $rootScope.sideicon = false;
               console.log("noo");
               $rootScope.err="invalid username or password";
               $state.go('index');
           }
       circlesGetService.getCircle()
          .then(function(response) {
              $scope.profiling = response.data;
             
          }, function(err) {
              
          });
        };
      