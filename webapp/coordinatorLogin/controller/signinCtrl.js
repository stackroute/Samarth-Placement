(function() {
  'use strict';
  angular
  .module('samarth.coordinatorLogin')
  .controller('signinCtrl', ['$auth',
    'Flash',
    '$rootScope',
    '$state',
    function($auth,
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
        $state.go('index.dashboard');
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
          $state.go('index.dashboard');
        }).catch(function(error) {
          vm.err = 'Login Failed ! UserName or Password doesnot match .';
          let message = 'Login Failed ! UserName or Password doesnot match .';
          Flash.create('danger', message);
          console.log(error);
        });
      }
      vm.login = login;
      }
      ]);
})();
