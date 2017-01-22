(function() {
  'use strict';
  angular
    .module('samarth.cordsignup')
    .factory('authDataFac', ['$http', function($http) {
      function authDataReq(datas) {
        let req = {};
        req.url = '/insertdata';
        req.method = 'POST';
        req.data = datas;
        console.log('authdatas-------------------');
				console.log(datas);
        return $http(req);
      }
      let factory = {
        authDataReq: authDataReq
      };
      return factory;
    }]);
}());
