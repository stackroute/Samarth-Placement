(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.controller('coorRegCtrl',coorRegCtrl);
			coorRegCtrl.$inject=['professionFac','languageFact','roleFact'];
			
			function coorRegCtrl(professionFac,languageFact,roleFact) 
			{
				var vm=this;
				var professionReq=professionReq();
				var languagesFact=languagesFact();
				var rolesFact=rolesFact();
				vm.insertLang = insertLang;
				vm.selectedLanguage={};
				vm.clickSubmit=clickSubmit;

				function professionReq()
				{
					professionFac.profReq().then(function(data) 
					{
						console.log(data.professions);
						vm.items= data.data;
					})
				}

				function rolesFact()
				{
					roleFact.roleReq().then(function(data) 
					{
						vm.role= data.data;
					})
				}

				function languagesFact()
				{
					languageFact.languageReq().then(function(data) 
					{
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
			     	if(vm.coordinator.language["language"]!==null&&vm.coordinator.language["language"]!=="")
			     	{
			     		if(vm.selectedLanguage[vm.coordinator.language["language"]]==undefined)
			     		{
		       				vm.selectedLanguage[vm.coordinator.language["language"]]=vm.coordinator.language["language"];//need to remove repeated value
				       	}
				       	else
				       	{
				       		var index = vm.coordinator.language["language"].indexOf(vm.selectedLanguage[vm.coordinator.language["language"]]);
				       	}
		       		}
		   		}
	   }
})();

// candidate search 