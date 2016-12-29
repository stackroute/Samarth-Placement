// (function() {
//   'use strict'
//   angular
//     .module('samarth-webcomponents')
//     .service('circlesGetService', function($http, $rootScope) {
//       var objcircle = {};
//       // var userdata = $window.localStorage["member-user"];
//       // console.log(userdata);
//
//       //gets the circle from neo4j and mongo
//       objcircle.getCircle = function() {
//         // $rootScope.user=$auth.getpayload();
//         // console.log("getting a circle"$rootScope.user.email);
//           // var userdata = signinfactory.getUser();
//           // console.log($auth.getpayload());
//           return $http.get('/circle/'+ $rootScope.user.email)
//               .then(function(res) {
//                   console.log("got circles data");
//                   console.log(res);
//                   console.log(res.data);
//                   return res;
//               }, function(error) {
//                   // console.log(res);
//                   return error;
//               });
//       }
//
//       //adds the circle to mongodb and neo4j
//       // objcircle.addCircle = function(circle) {
//       //     console.log("service circle", circle);
//       //     return $http({
//       //             url: "/circle/",
//       //             method: "POST",
//       //             data: circle
//       //         })
//       //         .then(function(response) {
//       //                 return response;
//       //             },
//       //             function(error) {
//       //                 return error;
//       //             });
//       // }
//       return objcircle;
//     });
// }());;
//
//
//
//
//
//
//
//
(function() {
'use strict'
angular
  .module('samarth-webcomponents')
  .factory('circlesGetService', function($http, $rootScope) {
    var objcircle = {};
    // var userdata = $window.localStorage["member-user"];
    // console.log(userdata);

    //gets the circle from neo4j and mongo
    objcircle.getCircle = function() {
      // $rootScope.user=$auth.getpayload();
      // console.log("getting a circle"$rootScope.user.email);
        // var userdata = signinfactory.getUser();
        // console.log($auth.getpayload());
        return $http.get('/circle/'+ $rootScope.user.email)
            .then(function(res) {
                console.log("got circles data");
                console.log(res);
                console.log(res.data);
                return res;
            }, function(error) {
                // console.log(res);
                return error;
            });
    }

  objcircle.getCountData=function (datas) {

       let req = {};
       req.url = '/circle/countData/'+datas;
       req.method = 'GET';

       return $http(req);
       console.log(req.data);
     }
objcircle.getAppliedData=function (datas) {

       let req = {};
       req.url = '/circle/appliedData/'+datas;
       req.method = 'GET';

       return $http(req);
       console.log(req.data);
     }

     objcircle.getCandidate=function (datas) {

       let req = {};
       req.url = '/circle/getCandidate/'+datas;
       req.method = 'GET';

       return $http(req);
       console.log(req.data);
     }
     //   objcircle.getStatus=function (datas) {

     //   let req = {};
     //   req.url = '/circle/getStatus/'+datas;
     //   req.method = 'GET';

     //   return $http(req);
     //   console.log(req.data);
     // }

    //adds the circle to mongodb and neo4j
    // objcircle.addCircle = function(circle) {
    //     console.log("service circle", circle);
    //     return $http({
    //             url: "/circle/",
    //             method: "POST",
    //             data: circle
    //         })
    //         .then(function(response) {
    //                 return response;
    //             },
    //             function(error) {
    //                 return error;
    //             });
    // }
    return objcircle;
  });
}());;
