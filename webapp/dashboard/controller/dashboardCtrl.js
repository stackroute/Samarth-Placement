angular.module('samarth.dashboard')
  .controller('dashboardCtrl',dashboardCtrl);

   function dashboardCtrl($scope, $mdDialog, $log, circlesGetService,$rootScope,$auth,$location,$state) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState,$scope) {
               // console.log("kumari");
                //if user is already traversing to index stage, ignore this check
                //Here ignore all those states, which need not have authentication
                if (toState.name == 'index') {
                    //index state does not need prior authentication
                    $location.path('/home/dashboard');
                    console.log("sdggdfgfdhgf");
                }
                });
               $scope.message="";
               $rootScope.user=$auth.getPayload();
               console.log($rootScope.user);
               $scope.message=$rootScope.user.name

            if ($auth.isAuthenticated()) {
               $rootScope.sideicon = true;
               $rootScope.logout = true;
               console.log("hyhy");

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

              console.log(response.data);

          }, function(err) {

          });
        };
