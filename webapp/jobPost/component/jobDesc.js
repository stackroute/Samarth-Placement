(function(){
  'use strict';
   angular
      .module('samarth.jobPost')
      .component('jobDesc',{
      templateUrl: 'jobPost/template/jobDesc.html',
      bindings: { name: '=',
                   txt: '@'      
                },
       controller:'jobDescCtrl',
       controllerAs:'vm',
       scope:true,
       transclude:true,
      })
      .controller('jobDescCtrl',jobDescCtrl);
      function jobDescCtrl(){
            var vm=this;
            vm.job={};
            vm.job.skills={};
            vm.newSkill=newSkill;

            function newSkill(chip) {
            return {
                name: chip,
                expertise: 'unknown',
                priority:'unknown',
            };
          };
      }
      })();
