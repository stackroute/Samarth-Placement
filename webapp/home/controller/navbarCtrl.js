angular.module('samarth.home')
.controller('navbarCtrl', ['$scope',
  '$mdSidenav',
  'navFactory',
  '$state',
  '$rootScope',
  '$auth',function($scope, 
  $mdSidenav,
  navFactory,
  $state,
  $rootScope,
  $auth) {
        $rootScope.sideicon = false;
        $rootScope.logout = false;
        navFactory.getSidenav().then(function(response) {
        $scope.navItems=response.data;
        });
    $scope.openSideNavPanel = function() {
    $mdSidenav('left').open();
  };
  $scope.closeSideNavPanel = function() {
    $mdSidenav('left').close();
  };
  $scope.logout=function logout()
     {
       $rootScope.sideicon = false;
       $rootScope.logout = false;
       $state.go('index');
       $auth.removeToken();
     }
}]);