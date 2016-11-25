(function(){
   'use:strict'
   angular
.module('samarth.jobPost')
.controller('dialogController', dialogController);
function dialogController ($scope,$mdDialog) 
{ 
  $scope.status = '';
    $scope.showJobDesc = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,
                  fullscreen: true,        
                  preserveScope: true,           
                  templateUrl: 'jobPost/template/jobDescForm.html',
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
            $scope.showQualification = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,
                  fullscreen: true,        
                  preserveScope: true,           
                  templateUrl: 'jobPost/template/criteriaForm.html',
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
}
})();
