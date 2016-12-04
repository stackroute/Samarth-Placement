angular.module('samarth.dashboard')
    .controller('dashboardCtrl',dashboardCtrl);

     function dashboardCtrl($http,dashboardFactory,$rootScope)
    {
      $rootScope.sideicon = true;
      $rootScope.logout = true;
      var vm = this;
      vm.result = [];
      vm.profession = [];
      initialData();
      //server request
      function initialData(){
      dashboardFactory.getResult().then(function(response) {
      vm.result=response.data;
      vm.profession= vm.result.Profession;
       })
      }
    }
