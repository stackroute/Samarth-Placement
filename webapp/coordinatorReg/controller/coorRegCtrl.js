(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.controller('coorRegCtrl',coorRegCtrl);

			function coorRegCtrl(professionFac) 
			{
				var vm=this;
				var professionReq=professionReq();
				vm.insertLang = insertLang;
				vm.selectedLanguage=[];
				vm.clickSubmit=clickSubmit;

				function professionReq()
				{
					professionFac.profReq().then(function(data) 
					{
						// vm.profession= Object.keys(data.data);
						// vm.roles= Object.keys(data.data);
						vm.items= Object.keys(data.data);
					})
				}

					function clickSubmit(coordinator)
					{
						submitFormFact.submitForm(coordinator).then(function(data) 
						{
							console.log("sdcx");
						})
					}
				
			    //insert a language to the selected language
			    
				    function insertLang()
				    {
				    	console.log("sadfrcxs");
				     	if(vm.coordinator.language!==null&&vm.coordinator.language!=="")
				     	{
				     		if(vm.selectedLanguage[vm.coordinator.language]==undefined)
				     		{
			       				vm.selectedLanguage[vm.coordinator.language]=vm.coordinator.language;//need to remove repeated value
					       	}
					       	else
					       	{
				     			console.log("sadfrcxs");
					       		var index = vm.coordinator.language.indexOf(vm.selectedLanguage[vm.coordinator.language]);

					       	}
			       		}
			   		}
		   		

	   }
})();