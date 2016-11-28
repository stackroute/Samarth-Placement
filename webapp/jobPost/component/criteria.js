(function(){
  'use:strict'
  angular
  .module("samarth.jobPost")
  .component("criteria",{
      templateUrl: 'jobPost/template/criteria.html',
      bindings: { name: '=',
                   txt: '@'      
                },
                controller: 'criteria',
            })
            .controller('criteria',criteria);
            function criteria()
                {
                  var vm = this;
                  vm.job = [];

                  vm.job = [{
          title: "Need a fastrack Network Manager",
          role: "Senior Network Administrator",
          duties: "Pays employees by receiving and verifying expense reports and requests for advances; preparing checks."+
                  "Maintains accounting ledgers by verifying and posting account transactions."+
                  "Verifies vendor accounts by reconciling monthly statements and related transactions."+
                  "Maintains historical records by microfilming and filing documents."+
                  "Disburses petty cash by recording entry; verifying documentation.",
          skills: [{
            name:"angular",
            expertise:"Expert",
          }, {
            name:"React",
            expertise:"Beginner",
          }],
          language:"English",
          jobLocation:"Bangalore",
          openningsNo:"3",
          experience:"4 yrs",
          closeDate:"20-12-2012",
          qualification:[{
            name:"Graduate",
            score:"99",
            priority:"mandatory",
          }, {
            name:"PostGraduate",
            score:"99",
            priority:"optional",
          }],
          renumeration:"24lakhs/anum",
          externalPerks:"Pays employees by receiving and verifying expense reports and requests for advances; preparing checks."+
                          "Maintains accounting ledgers by verifying and posting account transactions."+
                          "Verifies vendor accounts by reconciling monthly statements and related transactions.",
        }, {
          title: "Need a fastrack Network Manager",
          role: "Senior Network Administrator",
          duties: "Pays employees by receiving and verifying expense reports and requests for advances; preparing checks."+
                  "Maintains accounting ledgers by verifying and posting account transactions."+
                  "Verifies vendor accounts by reconciling monthly statements and related transactions."+
                  "Maintains historical records by microfilming and filing documents."+
                  "Disburses petty cash by recording entry; verifying documentation.",
          skills: [{
            name:"angular",
            expertise:"Expert",
          }, {
            name:"React",
            expertise:"Beginner",
          }],
          language:"English",
          jobLocation:"Bangalore",
          openningsNo:"3",
          experience:"4",
          closeDate:"20-12-2012",
            qualification:[{
            name:"Graduate",
            score:"99",
            priority:"mandatory",
          }, {
            name:"PostGraduate",
            score:"99",
            priority:"optional",
          }],
          renumeration:"24lakhs/anum",
          externalPerks:"Pays employees by receiving and verifying expense reports and requests for advances; preparing checks."+
                          "Maintains accounting ledgers by verifying and posting account transactions."+
                          "Verifies vendor accounts by reconciling monthly statements and related transactions.",  
        }];
      }
})();
