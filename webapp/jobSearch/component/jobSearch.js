
angular

     .module('samarth.jobSearch',[])

/*     angular.module('instantsearch',['ngMaterial','ui.router','ngMdIcons'])
 creating component for job search*/
   .component("jobSearch",{
   	 templateUrl:'jobSearch/template/jobSearch.html',
       controller:'jobSearchCtrl',
   	// bindings:{
   	// 	name :"=",
   	// 	txt:'@'
   	// },
   	// controller:function()
   	// {
   	// 	this.searchString="Value changed";
   	// 	this.ankit="my name is ankit";
   	// }
   })
  