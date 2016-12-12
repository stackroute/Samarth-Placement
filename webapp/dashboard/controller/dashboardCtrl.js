angular.module('samarth.dashboard')
  .controller('dashboardCtrl',dashboardCtrl);

   function dashboardCtrl($scope, $mdDialog, $log, circlesGetService) {
    // console.log("Start");
      circlesGetService.getCircle()
          .then(function(response) {
              $scope.profiling = response.data;
              //   $log.info(profiling);
              console.log(response.data);

          }, function(err) {
              // $log.log(err);
          });
      // $scope.showForm = function(ev) {
      //     console.log("enter in mad");
      //     $mdDialog.show({
      //             templateUrl: 'coordinator/templates/addCircle.html',
      //             controller: dialogController,
      //             parent: angular.element(document.body),
      //             targetEvent: ev,
      //             clickOutsideToClose: true,
      //             // fullscreen: $scope.customFullscreen

      //         })
      //         .then(function(circle) {
      //             //    console.log(circle);
      //             // circle.profilePic = "http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/artheader.jpg";
      //             // console.log("mdDialog", +circle);
      //             circlesGetService.addCircle(circle);
      //         }).then(function success(response) {
      //             //alert("circle added");
      //         }, function(err) {
      //             $log.log(err);
      //         });
      //   };
      }
// //adds the circle to neo4j
// function dialogController($scope, $mdDialog, circlesGetService) {
//     $scope.cancel = function() {
//         console.log("cancle button");
//         $mdDialog.cancel();

//     }
//     $scope.submit = function(circle) {
//         console.log(circle);
//         $mdDialog.hide(circle);
//         console.log("submit button");
//     }
// }
