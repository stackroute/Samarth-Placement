(function(){
  'use strict'
   angular
    .module("samarth.jobPost")
    .component("criteria",{
        templateUrl: 'jobPost/template/criteria.html',
        bindings: { name: '=',
                     txt: '@'      
                  },
                  controller: 'criteria',
              })
              .controller('criteriaCtrl',criteriaCtrl);
              function criteriaCtrl(){
              var vm = this;
              vm.criteria = {};
              vm.x="123";
              vm.criteria.qualifications={};
      }
})();
