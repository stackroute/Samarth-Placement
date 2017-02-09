angular
    .module('samarth.cordsignup')

    .factory('coordinatorfactory', 
        function($http) {
        var service = {
            initialData :initialData,
            getCoordinatorDetails : getCoordinatorDetails
        };
        return service;      

        function initialData() {
            var req = {};
            req.url = '/coordinatorregister/getcoordi';
            req.method = 'GET';   
            return $http(req);
           
        };

        function getCoordinatorDetails(coordinatorId){
            var req = {};
            req.url= '/coordinatorregister/getcoordinator/'+coordinatorId;
            req.method = 'GET';
            return $http(req);
        }
    })