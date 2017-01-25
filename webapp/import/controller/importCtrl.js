angular
 .module('samarth.import')
 .controller('importCtrl', importCtrl);

 function importCtrl($scope, Upload, $mdDialog, $state) {

 		$scope.submit = function(ev) {
      // $scope.upload($scope.file);
        var confirm = $mdDialog.confirm()
            .title('Would you like to import the file?')
            .targetEvent(ev)
            .ok('Yes')
            .cancel('Cancel');
            $mdDialog.show(confirm).then(function() {
                    $scope.upload($scope.file);
                    $mdDialog.hide();
                    $state.go('index.dashboard');
            }, function() {
             $mdDialog.hide();
            });
    };





    	// upload on file select or drop 
    $scope.upload = function (file) {
    	Upload.upload({
            url: '/upload',
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            console.log(resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
   
 };
