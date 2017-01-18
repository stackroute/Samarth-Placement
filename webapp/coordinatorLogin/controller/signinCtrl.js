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
        // $rootScope.user.sidenav = $rootScope.user.sidenav;
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
          // console.log('res-------');
          // console.log(res);
          $auth.setToken(res.token);
          $rootScope.sidenav = res.data.sidenav.sidenavmenuitems;
          $localStorage.tokenDetails = { token: $auth.getPayload()['sm-token'] };
          $http.defaults.headers.common['x-access-token'] = $auth.getPayload()['sm-token'];
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
