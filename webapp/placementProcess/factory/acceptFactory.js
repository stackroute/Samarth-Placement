(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .factory("acceptFactory", ['$http',function($http) {
   var obj = {};
   obj.accept = function(cid,jobcode){
        console.log("it is calling the acceptjobs"+jobcode+cid)
       return $http({
       method : 'POST',
       url : '/placementprocess/offer',
       data:{
        candidateid:cid,
        jobcode:jobcode
       }
       })
   }
   return obj;
}])
})();