angular.module('samarth')
.factory('mainInfoFactory', function($http) {
  var factory = {};
  factory.getMainInfo = function() {
   var req = {};
   req.url = 'prof.json';
   req.method = 'GET';
   return $http(req);
 };
 return factory;
})