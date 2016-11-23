angular.module('samarth').controller('navbarCtrl', function($scope, $mdSidenav) {
	$scope.showMobileMainHeader = true;
	$scope.openSideNavPanel = function() {
		$mdSidenav('left').open();
	};
	$scope.closeSideNavPanel = function() {
		$mdSidenav('left').close();
	};
});
angular.module('samarth').config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('purple')
      
  });