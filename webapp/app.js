angular.module('samarth',
['ngMaterial',
'ngMdIcons',
'ui.router',
'ngMessages',
'ngAnimate',
'samarth.home',
'samarth.coordinatorLogin',
'samarth.dashboard',
'samarth.admindashboard',
'samarth.candidatesearch',
'samarth-webcomponents',
'samarth.cordsignup',
'samarth.candidateReg',
'samarth.centerdetails',
'samarth.centerdetailsreg',
'samarth.completeprofile',
'ngFlash',
'samarth.import',
'LocalStorageModule',
'satellizer',
'ngStorage',
'simplePagination',
'ngFileUpload',
'samarth.jobSearch',
'samarth.jobProvider',
'samarth.placementProcess',
'mm.acl',
'samarth.accessdenied'
])


.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('indigo')

})
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])
.run(function($http, $localStorage) {
  if ($localStorage.tokenDetails) {
    $http.defaults.headers.common['x-access-token'] = $localStorage.tokenDetails.token;
  }
})
.run(['$rootScope', '$state', '$auth', '$http','$localStorage', 'AclService', function ($rootScope, $state, $auth, $http, $localStorage, AclService) {

  var aclData = {
    guest :['index.home','index.accessdenied'],
    coordinator: ['index','index.dashboard','index.candidatesearch','index.candidatesearch.results','index.jobSearch',
                  'index.candidateReg','index.jobSearch.results','index.empreg','index.verifyprofile','index.jobPost',
                  'index.job','index.jobReport','index.candidateReport','index.candidatePlacement','index.candidate',
                  'index.applied','index.applied.appliedCandidate','index.applied.acceptedCandidate','index.emp',
                  'index.applied.rejectedCandidate','index.applied.joinedCandidate','index.applied.declinedCandidate','index.aboutus'],
    supervisor: ['index.dashboard', 'index.aboutus'],
    admin: ['index.dashboard', 'index.getcoordinator','index.createaccount', 'index.centerdetails','index.centerdetailsreg',
            'index.aboutus','index','index.coordinatorregistration','index.coordinatorupdation','index.import']
  }
  AclService.setAbilities(aclData);

  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams){
    if ($auth.isAuthenticated()) {
    AclService.attachRole($auth.getPayload().role);
    }
    else {
      AclService.attachRole('guest');
    }
if(!AclService.can(toState.name)){
  $rootScope.sideicon = false;
  $rootScope.logout = false;
  AclService.flushRoles();
  AclService.attachRole('guest');
  $auth.removeToken();
  $http.defaults.headers.common['x-access-token']='';
  delete $localStorage.tokenDetails;
    e.preventDefault();
    $state.transitionTo('index.accessdenied');
    }
})
}]);
