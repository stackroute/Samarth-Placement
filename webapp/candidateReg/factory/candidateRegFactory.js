angular.module('samarth.candidateReg')
    .service('professionService1', ['$http', function($http) {
        var objprofile = {};
        // var userdata = $window.localStorage["member-user"];
        //gets the circle from neo4j and mongo
        objprofile.profession = function() {
            return $http.get('/placement/profession')
                .then(function(res) {
                    console.log("got profession");
                    console.log(res);
                    return res;
                }, function(error) {
                    return error;
                });
        }
        return objprofile;
    }])
    .factory('locationServi',
        function($http) 
    {
        var factory = {
            locationReq :locationReq
        };
        return factory;
        function locationReq() {
            var req = {};
            req.url = '/placement/location';
            req.method = 'GET';
            return $http(req);
        };
    })
    .factory('centerPlacementServ', ['$http',
    function($http) {
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
    ])
    .factory('candidateRegFactory', 
        function($http) {
        var service = {
            initialData :initialData
        };
        return service;      

        function initialData(candidateData) {
            var req = {};
            req.url = '/candidate';
            req.method = 'POST';    
            req.data=candidateData;
            console.log(req.data);
            return $http(req);
        };
    });

