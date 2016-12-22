angular.module('samarth.completeprofile')
    .service('candidateprofileservice', ['$http', function($http) {


        return {
            getverificationdata: function(candidateid) {
                return $http.get('/verification/' + candidateid);
            },


            updateverificationdata: function(typename, candidatedata) {
                return $http.patch('/verification/updateverification/' + typename,
                    candidatedata);
            },

            getcandidateprofession: function(candidateid) {
                return $http.get('/profile/' + candidateid);
            }


        }
        // return {
        //     getverificationdata: function(candidateid) {



        //     }
        // }


    }]);

/*

candidateid,


*/
