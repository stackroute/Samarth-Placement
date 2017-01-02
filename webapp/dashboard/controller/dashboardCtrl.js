angular.module('samarth.dashboard')
.controller('dashboardCtrl', dashboardCtrl);

function dashboardCtrl($scope, $mdDialog, $log, circlesGetService, $rootScope, $auth, $location, $state,$interval) {
  try {
    var name="";
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
      if (toState.name == 'index') {
        $location.path('/home/dashboard');
      }
    });

    $rootScope.user = $auth.getPayload();
    $scope.message=$rootScope.user.name;

    if($auth.isAuthenticated()) {
      $rootScope.sideicon = true;
      $rootScope.logout = true;
    } else {
      $rootScope.logout = false;
      $rootScope.sideicon = false;
      $rootScope.err = "invalid username or password";
      $state.go('index');
    }

    let arr=[];
    circlesGetService.getCircle()
    .then(function(response) {
      var profs="";
      for (var i = 0; i < response.data.length; i++) {
        profs += response.data[i].name + "-";
      }

      circlesGetService.getCountData(profs)
      .then(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        arr.push(response.data[i]);
      }

      circlesGetService.getCandidate(profs)
      .then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          arr[i].applied=response.data[i].applied;
          arr[i].notApplied=response.data[i].Candidates - response.data[i].applied;
          arr[i].profession=response.data[i].profession;
        }
        circlesGetService.getStatus(profs)
        .then(function(response) {
          for (var i = 0; i < response.data.length; i++) {
            arr[i].placed=response.data[i].placed;
          }
          console.log('finalData', arr)
          console.log(arr[0].Candidates);
          name=arr[0].Candidates;
          $scope.profiling = arr;
          console.log("profiling",$scope.profiling);
        }, function(err) {

          });
        }, function(err) {

        });
      }, function(err) {

      });
    }, function(err) {

    });
  }
  catch(err) {
    console.log("Some error occured. Please retry.");
  }
};
