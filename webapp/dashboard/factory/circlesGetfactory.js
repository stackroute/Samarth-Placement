(function() {
 'use strict'
 angular
 .module('samarth-webcomponents')
 .factory('circlesGetService', function($http, $rootScope) {
   var objcircle = {};

   objcircle.getCircle = function() {
    console.log('$rootScope.user.email');
    console.log($rootScope.user.email);
     return $http.get('/circle/'+ $rootScope.user.email)
     .then(function(res) {

       console.log('res.data');
       console.log(res.data);
       return res;
     }, function(error) {
          console.log(error);
          return error;
        });
    }

    objcircle.getStats=function (datas) {
    let req = {};
      req.url = '/circle/getStats/'+datas;
      req.method = 'GET';
      return $http(req);
    }
   return objcircle;

  });
}());
