(function(){
  'use strict';
  angular
  .module('samarth.coordinatorLogin')
  .controller('signinCtrl',signinCtrl);
  signinCtrl.$inject=['$state','$auth','Flash','$rootScope'];
  function signinCtrl($state,$auth,Flash,$rootScope){
    console.log("first");
    $rootScope.flag="ku";
    $rootScope.logout = false;
    if($auth.isAuthenticated())
    {
     $rootScope.user=$auth.getPayload();
     $rootScope.message=$rootScope.user.name;
     console.log($rootScope.message+"name");
     $rootScope.sideicon = true;
     $rootScope.logout = true;
     console.log($rootScope.sideicon+$rootScope.logout);
     $state.go('index.dashboard');
     
   }
   else{
    $rootScope.logout = false;
    console.log($rootScope.logout);
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