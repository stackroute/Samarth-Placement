angular.module('samarth-webcomponents')
    .service('quesnboxService', function($http, $rootScope,
        $auth) {
        var candidateid = $auth.getPayload().uname;

        return {
            questionGenerator: function(lang) {
                console.log(lang);
                var sectionArray = [
                    'project',
                    'skills',
                    'qualification',
                    'personalinfo',
                    'workexperience'
                ];

                var randomNumber = Math.floor(Math.random() * sectionArray.length);
                console.log("Section array....", sectionArray[randomNumber])
                return $http({
                    method: 'GET',
                        url: '/candidates/' + candidateid +
                              '/qboxquestions?sections=' + "skills" +
                              '&limit=2&skip=0&lang=English'         

                }).then(function successCallback(response) {
                    var questionObj = response.data;
                    console.log("About to save questionObj", questionObj);
                    return questionObj;
                }, function errorCallback(response) {
                    console.log('Error accord during Project Section')
                    return;
                });  
            },
            updatequestion: function(questiondata, answer) {
                return $http({
                    method: 'PATCH',
                    url: '/candidates/' + candidateid + '/' +
                        answer,
                    data: questiondata
                }).then(function successCallback(response) {

                    console.log("About to update answer");
                    return response;
                }, function errorCallback(response) {
                    console.log('Error accord during Project Section')
                    return;
                });  
            }
        };

    });
