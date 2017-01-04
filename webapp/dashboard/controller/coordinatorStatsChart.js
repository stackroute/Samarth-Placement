
angular.module('samarth.dashboard')
.controller('coordinatorStatChartCtrl', ['$scope', '$timeout', function($scope, $timeout) {
let candidateStatChart={};
let jobStatChart ={};
// Adding the class name dymanically to avoid multiple charts rendering in same element
$scope.candStatsClassName = 'candStats' + $scope.index;
$scope.jobStatsClassName = 'jobStats' + $scope.index;

let candStats = [{
  value: $scope.data.Candidates/100,
  color: 'lime'
},
{
  value: (($scope.data.Looking/$scope.data.Candidates)*100),
  color: 'teal'
},
{
  value:(($scope.data.applied/$scope.data.Candidates)*100),
  color: 'orange'
},
{
  value:(($scope.data.applied/$scope.data.Candidates)*100),
  color: 'blue'
}];

let jobStats = [{
  value: $scope.data.job/100,
  color: 'A1887F'
},{
  value: (($scope.data.availableJobs/$scope.data.job)*100),
  color: '#D7CCC8'
},
{
  value:(($scope.data.expiredJobs/$scope.data.job)*100),
  color: '#d50000'
}];


let candChartSettings = {
  diameter: 100,
  stroke: {
      width: 20,
      gap: 2
  },
  shadow: {
      width: 4
  },
  animation: {
      duration: 1750,
      delay: 200
  },
  min: 1,
  max: 100,
  round: false,
  series: candStats
};

let jobChartSettings = {
  diameter: 100,
  stroke: {
      width: 20,
      gap: 2
  },
  shadow: {
      width: 4
  },
  animation: {
      duration: 1750,
      delay: 200
  },
  min: 1,
  max: 100,
  round: false,
  series: jobStats
};

// Just to make sure that the RadialProgressChart gets executed in the next execution cycle.
$timeout(function() {
  candidateStatChart = new RadialProgressChart('.' + $scope.candStatsClassName, candChartSettings);
  jobStatChart = new RadialProgressChart('.' + $scope.jobStatsClassName, jobChartSettings);
});

}])
.directive('coordinatorStatChart', function() {
  return {
    templateUrl: '../dashboard/template/coordinatorStatsChart.html',
    controller: 'coordinatorStatChartCtrl',
    scope: {
      data: '<',
      index: '@'
    }
  };
});
