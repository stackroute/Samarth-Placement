(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.controller('coorRegCtrl', coorRegCtrl);
			coorRegCtrl.$inject=['professionFac', 'languageFact', 'roleFact', 'submitFormFact'];
			
			function coorRegCtrl(professionFac, 
				languageFact, 
				roleFact, 
				submitFormFact)
			{
				let vm=this;

				function professionReq()
				{
					professionFac.profReq().then(function(data) 
					{
						let temp=[];
						for( let i=0;i<data.data.length;i+=1)
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
						// console.log(data.data)
						let temp=[];
						let k=0;
						let count=0;
						for(let i=0;i<data.data.length-1;i+=1)
						{
							for(let j=i+1;j<data.data.length;j+=1)
							{
								if(data.data[i].role===data.data[j].role)
								{
									count=1;
								}
							}
							if(count===0)
							{
								temp[k]= data.data[i].role;
								k+=1;
							}
							count=0;
						}
						vm.role=temp;
					})
				}

				function languagesFact()
				{
					languageFact.languageReq().then(function(data) 
					{
						let temp=[];
						let k=0;
						let count=0;
						for(let i=0;i<data.data.length-1;i+=1)
						{
							for(let j=i+1;j<data.data.length;j+=1)
							{
								if(data.data[i].language.trim().toLowerCase()===
																	data.data[j].language.trim().toLowerCase())
								{
									count=1;
								}
							}
							if(count===0 && data.data[i].language.trim()!=='')
							{
								temp[k]= data.data[i].language.trim().substring(0,1).toUpperCase()
																			+data.data[i].language.trim().
																			substring(1,data.data[i].language.length)
																			.toLowerCase();
								k+=1;
							}
							count=0;
						}
						vm.language=temp;
					})
				}

				function clickSubmit(coordinator)
				{
					submitFormFact.submitForm(coordinator).then(function(data) 
					{
						console.log(data.status);
					})
				}
			
		    //insert a language to the selected language
		    function insertLang()
		    {      
		    	if(vm.lang!==null&&vm.lang!=="")
		    	{
			    	if(vm.selectedLanguage[vm.lang]===undefined)
			    	{
			    		vm.selectedLanguage[vm.lang]=vm.lang;
			    	}
			    	else
			    	{
			    		let index = vm.language.indexOf(vm.selectedLanguage[vm.lang]);
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

// tommorrow 3. by ammol
// tomorrow 12 pm by ankit
// tomorrow 