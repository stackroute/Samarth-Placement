angular
  .module('samarth.jobSearch')
  .component("jobSearchResult",{
    templateUrl:'jobSearch/template/jobSearchResult.html',
    bindings:{
          value:'='
      },
    controller:function($scope){
      $scope.$on('san', function(event, data)
      {
       $scope.foo=data;
       newSkill = function(chip){
       return {
        name: chip,
        expertise: 'unknown'
          };
        };

      });
    }
  })
