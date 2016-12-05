(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.controller('coorRegCtrl',coorRegCtrl);
			coorRegCtrl.$inject=['professionFac','languageFact'];
			
			function coorRegCtrl(professionFac,languageFact) 
			{
				var vm=this;
				var professionReq=professionReq();
				var languagesFact=languagesFact();
				vm.insertLang = insertLang;
				vm.selectedLanguage={};
				vm.clickSubmit=clickSubmit;

				function professionReq()
				{
					professionFac.profReq().then(function(data) 
					{
						vm.items= data.data;
					})
				}

				function languagesFact()
				{
					languageFact.languageReq().then(function(data) 
					{
						console.log(data.data);
						vm.languages= data.data;
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

// candidate search 