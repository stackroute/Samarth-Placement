(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.controller('coordinatorRegCtrl', ['languageFact',
				'professionFac',
				'roleFact',
				'submitFormFact',
				'$state',
				'$timeout',
				function(languageFact,
				professionFac,
				roleFact,
				submitFormFact,
				$state,
				$timeout)
			{
				let vm = this;
				vm.selectedLanguage = [0];
				let lanIter = 0;
				let arr=[];

				function professionReq()
				{
					professionFac.profReq().then(function(data)
					{
						let temp = [];
						for(let i = 0; i < data.data.length; i = i + 1)
						{
							temp[i] = data.data[i].professions;
						}
						vm.items = temp;
					});
				}

				function rolesFact()
				{
					roleFact.roleReq().then(function(data)
					{
						vm.role = data.data.role;
					});
				}

				function languagesFact()
				{
					languageFact.languageReq().then(function(data)
					{
						// console.log(data);
						// let temps = [];
						// let k = 0;
						// let count = 0;
						// for(let i = 0; i < data.data.length - 1; i = i + 1)
						// {
						// 	for(let j = i + 1; j < data.data.length; j = j + 1)
						// 	{
						// 		if(data.data[i].language.trim().toLowerCase() ===
						// 											data.data[j].language.trim().toLowerCase())
						// 		{
						// 			count = 1;
						// 		}
						// 	}
						// 	if(count === 0 && data.data[i].language.trim() !== '')
						// 	{
						// 		temps[k] = data.data[i].language.trim().substring(0, 1).toUpperCase()
						// 													+ data.data[i].language.trim().
						// 													substring(1, data.data[i].language.length)
						// 													.toLowerCase();
						// 		k = k + 1;
						// 	}
						// 	count = 0;
						// }
						// console.log("fgh");
						// console.log(temps);
						console.log(data.data);
						vm.language = ["hindi","english","punjabi"];
					});
				}

				function clickSubmit(coordinator)
				{
					try
					{
						console.log("entered submit function");
						let count = 0;
						for(var i = 0; i <= lanIter; i = i + 1)
						{ console.log("entered for loop");
							if(vm.tempLanguage[lanIter].speak === false && vm.tempLanguage[lanIter].read === false && vm.tempLanguage[lanIter].write === false)
							{
								vm.hide=false;
								vm.msg='Please fill the language details';
								$timeout(function () { vm.hide = true; }, 3000);
								break;
							}
							else
							{
								count++;
							}
						}
						if(count === lanIter + 1)
						{
							for(var i = 0; i <= lanIter; i = i + 1)
							{
								var temp={};
								console.log(vm.lang[i]);
								temp.name=vm.lang[i];
								if(vm.tempLanguage[i].speak === undefined)
								{
									temp.speak = false;
								}
								else
								{
									temp.speak=vm.tempLanguage[i].speak;
								}
								if(vm.tempLanguage[i].read === undefined)
								{
									temp.read = false;
								}
								else
								{
									temp.read=vm.tempLanguage[i].read;
								}
								if(vm.tempLanguage[i].write === undefined)
								{
									temp.write = false;
								}
								else
								{
									temp.write=vm.tempLanguage[i].write;
								}
								// console.log(temp);
								arr.push(temp);
								// console.log(arr);
							}
							coordinator.language=arr;
							console.log(coordinator);
							submitFormFact.submitForm(coordinator).then(function success(response)
							{
								vm.hide=false; 
								vm.msg="successfully registered";
								$timeout(function () { vm.hide = true; }, 3000);
								$state.go('index.home');
							},
							function error(error)
							{
								vm.hide=false; 
								vm.msg = error.data.error;
								$timeout(function () { vm.hide = true; }, 3000);
							});
						}
					}
					catch(e)
					{
						vm.hide=false; 
						vm.msg="please fill all the details";
						$timeout(function () { vm.hide = true; }, 3000);
					}
				};
				// insert a language to the selected language
				function insertLang()
				{
					lanIter++;
					vm.selectedLanguage.push(lanIter);
				};

				function removeLang()
				{
					if(lanIter >= 0)
					lanIter--;
					vm.selectedLanguage.pop();
					console.log(lanIter);
				};

				professionReq();
				languagesFact();
				rolesFact();
				vm.insertLang = insertLang;
				vm.removeLang = removeLang;
				vm.clickSubmit = clickSubmit;
			}
			]);
}());
