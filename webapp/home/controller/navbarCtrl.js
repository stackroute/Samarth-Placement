(function(){
  'use strict'
  angular
  .module('samarth.home') 
  .controller('navbarCtrl', navbarCtrl);
  function navbarCtrl($http,navFactory,$mdSidenav,$rootScope,$state,$auth,$scope) 
  {

   console.log("nav");
   $rootScope.logout=false;
   if($auth.isAuthenticated())
   {
    
     $scope.message="";
     $rootScope.user=$auth.getPayload();
     console.log($rootScope.user);
     $scope.message=$rootScope.user.name;
     console.log($scope.message);
     $state.go('index.dashboard');
     
   }
   else{
    $state.go('index.home');
  }
  
  var vm=this;
  var navItems={};
  
  vm.openSideNavPanel=openSideNavPanel;
  
  vm.closeSideNavPanel=closeSideNavPanel;
  vm.getSidenav=getSidenav;
  vm.logout=logout;
  vm.getSidenav();
  

  function getSidenav()
  {
    navFactory.getSidenav().then(function(response) {
      vm.navItems=response.data;
    });
  }
  function openSideNavPanel() {
    $mdSidenav('left').open();
  };
  
  function closeSideNavPanel() {
    $mdSidenav('left').close();
  };
  
  function logout()
  {
   $rootScope.sideicon = false;
   $rootScope.logout = false;
   $state.go('index.home');
   $auth.removeToken();
 }
}

})();
