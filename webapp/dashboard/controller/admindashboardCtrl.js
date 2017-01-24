angular
 .module('samarth.admindashboard')
 .controller('admindashboardCtrl', admindashboardCtrl);

 function admindashboardCtrl($scope,
    $mdDialog,
     $log,
   circlesGetService,
    $rootScope,
     $auth,
    $location,
     $state) {
     $rootScope.user=$auth.getPayload();
     $rootScope.message=$rootScope.user.name;
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

     circlesGetService.getCircle()
     .then(function(response) {
       let profs="";
       let i=0;
       for ( i = 0; i < response.data.length; i++) {
         profs += response.data[i].name + '-';
       }
       circlesGetService.getStats(profs)
       .then(function(response) {
         $scope.profiling = response.data;
       },
        function(err) {
         return err;
       });
     },
     function(err) {
      return err;
     });
 };
