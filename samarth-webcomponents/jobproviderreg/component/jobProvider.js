(function(){
  'use strict'
   angular
    .module("samarth-webcomponents")
    .component("jobprovider",{
        templateUrl: './samarth-webcomponents/jobproviderreg/template/jobproviderreg.html',
        bindings: { name: '=',
                     txt: '@'
                  },
                  controller: 'jobproviderreg',
                  controllerAs : 'vm'
              })
              .controller('jobproviderreg',jobproviderreg);
              function jobproviderreg($scope,jobproviderfactory)
              {
                var vm = this;
      					vm.jobprovider = {};
      					vm.subjobprovider = subjobprovider;
      					function subjobprovider(){
      						alert("subjobprovider works");
      						console.log(vm.jobprovider);
                  // vm.jobprovider.ID= vm.jobprovider.phone
                    // console.log(vm.jobprovider.ID);
      						jobproviderfactory.jobproviderdata(vm.jobprovider).then(function(response){
      							 console.log("Data post success");
      						}),function(err){
      							 console.log('Error in data post');
      						}
      					}
              }

      }
)();
