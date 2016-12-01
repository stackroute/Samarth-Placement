(function(){
   'use strict'
    angular
      .module('samarth.jobPost')
      .controller('dialogController', dialogController);
      function dialogController ($scope,$mdDialog) 
               {  $scope.skills=[{}];
                  $scope.showJobDesc = function(event,jobCtrl) {
                  $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,
                  fullscreen: true,        
                  preserveScope: true,           
                  templateUrl: 'jobPost/template/jobDescForm.html',
                  controller: function dialogController($scope, $mdDialog) {
                       $scope.expertise = [
                                              "Beginner",
                                              "Skilled",
                                              "Proficient",
                                              "Expert"
                                          ];
                        $scope.priority = [
                                              "Mandatory",
                                              "Optional",
                                          ];  
                        $scope.addInput=addInput;                                    
                        $scope.submitDescData=submitDescData;
                        
                        function addInput() {
                        $scope.skill={};
                        $scope.skill.name = $scope.skill.name;
                        $scope.skill.expertise = $scope.skill.expertise;
                        $scope.skill.priority = $scope.skill.priority;
                        $scope.skills.push($scope.skill);
                      };
                    
                      function submitDescData()
                     {  jobCtrl.job=$scope.job;
                        jobCtrl.job.skills=$scope.skills;
                        $mdDialog.hide();
                      }
                        $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                      
                  }
                    
               })
            };
            $scope.showQualification = function(event,criteriaCtrl) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,
                  fullscreen: true,        
                  preserveScope: true,           
                  templateUrl: 'jobPost/template/criteriaForm.html',
                  controller: function dialogController($scope, $mdDialog) {
                     $scope.priority = [
                                              "Mandatory",
                                              "Optional",
                                          ];                   
                     $scope.submitCriteriaData=submitCriteriaData;
                      function submitCriteriaData()
                     {
                        criteriaCtrl.criteria=$scope.criteria;
                        $mdDialog.hide();
                      }
                        $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
}
})();
