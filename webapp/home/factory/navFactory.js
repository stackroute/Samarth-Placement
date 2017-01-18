  angular
    .module('samarth.home')
	.factory('navFactory', ['$http', function($http) {
      return {
          getMenuData: function() {
            return $http({
                url : '/sidebar/sidenavmenu',
                method : 'GET'
              }).then(function success(response) {
                  console.log("from navFactory", response.data);
                  return response.data;
              }, function error(err) {
                  console.log("error", err);
              });
          }
      }
  }]);




  // let req = {};
  //   req.url = '/sidebar/sidenavmenu';
  //   req.method = 'GET';
  //   return $http(req);
