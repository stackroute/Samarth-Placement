(function(){
  'use strict'
angular
  .module('samarth-webcomponents')
  .component("jobSearchResult",{
    templateUrl:'./samarth-webcomponents/jobSearch/template/jobSearchResult.html',
    bindings:{
       value:'='
      },
    controller:function($scope){
      $scope.$on('san', function(event, data)
      {
       $scope.foo=data;
       $scope.newSkill = function(chip){
       return {
        name: chip,
        expertise: 'unknown'
          };
        };
      });
    }
  })
})(); 

