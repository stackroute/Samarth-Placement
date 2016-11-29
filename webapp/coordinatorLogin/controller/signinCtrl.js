
(function(){
  


angular
.module('samarth.coordinatorlogin')
.controller('signinCtrl',signinCtrl);
 signinCtrl.$inject=['myService','$state'];
function signinCtrl(myService,$state)
 
  {
    var vm =this;
     vm.user={
           };
    vm.signIn=signIn;
       vm.errormsg="";
    function signIn()
    { 
      
       myService.auth().then(function(response) {
     
       var dataCounter =0;
       var testCounter=0;
       
       response.data.map(function(data)
       { 
         var email=data.email;
         dataCounter++;
         var password=data.password;
         if(email==vm.user.emailAddress && password==vm.user.password)
         {
           console.log("true");
           
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
  //   $scope.signIn = function($scope,myService,$state) {
  //     myService.auth().then(function(response) {

  //      var dataCounter =0;
  //      var testCounter=0;
       
  //      response.data.map(function(data)
  //      { 
  //        var email=data.email;
  //        dataCounter++;
  //        var password=data.password;
  //        if(email==$scope.user.emailAddress && password==$scope.user.password)
  //        {
  //          console.log("true");
           
  //          testCounter++;
  //           $state.go('index.dashboardpage')
  //        }
  //       else if((email!=$scope.user.emailAddress || password!=$scope.user.password ) &&  response.data.length== dataCounter  && testCounter==0)
  //       {
  //        $scope.errormsg=" Login failed ! email or password is not correct"

  //        $state.go('index') 
  //      }
  //    });
  //    });
  //   };
  // });
  // 