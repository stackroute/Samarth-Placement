var scriptsquestionbox = document.getElementsByTagName("script");
var currentScriptPathQuestion = scriptsquestionbox[scriptsquestionbox.length - 1].src;

angular.module('samarth-webcomponents')
    .component('myQuestionbox', {
        templateUrl: currentScriptPathQuestion.substring(0, currentScriptPathQuestion.lastIndexOf(
            '/')) + '/templates/questionbox.html',
        controller: questionBoxCtrl          
    });

function questionBoxCtrl($timeout, $auth, quesnboxService, $rootScope) {
    var candidateid = $auth.getPayload().uname;
    console.log("data from user", candidateid);
    var ctrl = this;
    ctrl.showMaxBtn = false;
    ctrl.displayAlertMessage = false;
    ctrl.showInputBox = function() {
        ctrl.displayInputBox = false;
    }

    ctrl.hideDisplayAlertMessage = function() {
        ctrl.displayAlertMessage = false;
    }

    ctrl.startInpuBox = function() {
        $timeout(ctrl.showInputBox, 0);

    }
    ctrl.questionArray = [];
    ctrl.questionobj;
    // var lang="English";
    ctrl.loadquestionarray = function(lang) {
        console.log(lang);
        ctrl.questionArray = [];
        quesnboxService.questionGenerator(lang).then(function(response) {
            ctrl.questionobj = response;
            for (var key = 0; key < response.length; key++) {
                ctrl.questionArray.push(response[key].query);
            }
        });
    }
    ctrl.loadquestionarray(getItem("lang"));

    function getItem(key) {
        // return localStorageService.get(key);
    }
    ctrl.tempLang = '';
    $rootScope.$on("lang_changed", function(event, data) {
        console.log("User switch to language " + data.language);
        ctrl.tempLang = data.language;
        ctrl.loadquestionarray(data.language);
    });

    ctrl.answerArray = [];
    ctrl.displayInputBox = true;
    ctrl.displayAnswerdBox = false;
    ctrl.currentQuestionIndex = 0;
    ctrl.nextQuestionIndex = 0;
    ctrl.val = 0;
    ctrl.clear = '';
    noOfObjects = 0;

    ctrl.increaseIndex = function() {
        if (ctrl.clear == '') {
            ctrl.displayAlertMessage = true;
        } else {
            ctrl.displayAlertMessage = false;
            ctrl.currentQuestionIndex = ctrl.currentQuestionIndex + 1;
            ctrl.val = Math.floor((ctrl.currentQuestionIndex / ctrl.questionArray.length) *
                100);
            if (ctrl.currentQuestionIndex == ctrl.questionArray.length) {
                $timeout(ctrl.hideQuestionBox, 300);
            }
            ctrl.answerArray.push(ctrl.clear);
            console.log("Inside Answer of Qbox:", ctrl.questionobj);

            quesnboxService.updatequestion(ctrl.questionobj[noOfObjects], ctrl.clear)
                .then(function(response) {
                    console.log("Inside update question");
                    ctrl.clear = '';
                    noOfObjects++;
                });
        }
    }
    ctrl.hideQuestionBox = function() {
        ctrl.displayInputBox = true;
        ctrl.displayAnswerdBox = true;
        $timeout(ctrl.showQuestionBox, 0);
    }
    ctrl.minimizeQuestionBox = function() {
        ctrl.displayInputBox = true;
        ctrl.showMaxBtn = true;
        // $timeout(ctrl.showQuestionBox, 0);
    }
    ctrl.showQuestionBox = function() {
        ctrl.loadquestionarray(ctrl.tempLang);
        ctrl.currentQuestionIndex = 0;
        ctrl.val = 0;
        ctrl.displayInputBox = false;
        ctrl.displayAnswerdBox = false;
    }                
}
