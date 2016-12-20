(function() {
    'use strict';
    angular
        .module('samarth.jobProvider', [])
        .config(jobProviderconfig);

    function jobProviderconfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index.emp', {
                url: 'jobProvider',
                views: {
                    'content@': {
                        templateUrl: 'jobProvider/template/jobProvider.html',
                        controller: 'jobProviderCtrl',
                    }
                }

            })

    }

}());
