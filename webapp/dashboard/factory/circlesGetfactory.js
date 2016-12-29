
 (function() {
 'use strict'
 angular
 .module('samarth-webcomponents')
 .factory('circlesGetService', function($http, $rootScope) {
   var objcircle = {};
  
     objcircle.getCircle = function() {
         return $http.get('/circle/'+ $rootScope.user.email)
         .then(function(res) {
           console.log("got circles data");
           console.log(res);
           console.log(res.data);
           return res;
         }, function(error) {
                 // console.log(res);
                 return error;
               });
       }

       objcircle.getCountData=function (datas) {

        let req = {};
        req.url = '/circle/countData/'+datas;
        req.method = 'GET';

        return $http(req);
        console.log(req.data);
      }
     
      objcircle.getCandidate=function (datas) {

        let req = {};
        req.url = '/circle/getCandidate/'+datas;
        req.method = 'GET';

        return $http(req);
        console.log(req.data);
      }
        objcircle.getStatus=function (datas) {

        let req = {};
        req.url = '/circle/getStatus/'+datas;
        req.method = 'GET';

        return $http(req);
        console.log(req.data);
      }

    
     return objcircle;
   });
}());

