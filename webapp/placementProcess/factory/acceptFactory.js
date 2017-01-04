angular
  .module('samarth.placementProcess')
  .factory("acceptFactory", ['$http',function($http) {
   let obj = {};
   obj.accept = function(cid,jobcode){
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