angular
    .module('samarth.jobSearch')

    .component("jobSearchResult",{
     	templateUrl:'jobSearch/template/jobSearchResult.html',
     	bindings:{
     		/*name :"=",
     		txt:'@'*/
           value:'='
     	},


     	controller:function($scope)
     	{
      $scope.$on('san', function(event, data)
       {
        $scope.foo=data;
        console.log("result1" + $scope.foo);
        // console.log(foo.Title);

    //     newSkill = function(chip) {
    //     return {
    //     name: chip,
    //     expertise: 'unknown'
    //   };
    // };

      });
        }

   })