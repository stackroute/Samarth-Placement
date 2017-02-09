angular.module('samarth.candidateReg')
.controller('candidateRegCtrl', [
    '$auth',
    '$state',
    'Flash',
    'professionService1',
    'locationServi',
    'centerPlacementServ',
    'candidateRegFactory',
    function($auth,
        $state,
        Flash,
        professionService1,
        locationServi,
        centerPlacementServ,
        candidateRegFactory) {
        let vm = this;
        vm.location = [];
        vm.placementCenter = [];
        vm.user = {};
        vm.status = '';
        vm.formSubmit = formSubmit;
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
           
          centerPlacementServ.getCenterName(city).then(function(result) {
            vm.placementCenter=result;
           
        },function(err){
            console.log(err);
        });
        }


    function formSubmit()
    {
        console.log("In form submit");
        candidateRegFactory.initialData(vm.user).then(function(response)
    {
     vm.result=response.data;
     $state.go('index.dashboard');
     vm.status="Successfully registered the candidate"
     vm.user={};
     console.log(response.data);
   },
    function(err)
   {
      console.log(err);
      var confirm = $mdDialog.confirm()
            .title('Sorry!')
            .textContent(err.data)
            .ariaLabel('server error')
            .ok('Report the incident!')
            .cancel('Ignore');

        $mdDialog.show(confirm)
        .then(function()
          {
            vm.status = '';
          },
          function()
          {
            vm.status = '';
          }
        );
      })
    }
}]);
