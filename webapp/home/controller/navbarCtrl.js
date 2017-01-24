angular
  .module('samarth.home').controller('navbarCtrl', ['navFactory',
    '$auth',
    '$http',
    '$localStorage',
    '$mdSidenav',
    '$rootScope',
    '$scope',
    '$state',
    function(navFactory,
    $auth,
    $http,
    $localStorage,
    $mdSidenav,
    $rootScope,
    $scope,
    $state)
  { $rootScope.logout = false;
    let vm = this;
   if($auth.isAuthenticated()) {
     $rootScope.user = $auth.getPayload();
     $rootScope.message = $rootScope.user.name;

    if($rootScope.user.role[0]=='coordinator'){
      $state.go('index.dashboard');
    }else if ($rootScope.user.role[0]=='admin'){
      $state.go('index.admindashboard');
    }else {
      $state.go('index.home');
    }
   }
   else
   {
    $state.go('index.home');
  }
  $scope.$watch(function () { return navFactory.getMenuData(); }, function (newValue, oldValue) {
        if (newValue != null) {
            vm.navrole = newValue.role;
        vm.navItems = newValue.sidenavmenuitems;
        }
    }, true);
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
   vm.navrole = '';
    vm.navItems = '';
   $state.go('index.home');
   $auth.removeToken();
   $http.defaults.headers.common['x-access-token']='';
   delete $localStorage.tokenDetails;
   }
 vm.openSideNavPanel = openSideNavPanel;
  vm.closeSideNavPanel = closeSideNavPanel;
  vm.logout = logout;
}]);
