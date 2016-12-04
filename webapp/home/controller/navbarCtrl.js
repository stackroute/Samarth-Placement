(function(){
  'use strict'
  angular
    .module('samarth.home') 
    .controller('navbarCtrl', navbarCtrl);
    function navbarCtrl($http,navFactory,$mdSidenav,$rootScope) 
    {
       var vm=this;
       var navItems={};
       $rootScope.sideicon = false;
       $rootScope.logout = false;
       vm.openSideNavPanel=openSideNavPanel;
       vm.closeSideNavPanel=closeSideNavPanel;
       vm.getSidenav=getSidenav;

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
     
    }
})();
  




























