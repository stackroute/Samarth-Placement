angular.module('samarth')
    .controller('candidateRegistrationController', ["$scope","$http",function($scope,$http) {
      
      $scope.alertsubmit = function() {
        alert("submit woriking");
      };
      var request={
      	method: 'GET',
  		  url: '/model/profession.json'
      }
      $http(request).then(function(response){
      	$scope.prof=response.data;
      })
    }])