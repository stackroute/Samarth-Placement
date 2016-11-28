(function() {
    'use strict';

angular
    .module("samarth.dashboard")
    .controller("dashboardCtrl",dashboardCtrl);

function dashboardCtrl(dashboardFactory)
{
var vm=this;
dashboardFactory.getResult().then(function(response)
{
vm.items=Objects.key(data.data);
  });
  }

})();
