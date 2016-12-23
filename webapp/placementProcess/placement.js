(function() {
	'use strict';
		angular
			.module('samarth.placementProcess',[
			'ngMaterial',
			'ui.router',
			'ngMessages'
			])

		.config(placementProcessConfig)

		function placementProcessConfig($stateProvider){
			$stateProvider
			.state("index.job",{
				url:"/job/:profession",
				params:{
					profession:null
				},
				views: {
					'content@': {
						templateUrl:'./placementProcess/template/job.html',
						controller:"jobCtrl"
					}
				}
			});
	    }
})();