angular.module('samarth.dashboard')
.controller('coordinatorStatChartCtrl', ['$scope', '$timeout', function($scope, $timeout) {
let candidateStatChart={};
let jobStatChart ={};
// Adding the class name dymanically to avoid multiple charts rendering in same element
$scope.candStatsClassName = 'candStats' + $scope.index;
$scope.coordStatsClassName = 'coordStats' + $scope.index;

let candStats = [{
  value: (($scope.data.placed/$scope.data.Candidates)*100),
  color: 'lime'
},
{
  value: (($scope.data.applied/$scope.data.Candidates)*100),
  color: 'teal'
},
{
  value:(($scope.data.Looking/$scope.data.Candidates)*100),
  color: 'orange'
},
{
  value:(($scope.data.Candidates/$scope.data.Candidates)*100),
  color: 'blue'
}];

let coordStats = [{
  value: (($scope.data.expiredJobs/$scope.data.job)*100),
  color: 'A1887F'
},{
  value: (($scope.data.availableJobs/$scope.data.job)*100),
  color: '#00838F'
},
{
  value: (($scope.data.job/$scope.data.job)*100),
  color: '#FFC107'
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
  series: coordStats
};

// Just to make sure that the RadialProgressChart gets executed in the next execution cycle.
$timeout(function() {
  candidateStatChart = new RadialProgressChart('.' + $scope.candStatsClassName, candChartSettings);
  jobStatChart = new RadialProgressChart('.' + $scope.coordStatsClassName, jobChartSettings);
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
