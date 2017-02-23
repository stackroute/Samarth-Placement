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

                function addLoc(locName){
                    let req = {};
                    req.url = '/configuration/location';
                    req.method = 'POST';
                    req.data = locName;
                    return $http(req);
                }

                function updateLoc(data){
                    // console.log(data);
                    let req = {};
                    req.url = '/configuration/editlocation';
                    req.method = 'PATCH';
                    req.data = data;
                    return $http(req);
                }

                function deleteLoc(locName){
                    // console.log(profName.profName);
                    let req = {};
                    req.url = '/configuration/dellocation/' + locName;
                    req.method = 'DELETE';
                    // req.data = profName;
                    return $http(req);
                }

                let factory = {
                    locationReq: locationReq,
                    addLoc: addLoc,
                    updateLoc: updateLoc,
                    deleteLoc: deleteLoc
                };
                return factory;
            }]);

}());
