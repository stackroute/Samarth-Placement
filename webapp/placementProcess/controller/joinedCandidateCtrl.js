 angular.module('samarth.placementProcess')
 .controller('joinedCandidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   '$mdDialog',
   'joinedCandidateFactory',
   function($scope, 
    $stateParams, 
    Pagination,
    $mdDialog,
    joinedCandidateFactory) {

    joinedCandidateFactory.joinedCandidates($stateParams.jobcode)
    .then(function(results) {
      $scope.results = results.data;
      $scope.pagination = Pagination.getNew(4);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }).catch(function(err){
      console.log(err);
    });
    
    $scope.flagr=[];
    $scope.reject=function(cid,key){
      
        let con = $mdDialog.confirm()
          .title('Reject')
          .textContent('This candidate is willing to join the offer. you are about to reject the candidate, please confirm..!')
          .ok('confirm')
          .cancel('Cancel');

          $mdDialog.show(con).then(function() {
            $scope.flagr[key]=true;
            reject(cid,$stateParams.jobcode)
            .then(function(response){
              console.log(response);
            })
            .catch(function(err){
              console.log(err);
            })
          })
    }
}
  ])