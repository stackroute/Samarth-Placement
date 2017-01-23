(function() {
  'use strict';
  angular
  .module('samarth.coordinatorLogin')
  .controller('signinCtrl', ['$auth',
    '$http',
    '$localStorage',
    'Flash',
    '$rootScope',
    '$state',
    function($auth,
      $http,
      $localStorage,
      Flash,
      $rootScope,
      $state) {
      let vm = this;
      $rootScope.flag = 'ku';
      $rootScope.logout = false;
      if($auth.isAuthenticated()) {
        $rootScope.user = $auth.getPayload();
        $rootScope.message = $rootScope.user.name;
        $rootScope.sideicon = true;
        $rootScope.logout = true;
        if($rootScope.role =='coordinator'){
          $state.go('index.dashboard');
        }else if ($rootScope.role =='admin') {
          $state.go('index.admindashboard');
        }else{
          $state.go('index.home');
        }
      }
      else {
        $rootScope.logout = false;
      }

      function login() {
        $auth.login({
          email: vm.user.email,
          pwd: vm.user.pwd
        }).then(function(res) {
          $auth.setToken(res.token);
          $rootScope.sidenav = res.data.sidenav.sidenavmenuitems;
          $rootScope.role = res.data.sidenav.role;
          $localStorage.tokenDetails = { token: $auth.getPayload()['sm-token'] };
          $http.defaults.headers.common['x-access-token'] = $auth.getPayload()['sm-token'];
          console.log("The role of the use ris: ", $rootScope.role);
          if($rootScope.role =='coordinator'){
            $state.go('index.dashboard');
          }else if ($rootScope.role =='admin') {
            $state.go('index.admindashboard');
          }else{
            $state.go('index.home');
          }

        }).catch(function(error) {
          vm.err = 'Login Failed ! UserName or Password doesnot match .';
          let message = 'Login Failed ! UserName or Password doesnot match .';
          Flash.create('danger', message);
        });
      }
      vm.login = login;
      }
      ]);
})();
