 angular.module('samarth.placementProcess')
 .controller('appliedCandidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'appliedCandidateFactory',
   'rejectFactory',
   'acceptFactory',
   'acceptedCandidateFactory',
   '$mdDialog',
   'rejectedCandidateFactory',
   function($scope, 
    $stateParams, 
    Pagination,
    appliedCandidateFactory,
    rejectFactory,
    acceptFactory,
    acceptedCandidateFactory,
    $mdDialog,
    rejectedCandidateFactory) {

    appliedCandidateFactory.appliedCandidates($stateParams.jobcode)
    .then(function(results) {
      $scope.results = results.data;
      acceptedCandidateFactory.acceptedCandidates($stateParams.jobcode)
      .then(function(acceptedCandit){
        console.log(results.data)
        console.log("accepted candidateid")
        console.log(acceptedCandit)
        results.data.forEach(function(applied){
          applied.acceptedDetail = false;
          acceptedCandit.data.forEach(function(accepted){
            
            if(applied.candidates==accepted.candidateid)
            {
              applied.acceptedDetail = true;
            }
            console.log("accept "+applied.candidates+"  "+accepted.candidateid+"   "+accepted.candidateid)
          })
        })
      }).catch(function(err){console.log(err)})

      rejectedCandidateFactory.rejectedCandidates($stateParams.jobcode)
      .then(function(rejectedCandit){
        console.log(results.data)
        console.log("rejected candidateid")
        console.log(rejectedCandit)
        results.data.forEach(function(applied){
          applied.rejectedDetail = false;
          rejectedCandit.data.forEach(function(rejected){
            if(applied.candidates==rejected.candidateid)
            {
              applied.rejectedDetail = true;
            }
            console.log("reject"+applied.candidates+"  "+rejected.candidateid+"    "+applied.rejectedDetail)
          })
        })
      }).catch(function(err){console.log(err)})

      $scope.pagination = Pagination.getNew(4);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }, function err(err) {
      $scope.message = err;
    });
    $scope.flaga=[];


    $scope.accept=function(cid,key){
      var confirm = $mdDialog.confirm()
        .title('Accept')
        .textContent('You are about to accept the candidate for job!, please confirm..!')
        .ok('Confirm')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function() {
        $scope.flaga[key]=true;
        console.log("accept is calling")
        acceptFactory.accept(cid,$stateParams.jobcode)
        .then(function(response){
          console.log(response);
        })
        .catch(function(err){console.log(err)})

      })
    }
    $scope.flagr=[];
    $scope.reject=function(cid,key,accepted){
      if(accepted)
      {
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
      else
      {
        var confirm = $mdDialog.confirm()
          .title('Reject')
          .textContent('You are about to reject the candidate for job, please confirm..!')
          .ok('Confirm')
          .cancel('Cancel');

          $mdDialog.show(confirm).then(function() {
            $scope.flagr[key]=true;
            rejectFactory.reject(cid,$stateParams.jobcode)
            .then(function(response){
              console.log(response);
            })
            .catch(function(err){console.log(err)})
          })
      }
      
    }
  }
  ])