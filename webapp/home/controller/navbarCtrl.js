angular
  .module('samarth.home').controller('navbarCtrl', ['navFactory',
    '$auth',
    '$http',
    '$localStorage',
    '$mdSidenav',
    '$rootScope',
    '$state',
    function(navFactory,
    $auth,
    $http,
    $localStorage,
    $mdSidenav,
    $rootScope,
    $state)
  { $rootScope.logout = false;
    let vm = this;
   if($auth.isAuthenticated()) {
     $rootScope.user = $auth.getPayload();
     $rootScope.message = $rootScope.user.name;
     navFactory.getMenuData().then(function(response)
     {
        vm.navItems = response.sidenavmenuitems;
    });
     $state.go('index.dashboard');
   }
   else
   {
    $state.go('index.home');
  }



  function openSideNavPanel()
   { $mdSidenav('left').open();
  }

  function closeSideNavPanel()
    {
    $mdSidenav('left').close();
  }

  function logout()
  {
   $rootScope.sideicon = false;
   $rootScope.logout = false;
   $state.go('index.home');
   $auth.removeToken();
   $http.defaults.headers.common['x-access-token']='';
   delete $localStorage.tokenDetails;
   }

 vm.openSideNavPanel = openSideNavPanel;
  vm.closeSideNavPanel = closeSideNavPanel;
  vm.logout = logout;
}]);
