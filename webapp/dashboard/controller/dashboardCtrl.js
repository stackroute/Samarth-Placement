angular
  .module('samarth.dashboard')
  .controller('dashboardCtrl', dashboardCtrl);

  function dashboardCtrl($scope, $mdDialog, $log, circlesGetService, $rootScope, $auth, $location, $state) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
      if (toState.name == 'index') {
        $location.path('/home/dashboard');
      }
    });
    $rootScope.user = $auth.getPayload();
      if ($auth.isAuthenticated()) {
        $rootScope.sideicon = true;
        $rootScope.logout = true;
      } 
      else {
        $rootScope.logout = false;
        $rootScope.sideicon = false;
        $rootScope.err = "invalid username or password";
        $state.go('index');
      }
      
      let arr=[];
      circlesGetService.getCircle()
      .then(function(response) {
        let profs="";
        for (var i = 0; i < response.data.length; i++) {
          profs += response.data[i].name + "-";
        }
        circlesGetService.getStats(profs)
        .then(function(response) {
          console.log('final Data', response.data);
          $scope.profiling = response.data;
        },
         function(err) {
          console.log(err);
        });
      }, 
      function(err) {
        console.log(err);
      });
  };