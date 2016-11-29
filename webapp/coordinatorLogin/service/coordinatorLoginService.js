(function(){
  'use strict'
    angular
      .module('samarth.coordinatorLogin')
      .service('myService',myService);
      myService.$inject=['$http'];

      function myService($http){
        var obj={
        auth :auth
        };
        return obj;
        
        function auth(){
          var req = {};
          req.url = '../json/maincontent.json';
          req.method = 'GET';
          return $http(req);
        };
      }
})();


