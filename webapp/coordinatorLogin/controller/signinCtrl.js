(function(){
  'use strict';
    angular
      .module('samarth.coordinatorLogin')
      .controller('signinCtrl',signinCtrl);
       signinCtrl.$inject=['$state','$auth','Flash','$rootScope'];
      function signinCtrl($state,$auth,Flash,$rootScope){
        console.log("first");
          if($auth.isAuthenticated())
    {
      

      $state.go('index.dashboard');
   
}
        
        var vm =this;
        vm.login=login;
        function login(){
            $auth.login({
            email: vm.user.email, // username of the user entered in the login form
            pwd: vm.user.pwd // username of the user entered in the login form
        }).then(function(res) {
            $auth.setToken(res.token);
            $state.go('index.dashboard'); // redirects to a mentioned state if successfull

        }).catch(function(res) {
            vm.err = 'Login Failed ! UserName or Password doesnot match .';
            let message = 'Login Failed ! UserName or Password doesnot match .';
            Flash.create('danger', message);
  
        }); 

      }
       }
})();
angular.module("samarth")
   .controller("initialCtrl", ['$scope',
       '$state',
       function($scope, $state) {
      
         $state.go('index');
           
       }
   ]);
   angular.module("samarth")
    .controller("rootCtrl", ['$scope',
        '$state',
        function($scope, $state) {
          $state.go('index.home');
        }
    ]); 

