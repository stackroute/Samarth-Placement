angular
  .module('samarth.import')
  .factory('importFactory', ['$http', function($http) {
  let obj = {};
  obj.uploadFile = function(file) {
     return $http({
                url : '/import/',
                method : 'POST',
                data : file
              }).then(function success(response) {
                  console.log("from importFactory", response.data);
                  return response.data;
              }, function error(err) {
                  console.log("error", err);
              });
   };
  return obj;
}]);
