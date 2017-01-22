angular.module('samarth',
['ngMaterial',
'ngMdIcons',
'ui.router',
'ngMessages',
'ngAnimate',
'samarth.home',
'samarth.coordinatorLogin',
'samarth.dashboard',
'samarth.import',
'samarth.candidatesearch',
'samarth-webcomponents',
'samarth.cordsignup',
'samarth.candidateReg',
'samarth.completeprofile',
'ngFlash',
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
    coordinator: ['index.dashboard','index.candidatesearch','index.jobSearch','index.candidateReg','index.jobPost','index.emp','index.aboutus'],
    supervisor: ['index.dashboard', 'index.aboutus'],
    admin: ['index.dashboard', 'index.getcoordinator', 'index.centerdetails','index.aboutus','index.import']
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
