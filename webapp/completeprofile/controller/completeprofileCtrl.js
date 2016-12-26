angular.module('samarth.completeprofile')
    .controller('completeprofileCtrl', ['$scope', '$stateParams', '$mdDialog', 'candidateprofileservice', function($scope,
        $stateParams, $mdDialog, candidateprofileservice) {

        $scope.id = $stateParams.candidateid;

        // console.log($scope.id);

        //get the verification status from the api.
        // let lang="sectionEnglish";
        // candidateprofileservice.getResourceBundle(lang).then(function(response){
        //     $scope.langResourceBundle = response.data;
        // },function(err){
        //     console.log(err);
        // });

        candidateprofileservice.getverificationdata($scope.id)
            .then(function(response) {
                $scope.arr = [];

                console.log(response.data[0].Skills);
                //  console.log("cpCtrlinside", response.data[0]);
                console.log($scope.candidatename);

                $scope.candidatename = response.data[0].candidatename;
                $scope.updated_on = response.data[0].updated_on;
                $scope.personalinfo = response.data[0].Personal_Information;
                $scope.skills = response.data[0].Skills;
                $scope.qualification = response.data[0].Qualification;
                $scope.project = response.data[0].Project;
                $scope.work = response.data[0].Work_History;

                $scope.arr.push($scope.personalinfo);
                $scope.arr.push($scope.skills);
                $scope.arr.push($scope.qualification);
                $scope.arr.push($scope.project);
                $scope.arr.push($scope.work);

                console.log("----", $scope.arr);
                //$scope.arr1 = $scope.arr

                $scope.perval = $scope.personalinfo.value;
                $scope.perrem = $scope.personalinfo.remarks;

                $scope.sklval = $scope.skills.value;
                $scope.sklrem = $scope.skills.remarks;

                $scope.qulval = $scope.qualification.value;
                $scope.qulrem = $scope.qualification.remarks;

                $scope.pjctval = $scope.project.value;
                $scope.pjctrem = $scope.project.remarks;

                $scope.wrkval = $scope.work.value;
                $scope.wrkrem = $scope.work.remarks;

            }, function(err) {
                console.log(err);
            });

        candidateprofileservice.getcandidateprofession($scope.id)
            .then(function(response) {
                $scope.profession = response.data[0].profession;
                //    console.log("find the profession", );


            }, function(err) {

            });






        $scope.showAdvanced = function(ev, typename) {
            console.log("inside showad", typename);
            $mdDialog.show({
                locals: { typename: typename, id: $scope.id },
                templateUrl: 'completeprofile/templates/newtemplate.html',
                controller: 'ListCtrl',

                clickOutsideToClose: true,
                targetEvent: ev
            }).then(function(obj) {

                $scope.updated_on = obj.z;

                if (obj.a == 'Personal_Information') {
                    $scope.perval = obj.x;
                    $scope.perrem = obj.y;

                }
                if (obj.a == 'SKills') {
                    $scope.sklval = obj.x;
                    $scope.sklrem = obj.y;
                }
                if (obj.a == 'Qualification') {
                    $scope.qulval = obj.x;
                    $scope.qulrem = obj.y;
                }
                if (obj.a == 'Project') {
                    $scope.pjctval = obj.x;
                    $scope.pjctrem = obj.y;
                }
                if (obj.a == 'Work_History') {
                    $scope.wrkval = obj.x;
                    $scope.wrkrem = obj.y;
                }
            }, function() {

            });


        };
        $scope.showDialog = function(ev) {


            $mdDialog.show({
                locals: { candidatename: $scope.candidatename, updated_on: $scope.updated_on, perval: $scope.perval, perrem: $scope.perrem, sklval: $scope.sklval, sklrem: $scope.sklrem, qulval: $scope.qulval, qulrem: $scope.qulrem, pjctval: $scope.pjctval, pjctrem: $scope.pjctrem, wrkval: $scope.wrkval, wrkrem: $scope.wrkrem },
                templateUrl: 'completeprofile/templates/fullverification.html',
                controller: 'Fullverifiy',

                clickOutsideToClose: true,

                targetEvent: ev
            })
        };


    }])
    .controller('ListCtrl', function($scope, typename, id, $mdDialog, candidateprofileservice) {
        //use them to make a new object
        $scope.typename = typename;
        $scope.id = id;



        // this function gets called when the user clicks OK on rubric..
        $scope.answer = function(b, id, remarks) {

            // b is the value.
            // remarks are the comments.


            //create current date.
            var date = new Date();

            //check what was the typename and make the object accordingly.
            if ($scope.typename == 'Personal_Information') {
                var newobj = {
                    candidateid: $scope.id,
                    updated_on: date,
                    Personal_Information: {
                        value: b,
                        remarks: remarks
                    }
                }

            }
            if ($scope.typename == 'Skills') {
                var newobj = {
                    candidateid: $scope.id,
                    updated_on: date,
                    Skills: {
                        value: b,
                        remarks: remarks
                    }
                }

            }
            if ($scope.typename == 'Qualification') {
                var newobj = {
                    candidateid: $scope.id,
                    updated_on: date,
                    Qualification: {
                        value: b,
                        remarks: remarks
                    }
                }

            }
            if ($scope.typename == 'Project') {
                var newobj = {
                    candidateid: $scope.id,
                    updated_on: date,
                    Project: {
                        value: b,
                        remarks: remarks
                    }
                }

            }
            if ($scope.typename == 'Work_History') {
                var newobj = {
                    candidateid: $scope.id,
                    updated_on: date,
                    Work_History: {
                        value: b,
                        remarks: remarks
                    }
                }

            }


            // console.log("made this newobj", newobj);
            // pass the new object to update.
            //give a api call to update the verification
            candidateprofileservice.updateverificationdata($scope.typename, newobj).
            then(function(res) {
                console.log("successfully updated the data");
            }, function(err) {
                console.log(err);
            });

            // pass what you need to render in the background.
            var obj = {
                x: b,
                y: remarks,
                z: date,
                a: typename
            }

            // console.log("formed this obj", obj);

            $mdDialog.hide(obj);
        }

        //cancels the dialog box.
        $scope.cancel = function() {
            $mdDialog.cancel();
        };



    })
    .controller('Fullverifiy', function($scope, $mdDialog, candidatename, updated_on, perval, perrem, sklval, sklrem, qulval, qulrem, pjctval, pjctrem, wrkval, wrkrem) {
        //use them to make a new object


        $scope.comments = "";
        $scope.candidatename = candidatename;
        console.log(candidatename);
        $scope.updated_on = updated_on;
        $scope.perval = perval;
        $scope.perrem = perrem;

        $scope.sklval = sklval;
        $scope.sklrem = sklrem;

        $scope.qulval = qulval;
        $scope.qulrem = qulrem;

        $scope.pjctval = pjctval;
        $scope.pjctrem = pjctrem;

        $scope.wrkval = wrkval;
        $scope.wrkrem = wrkrem;

        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    });
//ontology
//taxonomy
