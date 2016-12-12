angular.module("samarth")
    .controller("rootCtrl", ['$scope',
        '$state',
        function($scope, $state) {
          $state.go('index.home');
        }
    ]); 
