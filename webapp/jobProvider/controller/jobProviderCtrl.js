angular.module('samarth.jobProvider')
    .controller('jobProviderCtrl', jobProviderCtrl);
function jobProviderCtrl($scope, jobProviderList,Pagination) {
    jobProviderList.getJobProvider().then(function(response) {
            $scope.profiling = response.data;
            $scope.pagination = Pagination.getNew(3);
            $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
            console.log($scope.pagination.numPages);
        }),
        function(err) {
            $scope.msg = 'Could not load job providers data!';
        }
        
};
