angular.module('samarth-webcomponents')
    .service('skillcardService', function($http, $filter, $rootScope) {
        return {
            getskillcarddata: function(candidateid) {
                let skillcarddata = {};
                return $http({
                    method: 'get',
                    url: '/skillcard/' + candidateid

                }).then(function mySucces(response)  {
                    let object = response.data.result;

                    if (object.personalinfo[0].name != undefined) {
                        skillcarddata.name = object.personalinfo[0].name;
                    }
                    if (object.personalinfo[0].dob != undefined) {
                        skillcarddata.dob = $filter('date')(object.personalinfo[
                            0].dob, 'dd/MMM/yyyy');
                        skillcarddata.age = (new Date()).getFullYear() - $filter(
                            'date')(object.personalinfo[0].dob, 'yyyy');
                    }
                    if (object.personalinfo[0].gender != undefined) {
                        skillcarddata.gender = object.personalinfo[0].gender;
                    }
                    if (object.personalinfo[0].maritialstatus != undefined) {
                        skillcarddata.maritalstatus = object.personalinfo[0].maritialstatus;
                    }
                    if (object.personalinfo[0].contact != undefined) {
                        skillcarddata.contact = object.personalinfo[0].contact;
                    }
                    if (object.personalinfo[0].email != undefined) {
                        skillcarddata.email = object.personalinfo[0].email;
                    }

                    if (object.workexp[0].workexperience.length > 0) {
                        skillcarddata.location = object.workexp[0].workexperience[
                            0].Location;
                    }
                    if (object.personalinfo[0].location != undefined) {
                        skillcarddata['location'] = object.personalinfo[0].location;
                    }
                    if (object.workexp[0].workexperience.length > 0) {
                        skillcarddata.designation = object.workexp[0].workexperience[
                            0].designation;
                    }

                    if (object.skill[0].skills.length > 0) {
                        skillcarddata.skills = object.skill[0].skills;
                    }
                    if (object.personalinfo[0].profilepic.length > 0) {
                        skillcarddata.profilepic = object.personalinfo[0].profilepic;
                    }
                    if (object.profile[0].profession.length > 0) {
                        skillcarddata.profession = object.profile[0].profession;
                    }
                    // skillcarddata['name']=object.personalinfo[0].name;
                    return skillcarddata;
                }, function myError(response) {
                    console.log('error in getting skillcard details');
                });
            },
            uploadPicUrl: function(newUrl,candidateid){
                console.log("inside service");
                return $http({
                    method: 'POST',
                    url: 'personalinfo/' + candidateid + '/' +"profilepic/",
                    data: {profilepicUrl:newUrl}
                }).then(function successCallback(response) {
                    console.log("About to update Url");
                    return response;
                }, function errorCallback(err) {
                    console.log('Error accord during Project Section')
                    return err;
                });  
            }

        };
    });