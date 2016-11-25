(function(){
   'use:strict'
angular
  .module('samarth') 
  .controller('navbarCtrl', [
        "$scope",
        "$http",
        "navFactory",
        "$mdSidenav",function($scope,$http,navFactory,$mdSidenav) 
         {
        navFactory.getResult().then(function(response) {
        $scope.navItems=response.data;
         });
  $scope.showMobileMainHeader = true;
	$scope.openSideNavPanel = function() {
		$mdSidenav('left').open();
	};
	$scope.closeSideNavPanel = function() {
		$mdSidenav('left').close();
	};
     
    }]);
}();
  




























