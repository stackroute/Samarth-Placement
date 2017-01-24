angular.module('samarth.candidateReg')
.controller('candidateRegCtrl', [
    '$auth',
    '$state',
    'Flash',
    'professionService1',
    'locationServi',
    'centerPlacementServ',
    function($auth,
        $state,
        Flash,
        professionService1,
        locationServi,
        centerPlacementServ) {
        let vm = this;
        vm.location = [];
        vm.placementCenter = [];
        vm.user = {};
        console.log("In controller");

        professionService1.profession()
        .then(function success(response) {
                    //console.log(response);
                    vm.professions = response.data;
                }, function error(error) {
                    console.log("Error on inserting data");
                });
        function locationsFac()
        {
            locationServi.locationReq().then(function(data)
            {
              console.log('location--------------');
              // console.log(data.data[0].location);
              var temp=[];
              for( var i=0;i<data.data.length;i++)
              {
                  temp[i]= data.data[i].location;
              }
              vm.location= temp;
              // console.log(vm.location);
          })
        }
        vm.locationsFac = locationsFac;
        vm.locationsFac();


        vm.getPlacCenter = function(city) {
            console.log("Value in controller");
            console.log(city);
          centerPlacementServ.getCenterName(city).then(function(result) {
            vm.placementCenter=result;
            console.log(vm.placementCenter);
        },function(err){
            console.log(err);
        });
        }


            vm.register = function __register() {
                
                $auth.signup({
                    name: vm.user.name,
                    adharcard: vm.user.adharcard,
                    mobile: vm.user.number,
                    email: vm.user.email,
                    location: vm.user.location,
                    placementCenter: vm.user.placementCenter,
                    pwd: vm.user.password,
                    profession: vm.user.profession
                }).then(function() {
                    let message = 'Successfully completed registration..!';
                    Flash.create('success', message);
                    // redirects to a mentioned state if successfull
                    $state.go('candidate.login');
                }).catch(function() {
                    let message = 'Some Error ! Please Try Again';
                    Flash.create('danger', message);
                });
                // $auth.signup ends
            };
        }]);
