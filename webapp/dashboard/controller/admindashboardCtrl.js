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
     $state,
   $http) {

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

     $http.get('/center/centercircles')
     .then(function(response) {
       console.log('Circle data', response);
       $scope.centerdetails = response.data;
     }, function(err) {
      return err;
     });
 };
