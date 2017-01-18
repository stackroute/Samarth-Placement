angular
.module('samarth.centerdetailsreg')
.controller('centerdetailsregCtrl', centerdetailsregCtrl);

function centerdetailsregCtrl($scope,centerdetailsregfactory,$mdDialog,$state) {

	let vm=this;
	vm.result = [];
    vm.status = '';

	vm.formSubmit=function()
	{
		centerdetailsregfactory.initialData(vm.center).then(function(response) 
		{
			vm.result=response.data;
			vm.status="Successfully registered the center";
			vm.center={};

			alert = $mdDialog.alert()
            .title('Success')
            .textContent('Center Details Successfully inserted')
            .ok('Close');

          $mdDialog
          .show( alert )
          .finally(function() {
            alert = undefined;
            $state.go("index.centerdetails" );
          });
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
};
