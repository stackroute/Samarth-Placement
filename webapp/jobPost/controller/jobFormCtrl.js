(function(){
   'use:strict'
   angular
.module('samarth.jobPost')
.controller('jobFormCtrl', jobFormCtrl);
function jobFormCtrl($scope,$mdDialog) 
{ 
  $scope.status = '';
    $scope.showJobDesc = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,
                  fullscreen: true,        
                  preserveScope: true,           
                  templateUrl: 'jobPost/template/jobDescForm.html',
                  controller: function jobFormCtrl($scope, $mdDialog) {
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
                  controller: function jobFormCtrl($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
}
})();
