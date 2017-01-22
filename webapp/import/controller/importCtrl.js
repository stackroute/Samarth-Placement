angular
 .module('samarth.import')
 .controller('importCtrl', importCtrl);

 function importCtrl($scope, Upload) {

 		$scope.submit = function() {
      $scope.upload($scope.file);
    };

    	// upload on file select or drop 
    $scope.upload = function (file) {
    	Upload.upload({
            url: '/upload',
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });

    	// importFactory.uploadFile(file).then(function (resp) {
     //        console.log('Success '+ resp.data);
     //    }, function (resp) {
     //        console.log('Error status: ' + resp.status);
     //    });
    };
   
 };
