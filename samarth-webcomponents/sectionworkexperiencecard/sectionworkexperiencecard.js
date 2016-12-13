(function() {
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    var workpath = currentScriptPath.substring(0, currentScriptPath.lastIndexOf(
        '/')) + '/templates/sectionworkexperienceconversation.html';

    var app = angular
        .module('samarth-webcomponents')
        .component('myWorkexperiencecard', {
            templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf(
                '/')) + '/templates/sectionworkexperiencecard.html',
            controller: workexperiencecardCtrl,
            bindings: {
                candidateid: '<',
                showheader: '<',
                languagedata: '='
            },
            transclude: {
                verify: "verify"
            }

        })
        .directive('formattedDate1', function(dateFilter) {
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
                        //convert data from model format to view format
                        return dateFilter(data, scope.format); //converted
                    });
                }
            }
        })

    function workexperiencecardCtrl($http, $mdDialog,
        datagenerate, $rootScope) {
        var ctrl = this;
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
        ctrl.workexperiences = [];
        ctrl.workexperience1 = [];
        ctrl.totalworkexperience = 0;
        ctrl.limitval = 3;
        ctrl.increaseLimit = function() {
            ctrl.limitval = ctrl.limitval + 60;
        }

        ctrl.decreaseLimit = function() {
            ctrl.limitval = ctrl.limitval - 60;
        }

        $http.get('/work/' + ctrl.candidateid)
            .then(function success(response) {
                for (var noofobj = 0; noofobj < response.data.length; noofobj++) {
                    for (var record = 0; record < response.data[noofobj].workexperience.length; record++) {
                        ctrl.workexperiences.push(response.data[noofobj].workexperience[
                            record]);
                    }
                    ctrl.totalworkexperience = ctrl.workexperiences.length;

                }
            }, function error(response) {
                console.log("error occured");
            });
        $rootScope.$on("workexpdata", function() {
            ctrl.workexperiences = [];
            ctrl.totalworkexperience = 0;

            $http.get('/work/' + ctrl.candidateid)
                .then(function success(response) {
                    for (var noofobj = 0; noofobj < response.data.length; noofobj++) {
                        for (var record = 0; record < response.data[noofobj].workexperience
                            .length; record++) {
                            ctrl.workexperiences.push(response.data[noofobj].workexperience[
                                record]);
                        }
                        ctrl.totalworkexperience = ctrl.workexperiences.length;
                    }
                }, function error(response) {
                    console.log("error occored ", response);
                });

        })

        ctrl.showAdvanced = function($event, header, object) {

            $mdDialog.show({
                    controller: dialogCtrl,
                    templateUrl: workpath,
                    parent: angular.element(document.body),
                    targetEvent: $event,
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


        function dialogCtrl($scope, $mdDialog, $http, header, object,
            candidateid) {

            $scope.header = header;
            $scope.projectObj = object;
            $scope.candidateid = candidateid;
            if (object != '') {
                $scope.designation = object.designation;
                $scope.workplace = object.workplace;
                $scope.Location = object.Location;
                $scope.salary = object.salary;
                $scope.year = object.duration.duration;
                $scope.from = object.duration.from;
                $scope.to = object.duration.to;
                $scope.skills = object.skills;
            } else {
                $scope.designation = "";
                $scope.workplace = "";
                $scope.Location = "";
                $scope.salary = "";
                $scope.year = "";
                $scope.from = "";
                $scope.to = "";
                $scope.skills = "";


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
                var skills1 = $scope.skills;
                var res = skills1.toString().split(",");

                var workdata = {
                    "workexperience": [{
                        "designation": $scope.designation,
                        "workplace": $scope.workplace,
                        "Location": $scope.Location,
                        "salary": $scope.salary,
                        "duration": {
                            "duration": $scope.year,
                            "from": $scope.from,
                            "to": $scope.to
                        },
                        "skills": res
                    }]
                }
                if (header == "Add Workexperience") {
                    $http({
                        method: 'POST',
                        url: '/work/' + candidateid,
                        data: workdata,
                        crossDomain: true
                    }).then(function successCallback(response) {
                        $rootScope.$emit("workexpdata", {});
                    }, function errorCallback(response) {});  
                } else {
                    $http({
                        method: 'PATCH',
                        url: '/work/' + candidateid + '/' + object.workplace,
                        data: workdata,
                        crossDomain: true
                    }).then(function successCallback(response) {
                        $rootScope.$emit("workexpdata", {});

                    }, function errorCallback(response) {
                        console.log('Error accord during updating experience Section');
                    });  

                }
            }
        }
    }
})();
