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
      /*console.log("nav");
            $rootScope.$on('$stateChangeStart','$location', function(event, toState, toParams, fromState,$location) {
                console.log("kumari");
                //if user is already traversing to index stage, ignore this check
                //Here ignore all those states, which need not have authentication 
                if (toState.name == 'index') {
                    //index state does not need prior authentication
                    $location.path('/home/dashboard');
                    console.log("sdggdfgfdhgf");
                }

                });*/

      $state.go('index.dashboard');
   
}
        /*$rootScope.$on('$stateChangeStart','$location', function(event, toState, toParams, fromState,$location) {
                console.log("kumari");
                //if user is already traversing to index stage, ignore this check
                //Here ignore all those states, which need not have authentication 
                if (toState.name == 'index') {
                    //index state does not need prior authentication
                    $location.path('/home/dashboard');
                    console.log("sdggdfgfdhgf");
                }

                });*/
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