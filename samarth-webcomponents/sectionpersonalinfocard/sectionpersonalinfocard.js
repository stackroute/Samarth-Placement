(function() {
    let scripts = document.getElementsByTagName('script');
    let currentScriptPath = scripts[scripts.length - 1].src;

    let personalinfopath = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/')) + '/templates/sectionpersonalinfoconversation.html';

    angular.module('samarth-webcomponents')
        .component('myPersonalinfocard', {
            templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf(
                '/')) + '/templates/sectionpersonalinfocard.html',
            controller: personalinfocardCtrl,
            bindings: {
                candidateid: '<',
                showheader: '<',
                languagedata: '='
            },
            transclude: {
                verify: "verify",

            }
        }).directive('formattedDate', function(dateFilter) {
            return {
                require: 'ngModel',
                scope: {
                    format: "="
                },
                link: function(scope, element, attrs, ngModelController) {
                    ngModelController.$parsers.push(function(data) {
                        //convert data from view format to model format
                        return dateFilter(data, scope.format); //converted
                    });

                    ngModelController.$formatters.push(function(data) {
                        // convert data from model format to view format
                        return dateFilter(data, scope.format); // converted
                    });
                }
            }
        })
        .filter('capitalize', function() {
            return function(input) {
                return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() :
                    '';
            }
        });

    function personalinfocardCtrl($http, $mdDialog, $rootScope, datagenerate) {
        var ctrl = this;
        ctrl.personalInfo = {};

        ctrl.loadLangData = function(lang) {
            datagenerate.getjson("section", lang).then(function(result) {
                ctrl.items = result;

            });
            //end datagenerate
        }

        function getItem(key) {
            // return localStorageService.get(key);
        }
        ctrl.loadLangData("English");

        $http({
            method: "GET",
            url: '/personalinfo/' + ctrl.candidateid
        }).then(function successCallback(response) {
            ctrl.personalInfo = response.data[0];

        }, function errorCallback(response) {
            console.log('Error in personal info');
        }); 
        ctrl.value = false;
        ctrl.value1 = true; 

        ctrl.toggle = function() {

            ctrl.value = !(ctrl.value) ? true : false;
            ctrl.value1 = !(ctrl.value1) ? true : false;
            console.log('toggle', ctrl.value);

        };

        ctrl.status = '  ';
        ctrl.customFullscreen = false;
        ctrl.showAdvanced = function(ev, personalInfo, title) {
            console.log("Current Script path ", currentScriptPath);
            $mdDialog.show({
                    controller: dialogCtrl,
                    templateUrl: personalinfopath,
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    locals: {
                        val: personalInfo,
                        header: title
                    },
                    fullscreen: ctrl.customFullscreen // Only for -xs, -sm breakpoints.
                })
                .then(function(answer) {
                    ctrl.status = 'You said the information was "' + answer + '".';
                }, function() {
                    ctrl.status = 'You cancelled the dialog.';
                });
        };

        function dialogCtrl($scope, $mdDialog, val, header) {
            $scope.personalObject = val;

            $scope.header = header;
            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.save = function(personalinfoObject, header) {
                let personalinfoObj = {
                    personalInfo: {
                        name: personalinfoObject.name,
                        dob: personalinfoObject.dob,
                        gender: personalinfoObject.gender,
                        maritialstatus: personalinfoObject.maritialstatus,
                        location: personalinfoObject.location,
                        mothertongue: personalinfoObject.mothertongue,
                        email: personalinfoObject.email,
                        contact: personalinfoObject.contact,
                        address: personalinfoObject.address,
                        pincode: personalinfoObject.pincode
                    }
                };

                if (header === 'Edit Info') {
                    $http({
                        method: 'POST',
                        url: '/personalinfo/' + personalinfoObject.contact,
                        data: personalinfoObj

                    }).then(function mySucces(response)  {

                    }, function myError(response) {
                        console.log(response);
                    });
                }
                $mdDialog.hide();
            };
        }
    }
})();
