angular
    .module('samarth.cordsignup')

    .factory('coordinatorfactory', 
        function($http) {
        var service = {
            initialData :initialData,
            getCoordinatorDetails : getCoordinatorDetails,
            getCenter : getCenter
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
        };

        function getCenter(centerCode) {
            let data = {};
            return $http({
                method: 'GET',
                url: '/coordinatorregister/getcenter/' + centerCode,
                type: 'JSON'

            }).then(function mySucces(response) {
                data = response.data;
                // console.log(data);
                return data;
            }, function errorCallback(response) {
                return response.error.message;
            });
        };
    })