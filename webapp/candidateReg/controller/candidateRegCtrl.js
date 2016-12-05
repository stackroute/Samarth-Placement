angular
  .module('samarth.candidateReg')
  .controller('candidateRegCtrl',candidateRegCtrl);

  function candidateRegCtrl($http,candidateRegFactory,$mdDialog,professionservice) 
  {
    var vm = this;
    vm.result = [];
    vm.profession = [];
    vm.location = [];
    vm.language = [];
    vm.selectedLanguage={};
    vm.lang='';
    vm.status = '';

    vm.initialData = initialData;
    vm.setProfession=setProfession;
    vm.insertLang = insertLang;
    vm.formSubmit = formSubmit;

    initialData();
    setProfession();
    //server request
    function initialData(){
     candidateRegFactory.initialData().then(function(response) {
       vm.result=response.data;
       //vm.profession=response.data; //vm.result.profession;
       vm.location= vm.result.location;
       vm.language= vm.result.language;
    })
   };    
   function setProfession(){
     professionservice.getProfession().then(function(profession){
       vm.profession=profession.data;
     })
   };

    //insert a language to the selected language
    function insertLang()
    {

      if(vm.lang!==null&&vm.lang!==""){
        if(vm.selectedLanguage[vm.lang]==undefined)
        {
          vm.selectedLanguage[vm.lang]=vm.lang;//need to remove repeated value
        }
        else
        {
          var index = vm.language.indexOf(vm.selectedLanguage[vm.lang]);
          
        }
        
      }
    }
    //submiting the form
    function formSubmit()
    {
      var confirm = $mdDialog.confirm()
        .title('Sorry!')
        .textContent('The form is not submited to the server.')
        .ariaLabel('server error')
        .ok('Report the incident!')
        .cancel('Ignore');

    $mdDialog.show(confirm)
    .then(function() 
      {
        vm.status = 'You decided to get rid of your debt.';
      }, 
      function() 
      {
        vm.status = 'You decided to keep your debt.';
      }
    );
   }
  }