(function(){
  'use strict'
  angular
    .module('samarth.home') 
    .controller('navbarCtrl', navbarCtrl);
    function navbarCtrl($http,navFactory,$mdSidenav,$rootScope,$state,$auth) 
    {
       var vm=this;
       var navItems={};
       $rootScope.sideicon = false;
       $rootScope.logout = false;
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
       $state.go('index');
       $auth.removeToken();
     }
    }

})();
  




























