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
						controller:"candidatePlacementCtrl"
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
						controller:"jobCtrl"
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
						controller:"candidatePlacementCtrl"
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
						controller:"appliedCandidateCtrl"
					}
				}
			})
			.state("index.appliedJob",{
				url:"/appliedJob/",
				params:{
					
				},
				views: {
					'content@': {
						templateUrl:'./placementProcess/template/appliedJob.html',
						controller:""
					}
				}
			})
	    }
})();