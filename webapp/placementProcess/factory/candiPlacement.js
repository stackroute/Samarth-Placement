(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .service('candiPlacement', ['$http',
    function($http) {
        return {

            parsetext: function(arr) {
                return $http({
                    method: 'get',
                    url: '/placementprocess/candidatesOfProfession/'+arr
                    
                }).then(function success(response) {
                    console.log("parsetext", response.data);
                    return response.data;
                }, function error(err) {
                    console.log(err);
                    return [];
                });
            }
        }
    }
	])
})();