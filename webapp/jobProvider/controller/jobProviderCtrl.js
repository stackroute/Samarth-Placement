angular.module('samarth.jobProvider')
    .controller('jobProviderCtrl', jobProviderCtrl);
function jobProviderCtrl($scope, jobProviderList,Pagination) {
    jobProviderList.getJobProvider().then(function(response) {
        $scope.profiling = response.data;
        $scope.pagination = Pagination.getNew(4);
        $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
        console.log($scope.pagination.numPages);
        $scope.message = "";
        if (response.data.length == 0) {
          $scope.message = "No Result Found for "+" "+"'"+ searchText+"'"+" "+"! Try more general keywords. ";

        }
        else{
          $scope.message="Showing " + response.data.length + " Results for Job Providers";
        }

      }),
      function(err) {
        $scope.msg = 'Could not load job providers data!';
      }
};
