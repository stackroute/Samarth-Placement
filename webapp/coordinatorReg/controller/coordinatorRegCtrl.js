(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.controller('coordinatorRegCtrl', ['languageFact',
				'locationFact',
				'professionFac',
				'roleFact',
				'submitFormFact',
				'authDataFac',
				'$state',
				'$timeout',
				'$mdDialog',
				function(languageFact,
				locationFact,
				professionFac,
				roleFact,
				submitFormFact,
				authDataFac,
				$state,
				$timeout,
				$mdDialog)
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

				function locationsFact()
				{
					locationFact.locationReq().then(function(data) 
					{
						var temp=[];
						for( var i=0;i<data.data.length;i++)
						{    
							temp[i]= data.data[i].location;
						}
						vm.location= temp;
					})
				}

				function languagesFact()
				{
					languageFact.languageReq().then(function(data)
					{
						console.log("language",data.data)
						vm.language = data.data;
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
							authDataFac.authDataReq(coordinator).then(function success(response)
            	{
								submitFormFact.submitForm(coordinator).then(function success(response)
								{
									console.log("submitted successfully");
									vm.hide=false; 
									vm.msg="successfully registered";
									$timeout(function () { vm.hide = true; }, 3000);
									vm.showAlert();
								},
								function error(error)
								{
									vm.hide=false; 
									vm.msg = error.data.error;
									$timeout(function () { vm.hide = true; }, 3000);
								});
							},
							function error(error)
                    {
                        vm.msg = error.data.error;
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
					if(lanIter != 0)
					vm.selectedLanguage.pop();
					if(lanIter >= 1)
					lanIter--;
					console.log(lanIter);
				};

				vm.showAlert = function(ev) 
		    {
		      // Appending dialog to document.body to cover sidenav in docs app
		      // Modal dialogs should fully cover application
		      // to prevent interaction outside of dialog
		      $mdDialog.show(
		        $mdDialog.alert()
		        .parent(angular.element(document.querySelector('#popupContainer')))
		        .clickOutsideToClose(true)
		        // .title('Message')
		        .textContent('Coordinator successfully registered')
		        .ariaLabel('Alert Dialog Demo')
		        .ok('Got it!')
		        .targetEvent(ev)
		      );
		      $state.go('index.home');
		    };

				professionReq();
				languagesFact();
				rolesFact();
				locationsFact();
				vm.insertLang = insertLang;
				vm.removeLang = removeLang;
				vm.clickSubmit = clickSubmit;
			}
			]);
}());
