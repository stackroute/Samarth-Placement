(function(){
  'use strict'
angular
  .module('samarth.jobSearch')
  /*creating component for job search*/
  .component("jobSearch",{
   	templateUrl:'./jobSearch/template/jobSearch.html',
    controller:'jobSearchCtrl',
    // controllerAs: 'jobSrh'
   	/*bindings:{
   		name :"=",
   		txt:'@'
   	},
   	controller:function()
   	{
   	
   	}*/
  })
})();