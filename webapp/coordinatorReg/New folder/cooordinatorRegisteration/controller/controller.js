angular.module('samarth',['ngMaterial','ngMessages','ui.router','material.svgAssetsCache'])
.controller('DemoBasicCtrl', ['$scope','mainInfoFactory',function ($scope, mainInfoFactory) {
   mainInfoFactory.getMainInfo().then(function(data) {
     $scope.profession= Object.keys(data.data);
     $scope.roles= Object.keys(data.data);
     $scope.items= Object.keys(data.data);
   })

 $scope.clickSubmit=function(coordinator)
 {
  alert("Name="+coordinator.name);
};

}])