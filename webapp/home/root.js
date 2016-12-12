angular.module('samarth')
   .config(config);

   function config($stateProvider){
     
     $stateProvider
    .state('initialState', {
           url: '',
           views: {
               'content': {
                   controller: 'initialCtrl'

               }
           }
       });

}

    .config(config);

    function config($stateProvider){
      
      $stateProvider
     .state('initialState', {
            url: '',
            views: {
                'content': {
                    controller: 'initialCtrl'
                }
            }
        });
 
 } 
