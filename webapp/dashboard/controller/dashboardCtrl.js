angular.module("samarth").controller("dashboardCtrl",function($scope)
{
  $scope.items =
      [
      {Name: "Medical",  id: "6",  },
      {Name: "Engineering",  id: "6",  },
      {Name: "Academics",  id: "6",  },
      {Name: "Management",  id: "6",  },
  ];

  $scope.funcName = function(id) {
      return IMAGES[id];
    };

    var IMAGES = {
  1: './images/engineering.jpg',
  2: './images/doctor.jpg',
  3: './images/Business.jpg',
  4: './images/academics.jpg',
  5: './images/banking.jpg',
  6: './images/fashion.jpg'
  };

  $scope.imagePath = 'img/washedout.png';
  });
  /*.config(function($mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('blue', {
      'default': '300', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })

          $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
          $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
          $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
          $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();

}

);
*/