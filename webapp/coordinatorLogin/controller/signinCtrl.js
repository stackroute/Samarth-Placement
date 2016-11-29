(function(){
  'use strict';
    angular
      .module('samarth.coordinatorLogin')
      .controller('signinCtrl',signinCtrl);
      // signinCtrl.$inject=['myService','$state'];
 
      function signinCtrl(myService,$state){
        var vm =this;
        vm.user={};
        vm.signIn=signIn;
        vm.errormsg="";

        function signIn(){
          myService.auth().then(function(response) {
            var dataCounter =0;
            var testCounter=0;
       
            response.data.map(function(data){
              var email=data.email;
              dataCounter++;
              var password=data.password;
                if(email==vm.user.emailAddress && password==vm.user.password)
                  {
                  testCounter++;
                  $state.go('index.signin.dashboard')
                  }
                    else if((email!=vm.user.emailAddress || password!=vm.user.password ) &&  response.data.length== dataCounter  && testCounter==0)
                    {
                     vm.errormsg=" Login failed ! email or password is not correct"
                     $state.go('index') 
                     }
                   });
          });
        }
        }
})();