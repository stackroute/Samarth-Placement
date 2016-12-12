'use strict';
let scripts = document.getElementsByTagName('script');
let currentScriptPath = scripts[scripts.length - 1].src;
/* Defining the job Card web component*/
angular.module('samarth-webcomponents')
    .component('jobCard', {
        /* Binding jobID*/
        bindings: {
            data: '<',
            showheader: '<'
        },
        templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf(
            '/')) + '/templates/jobcard.html',
        controller: jobcardCtrl,
        transclude: true
    });

/* Controller for job Card*/
function jobcardCtrl($scope, jobCardService, $window, $timeout) {
    // $scope.job = this.job;
    let data = this.data;
    let jobID = data.jobID;
    let employerID = data.employerID;
    console.log('ID : ' + this.data);
    /* Calling the service for getting the details*/
    jobCardService.getJobByID(jobID, employerID)
        .then(function successCallback(response) {
                console.log('Connected successfully' + response.data);
                let job = response.data;
                $scope.job = job[0];
            },
            function errorCallback(response) {
                console.log('some error occured');
            });

    function createDownloadUrl() {
        name = $scope.job.jobID + '.png';
        // ctrl.data1 = ctrl.data;
        $scope.downloaddata = JSON.stringify($scope.job);

        let blob = new Blob([$scope.downloaddata], {
                type: 'text/plain'
            }),
            url = $window.URL || $window.webkitURL;
        $scope.fileUrl = url.createObjectURL(blob);
    }
    let getCanvas;
    $timeout(createDownloadUrl, 1000);
    $scope.render = function(ev) {
        let card = angular.element(document.querySelector('#totalcardarea'));
        html2canvas(card, {
            onrendered: function(canvas) {
                getCanvas = canvas;
                $scope.downloadCard();
            }
        });
    };
    $scope.downloadedData = function() {
        let download = angular.element(document.querySelector('#jsonDownload'));
        download.attr('download', $scope.job.jobID + '.json').attr('href', $scope.fileUrl);
    };
    $scope.downloadCard = function() {
        let imageData = getCanvas.toDataURL('image/png');
        let newData = imageData.replace(/^data:image\/png/,
            'data:application/octet-stream');
        let download = angular.element(document.querySelector('#download'));
        download.attr('download', name).attr('href', newData);
    };
}
