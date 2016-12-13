(function(){
  'use strict'
angular
  .module('samarth.jobSearch')
  .component("jobSearchResult",{
    templateUrl:'./jobSearch/template/jobSearchResult.html',
    bindings:{
       result: '='
      },
    controller:function($scope){
      // $scope.result='';
      // $scope.$on('san', function(event, data)
      // { 
      //  $scope.foo=data;
      //  $scope.newSkill = function(chip){
      //  return {
      //   name: chip,
      //   expertise: 'unknown'
      //     };
      //   };
      // });
    }
  })
})(); 

