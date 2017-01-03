(function() {
  'use strict'
  angular
  .module('samarth.home') 
  .controller('navbarCtrl', navbarCtrl);
  function navbarCtrl(navFactory,
    $auth,
    $mdSidenav,
    $rootScope,
    $state) 
  {
   $rootScope.logout = false;
   if($auth.isAuthenticated())
   {
     $rootScope.user = $auth.getPayload();
     $rootScope.message = $rootScope.user.name;
     $state.go('index.dashboard');
   }
   else
   {
    $state.go('index.home');
  }

  let vm = this;
  vm.openSideNavPanel = openSideNavPanel;
  vm.closeSideNavPanel = closeSideNavPanel;
  vm.getSidenav = getSidenav;
  vm.logout = logout;
  vm.getSidenav();

  function getSidenav()
  {
    navFactory.then(function(response)
     {
      vm.navItems = response.data;
    });
  };

  function openSideNavPanel()
   {
    $mdSidenav('left').open();
  };

  function closeSideNavPanel() 
  {
    $mdSidenav('left').close();
  };

  function logout()
  {
   $rootScope.sideicon = false;
   $rootScope.logout = false;
   $state.go('index.home');
   $auth.removeToken();
 };
}
})();
