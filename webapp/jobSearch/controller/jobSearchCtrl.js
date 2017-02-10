angular.module('samarth.jobSearch')
  .controller('jobSearchCtrl', ['$scope',
     '$stateParams',
     'Pagination',
     'jobSearchFactory',
     'circlesGetService',
     function($scope, $stateParams, Pagination, jobSearchFactory, circlesGetService) {
      $scope.subheader="Discover opportunities and connect people who can help you to get jobs!";
      if ($stateParams.searchText !== undefined ) {
            $scope.searchJob($stateParams.searchText);
        }
     var profs="";
     circlesGetService.getCircle()
        .then(function(response) {
           $scope.profiling = response.data;
           for(var i=0;i<response.data.length;i++){
             profs+=response.data[i].name+"-";
           }
            // console.log("circles arrray "+profs);
         },
         function(err) {
            console.log("circles array "+err);
         });

       $scope.searchJob = function(searchText) {
         //var arr=key.split(/[ ,]+/);
         console.log("params inside fun " + searchText);
            //jobSearchFactory.searchJobDetails()
            jobSearchFactory.searchJobs(searchText,profs)
             .then(function successCallbackfun(response) {
                $scope.result = response.data;
                console.log($scope.result);
                $scope.pagination = Pagination.getNew(6);
                $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
                $scope.message0 = "";
                $scope.message1="";
                $scope.message2="";
                if (response.data.length == 0) {
                  $scope.message0 = "No Result Found for "+" "+"'";
                  $scope.message1 =searchText
                  $scope.message2="'"+" "+"! Try more general keywords. ";
                }
                else{
                  $scope.message0="Showing " + response.data.length + " Results for Job Search";
                }
                },
               function errorCallbackfun(response) {
                 console.log("some error occured"+response);
                 $scope.message0 = "Some Error Occured " +response;
               },
               function (err)
                {
                 $scope.message0 = err;
                }
             )
       };
   }]);

// (function(){
//  'use strict'
// angular.module('samarth.jobSearch')
//   .controller('jobSearchCtrl', ['$scope',
//      '$stateParams',
//      'Pagination',
//      'jobSearchFactory',
//      'circlesGetService',
//      '$state',
//   function($scope, $stateParams, Pagination,jobSearchFactory,circlesGetService,$state) {
//       $scope.subheader="Discover opportunities and connect people who can help you to get jobs!";
//       var profs="";
//      circlesGetService.getCircle()
//         .then(function(response) {
//            $scope.profiling = response.data;
//            for(var i=0;i<response.data.length;i++){
//              profs+=response.data[i].name+"-";
//            }
//             console.log("circles arrray "+profs);
//          },
//          function(err) {
//             console.log("circles array "+err);
//          });

//       console.log("searchText params value after checking  "+ $stateParams.searchText);
//       // console.log("getting profession value from dashboardctrl " + profs);

//       if (($stateParams.searchText !== undefined) && ($stateParams.searchText !== '')) {
//         // console.log('inside searchJobs')
//             searchJob($stateParams.searchText);
//         }
//         else{
//            searchJobProfs();
//         }

//         function searchJobProfs(){
//           console.log('profs', profs);
//           jobSearchFactory.searchJobsByProfession(profs).then(function(response) {
//            $scope.result = response.data;
//            console.log("jobs only with Profs");
//            console.log($scope.result);
//            $scope.pagination = Pagination.getNew(6);
//            $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
//            $scope.message = "";
//            if (response.data.length == 0) {
//              $scope.message = "No jobs found for "+profs+" profession";
//            }
//            else{
//              // $scope.message="Showing " + response.data.length + " Results for your "+profs+" Profession in Job Search";
//              $scope.message="Showing " + response.data.length + " Results for "+profs+" Profession in Job Search";

//              // $state.go('candidate.jobSearch.results', result);
//              $state.go('index.jobSearch.results', {'obj':'result'});

//              }
//            })
//           .catch(function(error) {
//             console.log("some error occured "+err);
//             $scope.message = "Some Error Occured "+err;
//           });
//         };

//         function searchJob(searchText) {
//          //var arr=key.split(/[ ,]+/);
//          console.log("params inside fun searchJob " + searchText);
//             //jobSearchFactory.searchJobDetails()
//             jobSearchFactory.searchJobs(searchText,profs)
//              .then(function successCallbackfun(response) {
//                 $scope.message="";
//                 $scope.result = response.data;
//                 console.log("result with searchtext and Prof");
//                 console.log($scope.result);
//                 $scope.pagination = Pagination.getNew(6);
//                 $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
//                 $scope.message = "";
//                 if (response.data.length == 0) {
//                   $scope.message = "No Result Found ! Enter Text to Get Jobs";
//                   // console.log("in if");
//                 }
//                 else{
//                   $scope.message="Showing " + response.data.length + " Results for Job Search";
//                   // console.log("in else");
//                   console.log($scope.message);
//                 }
//                 })
//                .catch(function(error) {
//                  console.log("some error occured "+err);
//                  $scope.message = "Some Error Occured "+err;
//               });
//        };
//    }]);
// })();
