angular.module('samarth')
    .controller('candidateRegistrationController', ["$scope","$http","httpServerFactory","$mdDialog",function($scope,$http,httpServerFactory,$mdDialog) 
    {
      //server request
      httpServerFactory.getResult().then(function(response) {
         $scope.result=response.data;
       $scope.profession= $scope.result.profession;
       $scope.location= $scope.result.location;
       $scope.language= $scope.result.language;
     })
      //insert a language to the selected language
      $scope.selectedLanguage=[];
      $scope.insertLang=function()
      {
        $scope.selectedLanguage.push($scope.lang);//need to remove repeated value
      }
      //submiting the form
      $scope.formSubmit=function()
      {
        var confirm = $mdDialog.confirm()
          .title('Sorry!')
          .textContent('The form is not submited to the server.')
          .ariaLabel('server error')
          .ok('Report the incident!')
          .cancel('Ignore');

      $mdDialog.show(confirm)
      .then(function() 
        {
          $scope.status = 'You decided to get rid of your debt.';
        }, 
        function() 
        {
          $scope.status = 'You decided to keep your debt.';
        }
      );
     }
    }])

    

