angular
    .module('samarth.home')
    .service('navFactory', ['$http', function($http) {
    let menuData = {};
      return {
          getMenuData: function() {
            return menuData;
          },
          setMenuData: function(){
            $http({
                url : '/sidebar/sidenavmenu',
                method : 'GET'
              }).then(function success(response) {
                  // console.log("from navFactory", response.data);
                  menuData =  response.data;
              }, function error(err) {
                  console.log("error", err);
              });
          }
      }
  }]);
