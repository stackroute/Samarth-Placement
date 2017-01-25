(function() {
    'use strict';
        angular
            .module('samarth.cordsignup')
            .factory('locationFact', ['$http', function($http)
            {
                function locationReq() {
                    let req = {};
                    req.url = '/coordinatorregister/location';
                    req.method = 'GET';
                    return $http(req);
                }
                let factory = {
                    locationReq: locationReq
                };
                return factory;
            }])

            .factory('centerFact', ['$http',function($http) {
        return {
            getCenterName: function(city) {
                // console.log(city);
                return $http({
                    method: 'get',
                    url: '/placement/getPlacementCenter/'+ city,
                }).then(function(response) {
                    console.log("In placement center");
                    console.log(response);
                    return response.data;
                }, function error(err) {
                    // console.log("error", err);
                });
            }
        }
    }
    ]);
}());
