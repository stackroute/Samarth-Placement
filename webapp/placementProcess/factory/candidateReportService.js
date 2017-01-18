angular
  .module('samarth.placementProcess')
	.service('candiAvailable', ['$http',
	function($http) {
		return {
			availableCandidates: function(arr) {
				return $http({
					method: 'get',
					url: '/placementprocess/availableCandidatesOfProfession/'+arr
					
				}).then(function success(response) {
					return response.data;
				}, function error(err) {
					console.log(err);
					return [];
				});
			}          
		}
	}
	])
	.service('candiApplied', ['$http',
	function($http) {
		return {
			appliedCandidates: function(arr) {
				return $http({
					method: 'get',
					url: '/placementprocess/candidatesAppliedProfession/'+arr
					
				}).then(function success(response) {
					return response.data;
				}, function error(err) {
					console.log(err);
					return [];
				});  
			}        
		}
	}
	])
	.service('candiPlaced', ['$http',
	function($http) {
		return {
			placedCandidates: function(arr) {
				return $http({
					method: 'get',
					url: '/placementprocess/candidatesPlacedProfession/'+arr
					
				}).then(function success(response) {
					return response.data;
				}, function error(err) {
					console.log(err);
					return [];
				});  
			}        
		}
	}
	])

