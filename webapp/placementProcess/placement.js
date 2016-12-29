(function() {
	'use strict';
	angular
	.module('samarth.placementProcess',[
		'ngMaterial',
		'ui.router',
		'ngMessages'
		])

	.config(config);
	function config($stateProvider) {
		let loginRequired = ['$q','$location', '$auth', function($q, $location, $auth) {
			let deferred = $q.defer();
			if ($auth.isAuthenticated()) {
				deferred.resolve();
			}
			else {
				$location.path('/home');
			}
			return deferred.promise;
		}];

		$stateProvider
		.state("index.job",{
			url:"/job/:profession",
			params:{
				profession:null
			},
			views: {
				'content@': {
					templateUrl:'./placementProcess/template/job.html',
					controller:"jobCtrl",
					resolve: {
						loginRequired: loginRequired
					}
				}
			}
		})
		.state("index.candidatePlacement",{
			url:"/candidatePlacement/:profession?",
			params:{
				profession:null,
				jobcode:null
			},
			views: {
				'content@': {
					templateUrl:'./placementProcess/template/candidatePlacement.html',
					controller:"candidatePlacementCtrl",
					resolve: {
						loginRequired: loginRequired
					}
				}
			}
		})
		$stateProvider
		.state("index.jobPlacement",{
			url:"/jobPlacement/:profession",
			params:{
				profession:null,
				candidateid:null
			},
			views: {
				'content@': {
					templateUrl:'./placementProcess/template/jobPlacement.html',
					controller:"jobPlacementCtrl",
					resolve: {
						loginRequired: loginRequired
					}
				}
			}
		})
		.state("index.candidate",{
			url:"/candidate/:profession?",
			params:{
				profession:null
			},
			views: {
				'content@': {
					templateUrl:'./placementProcess/template/candidate.html',
					controller:"candidateCtrl",
					resolve: {
						loginRequired: loginRequired
					}
				}
			}
		})
		.state("index.appliedCandidate",{
			url:"/appliedCandidate/",
			params:{
				jobcode:null
			},
			views: {
				'content@': {
					templateUrl:'./placementProcess/template/appliedCandidate.html',
					controller:"appliedCandidateCtrl",
					resolve: {
						loginRequired: loginRequired
					}
				}
			}
		})
		.state("index.appliedJob",{
			url:"/appliedJob/",
			params:{
				candidateid:null
			},
			views: {
				'content@': {
					templateUrl:'./placementProcess/template/appliedJob.html',
					controller:"appliedJobCtrl",
					resolve: {
						loginRequired: loginRequired
					}
				}
			}
		})
	}
})();