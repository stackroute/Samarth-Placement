angular
 .module('samarth.config')
 .controller('configCtrl', ['languageFactory',
                'locationFactory',                
                'professionFactory',
                '$scope',
                '$rootScope',
                '$rootElement',
                '$http', 
                '$mdDialog',               
                function(languageFactory,
                locationFactory,                
                professionFactory,$scope,$rootScope,$rootElement,$http,$mdDialog){

                let vm = this;
                let update = "";
                let updateLang = "";
                let updateLoc = "";
                vm.addbtn = true;
                vm.savebtn = true;
                vm.cancelbtn = true;
                vm.professionName="";
                vm.languageName="";
                vm.locationName="";
                vm.professions = [];
                vm.languages = [];
                vm.locations = [];

                vm.cancel = cancel;

                vm.addProfession = addProfession;
                vm.editProfession = editProfession;
                vm.updateProfession = updateProfession;
                vm.showConfirmProf = showConfirmProf;

                vm.addLanguage = addLanguage;
                vm.editLanguage = editLanguage;
                vm.updateLanguage = updateLanguage;
                vm.showConfirmLang = showConfirmLang;

                vm.addLocation = addLocation;
                vm.editLocation = editLocation;
                vm.updateLocation = updateLocation;
                vm.showConfirmLoc = showConfirmLoc;


                professionsReq();
                locationsReq();
                languagesReq();

                $rootScope.$on("professiondata", function() {
                    vm.professions = [];
                    // ctrl.totaldata = 0;

                    $http.get('/placement/profession')
                        .then(function success(response) {
                            for (var noofobj = 0; noofobj < response.data.length; noofobj++) {
                                
                                    vm.professions.push(response.data[noofobj].professions);
                               
                                
                            }
                        }, function error(response) {
                            console.log("error occored ", response);
                        });

                })

                $rootScope.$on("languagedata", function() {
                    vm.languages = [];
                    // ctrl.totaldata = 0;

                    $http.get('/placement/language')
                        .then(function success(response) {
                            for (var noofobj = 0; noofobj < response.data.length; noofobj++) {
                                
                                    vm.languages.push(response.data[noofobj].language);
                               
                                
                            }
                        }, function error(response) {
                            console.log("error occored ", response);
                        });

                })

                $rootScope.$on("locationdata", function() {
                    vm.locations = [];
                    // ctrl.totaldata = 0;

                    $http.get('/placement/location')
                        .then(function success(response) {
                            for (var noofobj = 0; noofobj < response.data.length; noofobj++) {
                                
                                    vm.locations.push(response.data[noofobj].location);
                               
                                
                            }
                        }, function error(response) {
                            console.log("error occored ", response);
                        });

                })

                function professionsReq()
                {
                    professionFactory.profReq().then(function(data)
                    {
                        let temp = [];
                        for(let i = 0; i < data.data.length; i = i + 1)
                        {
                            temp[i] = data.data[i].professions;
                        }
                        console.log(temp);
                        vm.professions = temp;
                    });
                }

                function locationsReq()
                {
                    locationFactory.locationReq().then(function(data)
                    {
                        let temp = [];
                        for( let i = 0;i < data.data.length;i = i + 1)
                        {
                            temp[i] = data.data[i].location;
                        }
                        vm.locations = temp;
                    });
                }

                function languagesReq()
                {
                    languageFactory.languageReq().then(function(data)
                    {
                        let arr = [];
                        // console.log('language', data.data.length);
                        for( let p = 0; p < data.data.length; p = p + 1)
                        {
                            arr.push(data.data[p].language);
                        }
                            vm.languages = arr;
                    });
                }

                function cancel(){

                    vm.savebtn = true;
                    vm.addbtn = true;
                    vm.cancelbtn = true;

                    vm.professionName = "";
                    vm.languageName = "";
                    vm.locationName = "";

                    $rootScope.$emit('professiondata', {});
                    $rootScope.$emit('languagedata', {});
                    $rootScope.$emit('locationdata', {});

                }

                function addProfession(){
                    // alert("clicked!!!");
                    let data = {profName: vm.professionName};
                    // let profName = vm.professionName;
                    professionFactory.addProf(data).then(function(data)
                    {
                        
                        console.log("Added Profession to NEO!!!!!");
                        // alert(data.data.profession + "has been added!!1");
                        $rootScope.$emit('professiondata', {});
                        vm.professionName = "";
                        // vm.professions = temp;
                    });
                    
                }

                function editProfession(profession){
                    // alert("clicked edit!!!");
                    vm.savebtn = false;
                    vm.addbtn = false;
                    vm.cancelbtn = false;
                    vm.professionName = profession;
                    update = profession;

                    
                }

                function updateProfession(){
                    // alert(update);
                    let updatedProf = vm.professionName;
                    let data = {oldProf: update,
                                newProf: updatedProf};
                    professionFactory.updateProf(data).then(function(data)
                    {
                        
                        console.log("Updated Profession from NEO!!!!!");
                        $rootScope.$emit('professiondata', {});
                        vm.professionName = "";
                        vm.savebtn = true;
                        vm.addbtn = true;
                        vm.cancelbtn = true;
                        // vm.professions = temp;
                    });
                    
                }

                function showConfirmProf(ev,prof) {
    
                    var confirm = $mdDialog.confirm()
                    .title('Would you like to delete the selected Profession?')          
                    .targetEvent(ev)
                    .ok('YES!')
                    .cancel('Not sure, maybe later!');

                    $mdDialog.show(confirm).then(function() { //when user clicks on "YES"
                        // console.log(object);
                        // alert("inside confirm event of deletion function");
                        professionFactory.deleteProf(prof).then(function()
                        {
                            $rootScope.$emit('professiondata', {});
                            console.log("Deleted Profession from NEO!!!!!");
                            // vm.professions = temp;
                            
                        });
                        // $rootScope.$emit('professiondata', {});
                        $mdDialog.hide();

                    }, function() { 
                        $mdDialog.hide();//Hide the prompt when user clicks CANCEL!
                    });
                };//end showConfirm

                
                function addLanguage(){
                    // alert("clicked!!!");
                    let data = {langName: vm.languageName};
                    // let profName = vm.professionName;
                    languageFactory.addLang(data).then(function(data)
                    {
                        
                        console.log("Added Language to NEO!!!!!");
                        // alert(data.data.profession + "has been added!!1");
                        $rootScope.$emit('languagedata', {});
                        vm.languageName = "";
                        // vm.professions = temp;
                    });
                    
                }

                function editLanguage(language){
                    // alert("clicked edit!!!");
                    vm.savebtn = false;
                    vm.addbtn = false;
                    vm.cancelbtn = false;
                    vm.languageName = language;
                    updateLang = language;

                    
                }

                function updateLanguage(){
                    // alert(update);
                    let updatedLang = vm.languageName;
                    let data = {oldLang: updateLang,
                                newLang: updatedLang};
                    languageFactory.updateLang(data).then(function(data)
                    {
                        
                        console.log("Updated Language from NEO!!!!!");
                        $rootScope.$emit('languagedata', {});
                        vm.languageName = "";
                        vm.savebtn = true;
                        vm.addbtn = true;
                        vm.cancelbtn = true;
                        // vm.professions = temp;
                    });
                    
                }

                function showConfirmLang(ev,lang) {
    
                    var confirm = $mdDialog.confirm()
                    .title('Would you like to delete the selected Language?')          
                    .targetEvent(ev)
                    .ok('YES!')
                    .cancel('Not sure, maybe later!');

                    $mdDialog.show(confirm).then(function() { //when user clicks on "YES"
                        // console.log(object);
                        // alert("inside confirm event of deletion function");
                        languageFactory.deleteLang(lang).then(function()
                        {
                            $rootScope.$emit('languagedata', {});
                            console.log("Deleted Language from NEO!!!!!");
                            // vm.professions = temp;
                            
                        });
                        // $rootScope.$emit('professiondata', {});
                        $mdDialog.hide();

                    }, function() { 
                        $mdDialog.hide();//Hide the prompt when user clicks CANCEL!
                    });
                };//end showConfirm

                function addLocation(){
                    // alert("clicked!!!");
                    let data = {locName: vm.locationName};
                    // let profName = vm.professionName;
                    locationFactory.addLoc(data).then(function(data)
                    {
                        
                        console.log("Added Location to NEO!!!!!");
                        // alert(data.data.profession + "has been added!!1");
                        $rootScope.$emit('locationdata', {});
                        vm.locationName = "";
                        // vm.professions = temp;
                    });
                    
                }
                
                function editLocation(location){
                    // alert("clicked edit!!!");
                    vm.savebtn = false;
                    vm.addbtn = false;
                    vm.cancelbtn = false;
                    vm.locationName = location;
                    updateLoc = location;

                    
                }

                function updateLocation(){
                    // alert(update);
                    let updatedLoc = vm.locationName;
                    let data = {oldLoc: updateLoc,
                                newLoc: updatedLoc};
                    locationFactory.updateLoc(data).then(function(data)
                    {
                        
                        console.log("Updated Location from NEO!!!!!");
                        $rootScope.$emit('locationdata', {});
                        vm.locationName = "";
                        vm.savebtn = true;
                        vm.addbtn = true;
                        vm.cancelbtn = true;
                        // vm.professions = temp;
                    });
                    
                }

                function showConfirmLoc(ev,loc) {
    
                    var confirm = $mdDialog.confirm()
                    .title('Would you like to delete the selected Location?')          
                    .targetEvent(ev)
                    .ok('YES!')
                    .cancel('Not sure, maybe later!');

                    $mdDialog.show(confirm).then(function() { //when user clicks on "YES"
                        // console.log(object);
                        // alert("inside confirm event of deletion function");
                        locationFactory.deleteLoc(loc).then(function()
                        {
                            $rootScope.$emit('locationdata', {});
                            console.log("Deleted Location from NEO!!!!!");
                            // vm.professions = temp;
                            
                        });
                        // $rootScope.$emit('professiondata', {});
                        $mdDialog.hide();

                    }, function() { 
                        $mdDialog.hide();//Hide the prompt when user clicks CANCEL!
                    });
                };//end showConfirm
            

            }

            ]);

