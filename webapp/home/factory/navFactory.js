	angular.module('samarth.home')
    .factory('navFactory', ['$http', function($http) {
        let req = {};
        req.getSidenav = function() {
                return $http.get('/sidenavbar')
                .then(function(res) {
                    return res;
                }, function(error) {
                    return error;
                });
                };
       return req;
    }]);


