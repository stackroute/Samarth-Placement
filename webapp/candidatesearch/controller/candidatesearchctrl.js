angular.module('samarth.candidatesearch')
    .controller('candidatesearchctrl', ['$scope',
        '$parse',
        'candidateservice',
        'allcandidateservice',
        'parseservice',
        'Pagination',
        '$stateParams',
        '$state',
        '$rootScope',
        '$auth',
        function($scope, $parse, candidateservice, allcandidateservice, parseservice, Pagination, $stateParams, $state, $rootScope, $auth) {
            // console.log("Values state : "+$stateParams.circleName+$stateParams.circleDomain);
            $scope.openMenu = function($mdOpenMenu, ev) {
                $mdOpenMenu(ev);
            }
            // $rootScope.user=$auth.getPayload();
            // console.log($rootScope.user);
            $scope.pagination = Pagination.getNew(4);
            allcandidateservice.allcandidates()
            .then(function(response) {
                $scope.results = response.data.results;
                console.log("all candidates ctrl ",$scope.results[0]);                
                $scope.pagination.numPages = Math.ceil($scope.results.length / $scope.pagination.perPage);
                $state.go('index.candidatesearch.results');
            }, function(err) {                
                $scope.message = err;
                console.log(err);
            });

            if ($stateParams.circleName && $stateParams.circleDomain) {
                console.log("dssssssssssssssssssssss");
                candidateservice.getcandidatedata($stateParams.circleName)
                    .then(function(candidates) {
                        $scope.results = candidates;
                        console.log("from ctrl", $scope.results);
                        $scope.pagination.numPages = Math.ceil($scope.results.length / $scope.pagination.perPage);
                        $state.go('index.candidatesearch.results');
                    }, function(err) {
                        $scope.message = err;
                    })
            }


            $scope.search = function(text) {

                //var arr = text.split(/[ ,]+/);
                // if($stateParams.circleName && $stateParams.circleDomain){
                //  arr.push($stateParams.circleName);  
                // }
                parseservice.parsetext(text).then(function(results) {
                    $scope.results = results;
                    $scope.pagination.numPages = Math.ceil(results.length / $scope.pagination.perPage);
                }, function err(err) {
                    $scope.message = err;
                });
            }

        }
    ]);
