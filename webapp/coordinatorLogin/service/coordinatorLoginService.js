angular
.module('samarth.coordinatorlogin')
.service('myService',myService);
myService.$inject=['$http'];

function myService($http)
{

var auth=function()
{
	// return $http.get("../json/maincontent.json");
   return $http({
    method : "GET",
    url : "../json/maincontent.json"
  });



}
var obj={
	auth :auth
};
console.log(obj);
return obj;
}

// {
//   var obj={};
//   obj.auth=function(){
//    return $http({
//     method : "GET",
//     url : "maincontent.json"
//   })
// };

// return obj;

// }]);
