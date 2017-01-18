angular
	.module('samarth.placementProcess')
	.factory('getAllJobFactory', ['$http',
		function($http) {
	 let obj = {};
	 obj.getJobs = function(profs,jobContent) {
			 return $http({
			 method: 'GET',
			 url: '/jobProfile/getAllJobsByProfession/' + profs +'/' +jobContent
			 });
	 };
	 return obj;
}])

	