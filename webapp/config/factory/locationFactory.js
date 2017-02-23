(function() {
    'use strict';
        angular
            .module('samarth.config')
            .factory('locationFactory', ['$http', function($http)
            {
                function locationReq() {
                    let req = {};
                    req.url = '/placement/location';
                    req.method = 'GET';
                    return $http(req);
                }
                let factory = {
                    locationReq: locationReq
                };
                return factory;
            }]);

}());
