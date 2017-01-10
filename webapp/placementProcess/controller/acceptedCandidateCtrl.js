(function(){
 'use strict'
 angular.module('samarth.placementProcess')
 .controller('acceptedCandidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'rejectFactory',
   'acceptedCandidateFactory',
   '$mdDialog',
   function($scope, $stateParams, Pagination,rejectFactory,acceptedCandidateFactory,$mdDialog) {

    acceptedCandidateFactory.acceptedCandidates($stateParams.jobcode)
    .then(function(results) {
      $scope.results = results.data;
      console.log("results:values"+$stateParams.jobcode);
      console.log(results);
      $scope.pagination = Pagination.getNew(4);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }).catch(function(err){console.log(err)});

    $scope.flagr=[];
    $scope.reject=function(cid,key){
      
        var con = $mdDialog.confirm()
          .title('Reject')
          .textContent('This candidate offered already. you are about to reject the candidate, please confirm..!')
          .ok('confirm')
          .cancel('Cancel');

          $mdDialog.show(con).then(function() {
            $scope.flagr[key]=true;
            rejectFactory.reject(cid,$stateParams.jobcode)
            .then(function(response){
              console.log(response);
            })
            .catch(function(err){console.log(err)})
          })
    }
  }])
})();