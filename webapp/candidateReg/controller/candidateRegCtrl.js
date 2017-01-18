function candidateRegCtrl(
  candidateRegFactory,
  languageFact,
  $mdDialog,
  professionservice,
  locationFact) 
  {
    let vm = this;
    let lanIter = 0;
    vm.result = [];
    vm.profession = [];
    vm.location = [];
    vm.language = [];
    vm.selectedLanguage=[lanIter];
    vm.lang='';
    vm.status = '';


console.log('Candidate ctrl');


  //server request

  function languagesFact()
  {
    languageFact.languageReq().then(function(data) 
    {
      vm.language= data.data;
    })
  }

  function locationsFact()
  {
    locationFact.locationReq().then(function(data) 
    {
      console.log('location--------------');
      console.log(data);
      var temp=[];
      for( var i=0;i<data.data.length;i++)
      {    
          temp[i]= data.data[i].location;
      }
      vm.location= temp;
      console.log(temp)
    })
  }

  function setProfession(){
   professionservice.getProfession().then(function(data){
    console.log(data.data);
    var temp=[];
    var k=0;
    var count=0;

    for(var i=0;i<data.data.length;i++)
    {
      for(var j=i+1;j<data.data.length;j++)
      {
        if(data.data[i].professions==data.data[j].professions)
        {
          count=1;
        }
      }
      if(count==0)
      {
        temp[k]= data.data[i].professions;
        k++;
      }
      count=0;
    }
    vm.profession=temp;
  })
  };

  //insert a language to the selected language
  function insertLang()
  {
    lanIter++;
    vm.selectedLanguage.push(lanIter);
  }
  //submiting the form
  function formSubmit()
  {
    candidateRegFactory.initialData(vm.candidate).then(function(response) 
    {
     vm.result=response.data;
     vm.status="Successfully registered the candidate"
     vm.candidate={};
     console.log(response.data);
   },
    function(err) 
   {
      console.log(err);
      var confirm = $mdDialog.confirm()
            .title('Sorry!')
            .textContent(err.data)
            .ariaLabel('server error')
            .ok('Report the incident!')
            .cancel('Ignore');
    
        $mdDialog.show(confirm)
        .then(function() 
          {
            vm.status = '';
          }, 
          function() 
          {
            vm.status = '';
          }
        );
      })
    }

    vm.languagesFact=languagesFact;
    vm.setProfession=setProfession;
    vm.insertLang = insertLang;
    vm.formSubmit = formSubmit;
    vm.locationsFact = locationsFact;

    vm.setProfession();
    vm.languagesFact();
    vm.locationsFact();
}

angular
.module('samarth.candidateReg')
.controller('candidateRegCtrl',candidateRegCtrl);