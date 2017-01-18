angular
    .module('samarth.cordsignup')

    .factory('coordinatorfactory', 
        function($http) {
        var service = {
            initialData :initialData
        };
        return service;      

        function initialData() {
            var req = {};
            req.url = '/coordinatorregister/getcoordi';
            req.method = 'GET';   
            return $http(req);
            console.log($http(req));
        };
    })