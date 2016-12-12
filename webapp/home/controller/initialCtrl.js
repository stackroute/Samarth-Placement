angular.module("samarth")
   .controller("initialCtrl", ['$scope',
       '$state',
       function($scope, $state) {
      
         $state.go('index');
           
       }
   ]);
    .controller("initialCtrl", ['$scope',
        '$state',
        function($scope, $state) {
        	$state.go('index');
        }
    ]); 
