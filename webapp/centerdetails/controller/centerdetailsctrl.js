// angular.module('samarth.centerdetails')
// .controller('centerdetailCtrl2', centerdetailCtrl2);


// function centerdetailCtrl2($scope, centerdetailsList2,Pagination) {
//   console.log("ok");
//   centerdetailsList2.getcenterdetail().then(function(response) {
//     console.log("okkk");
//     console.log(response);
//     $scope.profiling = response.data;
//     $scope.pagination = Pagination.getNew(3);
//     $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
//     console.log($scope.pagination.numPages);
//     $scope.message = "";
//     if (response.data.length == 0) {
//       $scope.message = "No Result Found for "+" "+"'"+ searchText+"'"+" "+"! Try more general keywords. ";

//     }
//     else{
//       $scope.message="Showing " + response.data.length + " Results for Center Details";
//     }

//   }),
//   function(err) {
//     $scope.msg = 'Could not load center details data!';
//   }
// };


// // angular.module('samarth.centerdetails')
// // .controller('centerdetailCtrl', ['$scope','Pagination',
// //   function($scope','Pagination', centerdetailsList) {

// //     centerdetailsList.getcenterdetails().then(function(response) {
// //       $scope.result=response;
// //       $scope.pagination = Pagination.getNew(4);
// //       $scope.pagination.numPages = Math.ceil(response.length/$scope.pagination.perPage);
// //   })
// //   }   
// //   ])