(function() {
    'use strict';
    angular
        .module('samarth-webcomponents')
        .factory('jobProviderList', ['$http', function($http) {
        var service = {
            getJobProvider: getJobProvider
        };
        return service;

        function getJobProvider(job) {
            return $http({
                method: 'GET',
                url: '/employer/getJobProvider',
                data: job
            })
        }
    }];
}());
