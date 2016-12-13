(function() {
    let scripts = document.getElementsByTagName('script');
    let currentScriptPath = scripts[scripts.length - 1].src;
    let projectconversationpath = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/')) + '/templates/sectionprojectconversation.html';

    angular.module('samarth-webcomponents')
        .component('myProjectsectioncard', {
            templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf(
                '/')) + '/templates/sectionprojectcard.html',
            controller: projectsectioncardCtrl,
            bindings: {
                candidateid: '<',
                showheader: '<',
                languagedata: '='
            },
            transclude: {
                verify: 'verify'
            }
        });

    function projectsectioncardCtrl($http, $mdDialog, datagenerate, $rootScope, $scope) {
        let ctrl = this;
        ctrl.loadLangData = function(lang) {
            datagenerate.getjson('section', lang).then(function(result) {
                ctrl.items = result;
            }); // end datagenerate
        };

        function getItem(key) {
            // return localStorageService.get(key);
        }

        ctrl.loadLangData('English');

        ctrl.changeFont = 'changeProjectNameFont';
        ctrl.profile = [];
        ctrl.profile1 = [];
        ctrl.totalProjects = 0;
        ctrl.limitval = 3;
        ctrl.increaseLimit = function() {
            ctrl.limitval = ctrl.limitval + 60;
        };

        ctrl.decreaseLimit = function() {

            ctrl.limitval = ctrl.limitval - 60;
        };

        $http({
            method: 'GET',
            url: '/project/' + ctrl.candidateid

        }).then(function successCallback(response) {
            for (let noOfObjects = 0; noOfObjects < response.data.length; noOfObjects++) {
                for (let record = 0; record < response.data[noOfObjects].projects.length; record++) {
                    ctrl.profile.push(response.data[noOfObjects].projects[record]);
                }
            }
            ctrl.totalProjects = ctrl.profile.length;
        }, function errorCallback(response) {
            console.log('Error accord during Project Section');
        });

        $rootScope.$on('projectdata', function() {
            ctrl.profile = [];
            ctrl.totalProjects = 0;
            $http({
                method: 'GET',
                url: '/project/' + ctrl.candidateid

            }).then(function successCallback(response) {
                for (let noOfObjects = 0; noOfObjects < response.data.length; noOfObjects++) {
                    for (let record = 0; record < response.data[noOfObjects].projects
                        .length; record++) {
                        ctrl.profile.push(response.data[noOfObjects].projects[record]);
                    }
                }
                ctrl.totalProjects = ctrl.profile.length;
            }, function errorCallback(response) {
                console.log('Error accord during Project Section');
            });
        });

        ctrl.showAdvanced = function(ev, header, object) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: projectconversationpath,
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    locals: {
                        header: header,
                        object: object,
                        candidateid: this.candidateid
                    }
                })
                .then(
                    function(answer) {},
                    function() {}
                );
        };

        function DialogController($scope, $mdDialog, $http, header, object, candidateid) {

            $scope.candidateid = candidateid;
            $scope.header = header;
            $scope.projectObj = object;
            $scope.skills = $scope.projectObj.skills;
            console.log("skills", $scope.skills)

            $scope.submit = function() {
                $scope.Skills.push('');
            };
            if (object != '') {
                $scope.Project = object.name;
                $scope.Duration = object.duration.durationInMonths;
                $scope.Client = object.workplace;
                $scope.Location = object.location;
                $scope.Salary = object.income;

            } else {
                $scope.Project = "";
                $scope.Duration = "";
                $scope.Client = "";
                $scope.Location = "";
                $scope.Salary = "";
                $scope.Skills = ["skillname"];
            }

            $scope.submit = function() {
                $scope.Skills.push('');
            };
            if (object != '') {
                $scope.Project = object.name;
                $scope.Duration = object.duration.durationInMonths;
                $scope.Client = object.workplace;
                $scope.Location = object.location;
                $scope.Salary = object.income;
            } else {
                $scope.Project = '';
                $scope.Duration = '';
                $scope.Client = '';
                $scope.Location = '';
                $scope.Salary = '';
                $scope.Skills = ['skillname'];
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
                var skill = $scope.skills.toString().split(",");
                console.log("Header" + header)

                var projectData = {

                    "projects": [{
                        "name": $scope.Project,
                        "workplace": $scope.Client,
                        "location": $scope.Location,
                        "income": $scope.Salary,
                        "duration": {
                            "from": "09/08/2016",
                            "to": "09/11/2016",
                            "durationInMonths": $scope.Duration
                        },
                        "skills": skill,
                        "meta": []
                    }]
                } 

                if (header == 'Add Project') {
                    console.log('before adding project', projectData);
                    $http({
                        method: 'POST',
                        url: '/project/' + ctrl.candidateid,
                        data: projectData,
                        crossDomain: true
                    }).then(function successCallback(response) {
                        console.log('After adding project', response.data);
                        $rootScope.$emit('projectdata', {});
                    }, function errorCallback(response) {
                        console.log('Error accord during Project Section');
                    });
                } else {
                    console.log('projectdata', projectData);
                    $http({
                        method: 'PATCH',
                        url: '/project/' + ctrl.candidateid + '/' +
                            object.name,
                        data: projectData,
                        crossDomain: true
                    }).then(function successCallback(response) {
                        console.log('After updating project', response.data);
                        $rootScope.$emit('projectdata', {});
                    }, function errorCallback(response) {
                        console.log('Error accord during updating Project Section');
                    });
                }
            };
        }
    }
})();
