(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.controller('coorRegCtrl', coorRegCtrl);
			coorRegCtrl.$inject=['professionFac', 'languageFact', 'roleFact', 'submitFormFact'];
			
			function coorRegCtrl(professionFac, languageFact, roleFact, submitFormFact)
			{
				var vm=this;

				function professionReq()
				{
					professionFac.profReq().then(function(data) 
					{
						var temp=[];
						for( var i=0;i<data.data.length;i++)
						{	
							temp[i]= data.data[i].professions;
						}
						vm.items=temp;
					})
				}

				function rolesFact()
				{
					roleFact.roleReq().then(function(data) 
					{
						var temp=[];
						for(var i=0;i<data.data.length-1;i++)
						{
						// 	for(var j=i+1;j<data.data.length;j++)
						// 	{
						// 		if(data.data[i]==data.data[j])
									
						// 	}
							temp[i]= data.data[i].role;
						}
						vm.role=temp;
					})
				}

				function languagesFact()
				{
					languageFact.languageReq().then(function(data) 
					{
						var temp=[];
						for( var i=0;i<data.data.length;i++)
						{	
							temp[i]= data.data[i].language;
						}
						vm.languages=temp;
					})
				}

				function clickSubmit(coordinator)
				{
					submitFormFact.submitForm(coordinator).then(function(data) 
					{
						console.log(data);
					})
				}
			
		    //insert a language to the selected language
		    function insertLang()
		    {
		     	if(vm.coordinator.language!==null&&vm.coordinator.language!=="")
		     	{
		     		if(vm.selectedLanguage[vm.coordinator.language]==="undefined")
		     		{
	       				vm.selectedLanguage[vm.coordinator.language]=vm.coordinator.language;
			       	}
			       	else
			       	{
			       		vm.coordinator.language.indexOf(vm.selectedLanguage[vm.coordinator.language]);
			       	}
	       		}
	   		}
				var professionReq=professionReq();
				var languagesFact=languagesFact();
				var rolesFact=rolesFact();
				vm.insertLang = insertLang;
				vm.selectedLanguage={};
				vm.clickSubmit=clickSubmit;
	   }
})();

// candidate search 