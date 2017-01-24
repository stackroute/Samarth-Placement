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
       let name="";
       let i=0;
       for ( i = 0; i < response.data.length; i++) {
         name += response.data[i].name + '-';
       }
       circlesGetService.getStats(name)
       .then(function(response) {
         $scope.centername = response.data;
       },
        function(err) {
         return err;
       });
     },
     function(err) {
      return err;
     });
 };
