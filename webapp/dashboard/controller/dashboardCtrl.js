(function() {
    'use strict';

angular
    .module("samarth")
    .controller("dashboardCtrl",dashboardCtrl);

function dashboardCtrl ()
{
  var vm = this;
  vm.items = [];
  vm.items =
      [
      {Name: "Medical",  id: "6",  },
      {Name: "Engineering",  id: "6",  },
      {Name: "Academics",  id: "6",  },
      {Name: "Management",  id: "6",  },
  ];

   
  }
  
})();