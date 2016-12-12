(function() {
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    var educationconvopath = currentScriptPath.substring(0, currentScriptPath.lastIndexOf(
        '/')) + '/templates/educonvoNEW.html';

    var app = angular
        .module('samarth-webcomponents')
        .component('myEducationcard', {
            templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf(
                '/')) + '/templates/sectionseducationcard.html',
            controller: educationcardCtrl,
            bindings: {
                candidateid: '<',
                showheader: '<',
                languagedata: '='
            },
            transclude: {
                verify: "verify"
            }
        });

    function educationcardCtrl($mdDialog, $http, datagenerate, $rootScope) {

        var ctrl = this;

        ctrl.loadLangData = function(lang) {
            datagenerate.getjson("section", lang).then(function(result) {
                ctrl.items = result;
            }); //end datagenerate
        }

        function getItem(key) {
            // return localStorageService.get(key);
        }

        ctrl.loadLangData("English");

        ctrl.eduDetails = [];
        ctrl.schools = [];
        ctrl.colleges = [];

        ctrl.limitval = 3;
        ctrl.increaseLimit = function() {
            ctrl.limitval = ctrl.limitval + 60;
        }

        ctrl.decreaseLimit = function() {
            ctrl.limitval = ctrl.limitval - 60;
        }

        $http.get('/education/' + ctrl.candidateid).then(function(
            response) {
            for (var noOfObjects = 0; noOfObjects < response.data[0].qualification.length; noOfObjects++) {
                for (var record = 0; record < 1; record++) {

                    ctrl.eduDetails.push(response.data[0].qualification[noOfObjects]);
                }
            }
            for (var i = 0; i < ctrl.eduDetails.length; i++) {
                if (ctrl.eduDetails[i].institute.type == "school") {
                    ctrl.schools.push(ctrl.eduDetails[i]);
                }
                if (ctrl.eduDetails[i].institute.type == "college" || ctrl.eduDetails[
                        i].institute.type == "other" || ctrl.eduDetails[i].institute.type ==
                    "work") {
                    ctrl.eduDetails[i].institute.type = "work";
                    ctrl.colleges.push(ctrl.eduDetails[i]);
                }
            }
        });

        $rootScope.$on("datachanged", function() {
            ctrl.eduDetails = [];
            ctrl.schools = [];
            ctrl.colleges = [];
            console.log("data changed");

            $http.get('/education/' + ctrl.candidateid).then(
                function(response) {
                    for (var noOfObjects = 0; noOfObjects < response.data[0].qualification
                        .length; noOfObjects++) {
                        for (var record = 0; record < 1; record++) {

                            ctrl.eduDetails.push(response.data[0].qualification[
                                noOfObjects]);
                        }
                    }
                    for (var i = 0; i < ctrl.eduDetails.length; i++) {
                        if (ctrl.eduDetails[i].institute.type == "school") {
                            ctrl.schools.push(ctrl.eduDetails[i]);
                        }
                        if (ctrl.eduDetails[i].institute.type == "college" || ctrl.eduDetails[
                                i].institute.type == "other" || ctrl.eduDetails[i].institute
                            .type == "work") {
                            ctrl.eduDetails[i].institute.type = "work";
                            ctrl.colleges.push(ctrl.eduDetails[i]);
                        }
                    }
                });
        })
        ctrl.showAdvanced = function(ev, header, object) {
            $mdDialog.show({
                    controller: dialogCtrl,
                    templateUrl: educationconvopath,
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    locals: {
                        header: header,
                        object: object,
                        candidateid: ctrl.candidateid
                    }
                })
                .then(
                    function(answer) {},
                    function() {}
                );
        };

        function dialogCtrl($scope, $mdDialog, $http, header, object, $rootScope, candidateid) {
            $scope.header = header;
            $scope.years = [];
            for (var i = (new Date()).getFullYear(); i >= 1900; i--) {
                $scope.years.push(i);
            }

            if (object != '') {
                $scope.title = object.title;
                $scope.batch = object.batch;
                if (object.outcome != "") {
                    $scope.result = object.outcome.result;
                    $scope.unit = object.outcome.unit;
                } else {
                    $scope.result = "";
                    $scope.unit = "";
                }

                $scope.name = object.institute.name;
                $scope.location = object.institute.location;
                $scope.affiliation = object.institute.affiliation;
                $scope.uniqueID = object._id;
                $scope.to = object.to;
                $scope.from = object.from;
                $scope.type = object.institute.type;
                $scope.academicType = object.academicType;
            } else {
                $scope.title = "";
                $scope.batch = "";
                $scope.result = "";
                $scope.unit = "";
                $scope.name = "";
                $scope.location = "";
                $scope.affiliation = "";
                $scope.to = "";
                $scope.from = "";
                $scope.type = "";
                $scope.academicType = "";
                $scope.type = "";
            }

            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };

            $scope.save = function(header) {
                var education = {
                    "qualification": [{
                        "title": $scope.title,
                        "batch": $scope.batch,
                        "from": $scope.to,
                        "to": $scope.from,
                        "academicType": $scope.academicType,
                        "institute": {
                            "name": $scope.name,
                            "type": $scope.type,
                            "location": $scope.location,
                            "affiliation": $scope.affiliation,
                            "metadata": []
                        },
                        "outcome": {
                            "result": $scope.result,
                            "unit": $scope.unit
                        }
                    }]
                }

                if (header == "Add Education") {
                    $http({
                            method: 'POST',
                            url: '/education/' + ctrl.candidateid,
                            data: education
                        })
                        .then(function successCallback(response) {
                                console.log("education added");
                                $rootScope.$emit("datachanged", {});
                                $scope.cancel();

                            },
                            function errorCallback(response) {
                                console.log('error in adding education');
                            });
                }
                if (header == "Edit Education") {
                    $http({
                            method: 'PATCH',
                            url: '/education/' + ctrl.candidateid + "/" + $scope.title,
                            data: education
                        })
                        .then(function successCallback(response) {
                                console.log('Education Updated');
                                $rootScope.$emit("datachanged", {});
                                $scope.cancel();
                            },
                            function errorCallback(response) {
                                console.log('error in updating education');
                            });
                }

            }
        }

    }
})();
