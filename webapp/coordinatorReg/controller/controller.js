
(function() {
	'use strict';
		angular
			.module('samarth.signUp')
			.controller('coorCtrl',coorCtrl);

			function coorCtrl(profFactory) {
				var vm=this;

				profFactory.profReq().then(function(data) {
					// vm.profession= Object.keys(data.data);
					// vm.roles= Object.keys(data.data);
					vm.items= Object.keys(data.data);
				})
				vm.clickSubmit=function(coordinator)
				{
					alert("Name="+coordinator.name);
				};
			}

})();
