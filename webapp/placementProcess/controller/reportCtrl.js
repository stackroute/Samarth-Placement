 angular.module('samarth.placementProcess')
 .controller('reportCtrl', ['$scope',
	 '$stateParams',
	 'Pagination',
	 'candiAvailable',
	 'candiApplied',
	 'candiPlaced',
	 'getAllJobFactory',
	 function($scope,
	 	$stateParams,
	 	Pagination,
	 	candiAvailable,
	 	candiApplied,
	 	candiPlaced,
	 	getAllJobFactory)
	 {
	 	$scope.prof=$stateParams.profession;
	 	$scope.getJobDetails= getJobDetails;
	 	$scope.jobContent='All Jobs';

		$scope.availableCandidates = [];
		$scope.appliedCandidates = [];
		$scope.placedCandidates = [];
		$scope.getJobs = [];
		candiAvailable.availableCandidates($stateParams.profession)
		.then(function successCallbackfun(response) {

			$scope.availableCandidates = response;

			$scope.pagination = Pagination.getNew(5);
			$scope.pagination.numPages = Math.ceil(response.length / $scope.pagination.perPage);

		});

		candiApplied.appliedCandidates($stateParams.profession)
		.then(function successCallbackfun(response) {

			$scope.appliedCandidates = response;
			// $scope.pagination = Pagination.getNew(5);
			// $scope.pagination.numPages = Math.ceil(response.length / $scope.pagination.perPage);

		});

		candiPlaced.placedCandidates($stateParams.profession)
		.then(function successCallbackfun(response) {

			$scope.placedCandidates = response;

			// $scope.pagination = Pagination.getNew(5);
			// $scope.pagination.numPages = Math.ceil(response.length / $scope.pagination.perPage);

		});

function getJobDetails(){

	getAllJobFactory.getJobs($stateParams.profession,$scope.jobContent)
		.then(function successCallbackfun(response) {

			$scope.getJobs = response.data;

			// $scope.pagination = Pagination.getNew(5);
			// $scope.pagination.numPages = Math.ceil(response.length / $scope.pagination.perPage);

		});
}


	 }
])
