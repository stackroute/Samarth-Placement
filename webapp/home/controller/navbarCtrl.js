(function(){
  'use strict'
  angular
  .module('samarth.home') 
  .controller('navbarCtrl', navbarCtrl);
  function navbarCtrl($http,navFactory,$mdSidenav,$rootScope,$state,$auth,$scope) 
  {

   $rootScope.logout=false;
   if($auth.isAuthenticated())
   {
    
     
     $rootScope.user=$auth.getPayload();
     $rootScope.message=$rootScope.user.name;
     console.log($rootScope.message+"name");
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
