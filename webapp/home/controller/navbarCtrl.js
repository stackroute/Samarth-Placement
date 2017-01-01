  angular
  .module('samarth.home') 
  .controller('navbarCtrl', ['$http',
    'navFactory',
    '$mdSidenav',
    '$rootScope',
    '$state',
    '$auth',
    '$scope',
    function($http,
      navFactory,
      $mdSidenav,
      $rootScope,
      $state,
      $auth,
      $scope) 
  {

   $rootScope.logout=false;
   if($auth.isAuthenticated())
   {
    
     $scope.message="";
     $rootScope.user=$auth.getPayload();
     $scope.message=$rootScope.user.name;
     $state.go('index.dashboard');
     
   }
   else{
    $state.go('index.home');
  }
  
   navFactory.then(function(response) {
      $scope.navItems=response.data;
      });

  $scope.openSideNavPanel=function() {
    $mdSidenav('left').open();
  };
  
  $scope.closeSideNavPanel=function() {
    $mdSidenav('left').close();
  };
  
  $scope.logout=function()
  {
   $rootScope.sideicon = false;
   $rootScope.logout = false;
   $state.go('index.home');
   $auth.removeToken();
 }
}

]);
  