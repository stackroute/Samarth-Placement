(function(){
  'use strict';
    angular
      .module('samarth.coordinatorLogin')
      .controller('signinCtrl',['$auth',
        '$state',
        function($auth,
          $state)
      {
       if($auth.isAuthenticated())
         {
         $state.go('index.dashboard');
         }
        let vm =this;
        
        function login(){
            $auth.login({
            email: vm.user.email, 
            pwd: vm.user.pwd 
        }).then(function(res) {
            $auth.setToken(res.token);
            $state.go('index.dashboard'); 

        }).catch(function(res) {
            vm.err = 'Invalid credentials ';
           }); 
      }
       vm.login=login;
      }]);
       }());
