(function(){
  'use strict'
  angular
    .module('samarth.home') 
    .controller('navbarCtrl', navbarCtrl);
    function navbarCtrl($http,navFactory,$mdSidenav,$rootScope,$state,$auth) 
    {
          
      
      if($auth.isAuthenticated())
    {
      /*console.log("nav");
            $rootScope.$on('$stateChangeStart','$location', function(event, toState, toParams, fromState,$location) {
                console.log("kumari");
                //if user is already traversing to index stage, ignore this check
                //Here ignore all those states, which need not have authentication 
                if (toState.name == 'index') {
                    //index state does not need prior authentication
                    $location.path('/home/dashboard');
                    console.log("sdggdfgfdhgf");
                }

                });*/

      $state.go('index.dashboard');
   
}
     
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
  




























