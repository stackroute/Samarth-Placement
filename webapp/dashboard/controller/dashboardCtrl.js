angular.module('samarth.dashboard')
.controller('dashboardCtrl', dashboardCtrl);

function dashboardCtrl($scope, $mdDialog, $log, circlesGetService, $rootScope, $auth, $location, $state,$interval) {
  var name="";
   $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {

       if (toState.name == 'index') {

           $location.path('/home/dashboard');

         }
       });

 $rootScope.user = $auth.getPayload();


 if ($auth.isAuthenticated()) {
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

     }, function(err) {

     });

     circlesGetService.getCandidate(profs)
     .then(function(response) {

      for (var i = 0; i < response.data.length; i++) {
        arr[i].applied=response.data[i].applied;
        arr[i].notApplied=response.data[i].Candidates - response.data[i].applied;
        arr[i].profession=response.data[i].profession;
     }
     }, function(err) {

     });
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

  //  function dashboardCtrl($interval) {
  //      var self = this;
  //    console.log("hey")
  //      self.activated = true;
      //  self.name = 40;

       // Iterate every 100ms, non-stop and increment
       // the Determinate loader.
    //    $interval(function() {
    //     //  console.log("inside interval function", name);
    //     //  $scope.names=10;
    //     //  self.name += 1;
    //     //  if (self.name > 100) {
    //     //    self.name = 30;
    //     //  }
    //
    //   }, 70);
    // //  }



 };
