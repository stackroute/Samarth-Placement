(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.controller('coordinatorRegCtrl', ['languageFact',
				'locationFact',
				'centerFact',
				'professionFac',
				'roleFact',
				'coordinatorfactory',
				'submitFormFact',
				'updateFormFact',
				'authDataFac',
				'$state',
				'$timeout',
				'$mdDialog',
				'$stateParams',
				function(languageFact,
				locationFact,
				centerFact,
				professionFac,
				roleFact,
				coordinatorfactory,
				submitFormFact,
				updateFormFact,
				authDataFac,
				$state,
				$timeout,
				$mdDialog,
				$stateParams){

				let vm = this;
				vm.selectedLanguage = [0];
				let lanIter = 0;
				let arr=[];
				let state = $state;
				vm.coordinator = {};

				if($stateParams.coordinatorId !== undefined){
					getCoordinatorDetails($stateParams.coordinatorId);
				}

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


				function roleReq()
					{
						roleFact.rolesReq().then(function(jsonData)
						{
							let temp = [];
							for(let i = 0; i < jsonData.data.roles.length; i++){
								temp[i] = jsonData.data.roles[i].role;
								vm.itemm = temp;
							}
						});
					}


				function initialData(coordinatorData){
          coordinatorfactory.initialData().then(function(result) {
          	vm.coordinators = result.data;
          },function(err){
            console.log(err);
        	});
        }

        function getCoordinatorDetails(coordinatorId){
        	coordinatorfactory.getCoordinatorDetails(coordinatorId).then(function(result) {
           	vm.coordinator = result.data[0];
          },function(err){
            console.log(err);
        	});
        }

				function locationsFact()
				{
					locationFact.locationReq().then(function(data)
					{
						let temp = [];
						for( let i = 0;i < data.data.length;i = i + 1)
						{
							temp[i] = data.data[i].location;
						}
						vm.location = temp;
					});
				}

				  vm.getPlacCenter = function(city) {
            
          centerFact.getCenterName(city).then(function(result) {
            vm.placementCenter=result;
            
        },function(err){
            console.log(err);
        });
        }

				function languagesFact()
				{
					languageFact.languageReq().then(function(data)
					{
						let arr = [];
						console.log('language', data.data.length);
						for( let p = 0; p < data.data.length; p = p + 1)
						{
							arr.push(data.data[p].language);
						}
							vm.language = arr;
					});
				}

				function clickSubmit(coordinator) {
					try
					{
						console.log('entered submit function');
						let count = 0;
						for(let i = 0; i <= lanIter; i = i + 1) {
							console.log('entered for loop');
							if(vm.tempLanguage[lanIter].speak === false && vm.tempLanguage[lanIter].read === false && vm.tempLanguage[lanIter].write === false)
							{
								vm.hide = false;
								vm.msg = 'Please fill the language details';
								$timeout(function () { vm.hide = true; }, 3000);
								break;
							}
							else
							{
								count = count + 1;
							}
						}
						if(count === lanIter + 1) {
							for(let i = 0; i <= lanIter; i = i + 1) {
								let temp = {};
								console.log(vm.lang[i]);
								temp.name = vm.lang[i];
								if(vm.tempLanguage[i].speak === undefined)
								{
									temp.speak = false;
								}
								else
								{
									temp.speak = vm.tempLanguage[i].speak;
								}
								if(vm.tempLanguage[i].read === undefined)
								{
									temp.read = false;
								}
								else
								{
									temp.read = vm.tempLanguage[i].read;
								}
								if(vm.tempLanguage[i].write === undefined)
								{
									temp.write = false;
								}
								else
								{
									temp.write = vm.tempLanguage[i].write;
								}
								// console.log(temp);
								arr.push(temp);
								// console.log(arr);
							}
							coordinator.language = arr;
							// console.log(coordinator);
							authDataFac.authDataReq(coordinator).then(function success(response) {

								// console.log(coordinator.coordinatorId);

					 	submitFormFact.submitForm(coordinator).then(function success(response) {
											console.log('response');
											vm.hide = false;
											vm.msg = 'successfully registered';
											$timeout(function () { vm.hide = true; }, 3000);
											vm.showAlert();
										},
										function error(error) {
											vm.hide = false;
											vm.msg = error.data.error;
											$timeout(function () { vm.hide = true; }, 3000);
										});
						},

						function error(error) {
							vm.msg = error.data.error;
						});

					}
				}
					catch(e)
					{
						vm.hide = false;
						vm.msg = 'please fill all the details';
						$timeout(function () { vm.hide = true; }, 3000);
					}
				}
				function clickUpdate(coordinator) {

					try
					{
						let count = 0;
						for(let i = 0; i <= lanIter; i = i + 1) {
							
							if(vm.tempLanguage[lanIter].speak === false && vm.tempLanguage[lanIter].read === false && vm.tempLanguage[lanIter].write === false)
							{
								vm.hide = false;
								vm.msg = 'Please fill the language details';
								$timeout(function () { vm.hide = true; }, 3000);
								break;
							}
							else
							{
								count = count + 1;
							}
						}
						if(count === lanIter + 1) {
							for(let i = 0; i <= lanIter; i = i + 1) {
								let temp = {};
								
								temp.name = vm.lang[i];
								if(vm.tempLanguage[i].speak === undefined)
								{
									temp.speak = false;
								}
								else
								{
									temp.speak = vm.tempLanguage[i].speak;
								}
								if(vm.tempLanguage[i].read === undefined)
								{
									temp.read = false;
								}
								else
								{
									temp.read = vm.tempLanguage[i].read;
								}
								if(vm.tempLanguage[i].write === undefined)
								{
									temp.write = false;
								}
								else
								{
									temp.write = vm.tempLanguage[i].write;
								}
								// console.log(temp);
								arr.push(temp);
								// console.log(arr);
							}
							coordinator.language = arr;
							
										// authDataFac.authDataReq(coordinator).then(function success(response) {

								

					 	updateFormFact.updateForm(coordinator).then(function success(response) {
											console.log('response');
											vm.hide = false;
											vm.msg = 'successfully registered';
											$timeout(function () { vm.hide = true; }, 3000);
											vm.showAlert();
										},
										function error(error) {
											vm.hide = false;
											vm.msg = error.data.error;
											$timeout(function () { vm.hide = true; }, 3000);
										});
						// },

						// function error(error) {
						// 	vm.msg = error.data.error;
						// });

					}
				}
					catch(e)
					{
						vm.hide = false;
						vm.msg = 'please fill all the details';
						$timeout(function () { vm.hide = true; }, 3000);
					}
				}

				// insert a language to the selected language
				function insertLang()
				{
					lanIter = lanIter + 1;
					vm.selectedLanguage.push(lanIter);
				}

				function removeLang()
				{
					if(lanIter !== 0)
					{vm.selectedLanguage.pop();}
					if(lanIter >= 1)
					{lanIter = lanIter + 1;}
					console.log(lanIter);
				}
				vm.showAlert = function(ev) {
				// Appending dialog to document.body to cover sidenav in docs app
				// Modal dialogs should fully cover application
				// to prevent interaction outside of dialog
					$mdDialog.show(
						$mdDialog.alert()
							.parent(angular.element(document.querySelector('#popupContainer')))
							.clickOutsideToClose(true)
							// .title('Message')

							.textContent('Coordinator Details successfully saved.')
							.ariaLabel('Alert Dialog Demo')
							.ok('Got it!')
							.targetEvent(ev)
						);
					$state.go('index.getcoordinator');
				};


				professionReq();
				languagesFact();
				roleReq();
				locationsFact();
				initialData();
			  // removeCoordinator();
				// vm.removeCoordinator=removeCoordinator;
				vm.insertLang = insertLang;
				vm.removeLang = removeLang;
				vm.clickSubmit = clickSubmit;
				vm.clickUpdate=clickUpdate;
				// vm.editCoordi = editCoordi;
			}
			]);
}());
