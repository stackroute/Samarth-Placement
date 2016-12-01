angular.module('samarth.dashboard')
    .controller('dashboardCtrl',dashboardCtrl);

     function dashboardCtrl($http,dashboardFactory)
    {
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
