(function(){
  'use strict'
   angular
    .module("samarth-webcomponents")
    .factory('jobproviderfactory',jobproviderfactory);

    function jobproviderfactory($http){
      var service = {
        jobproviderdata :  jobproviderdata
      };
      return service;

    function jobproviderdata(data){
     return $http({
        method : 'POST',
        url : '/employer/registeremployer',
        data : data
     })

   }
 }
})();
