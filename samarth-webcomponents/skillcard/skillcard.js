(function() {
        let scripts = document.getElementsByTagName('script');
        let currentScriptPath = scripts[scripts.length - 1].src;

        angular.module('samarth-webcomponents')        
            .component('mySkillcard',   {
                templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf(
                    '/')) + '/templates/skillcard.html',
                            controller: skillcardCtrl,
                bindings: {
                    candidateid: '<',
                    showheader: '<',
                    picsize: '@?',
                    contentsize : '@?'
                        // data: "="
                },
                transclude: {
                    cardactions: 'cardactions',
                    badges: 'badges'
                }
        });

        function skillcardCtrl($window, $timeout, $mdDialog, skillcardService) {
            let ctrl = this;
            let name;
            
            let showEditForm = false ;

            this.edit = function(newUrl){
                console.log("newURl ---->",newUrl);
                if(this.showEditForm){
                    skillcardService.uploadPicUrl(newUrl,this.candidateid);
                    ctrl.data.profilepic = newUrl;
                    console.log("uploaded");

                    this.showEditForm =false;
                }else{
                    this.showEditForm = true;
                    console.log(this.showEditForm);
                }
            }

            if(!this.picsize) {
                this.picsize = 'default';
            }
            if(!this.contentsize) {
                this.content = 'default';
            }

            skillcardService.getskillcarddata(this.candidateid).then(function(result) {
                ctrl.data = result;
            });

            function createDownloadUrl() {
                name = ctrl.data.name + '.png';
                ctrl.data1 = ctrl.data;
                ctrl.downloaddata = JSON.stringify(ctrl.data1);

                blob = new Blob([ctrl.downloaddata], {
                        type: 'text/plain'
                    }),
                    url = $window.URL || $window.webkitURL;
                ctrl.fileUrl = url.createObjectURL(blob);
            }
            let getCanvas;
            $timeout(createDownloadUrl, 1000);

            ctrl.render = function(ev) {
                let card = angular.element(document.querySelector('#totalcardarea'));
                html2canvas(card, {
                    onrendered: function(canvas) {
                        getCanvas = canvas;
                        ctrl.downloadcard();
                        // ctrl.showConfirm(ev);
                    }
                });
            };

            ctrl.downloadcard = function() {
                let imgageData = getCanvas.toDataURL('image/png');
                let newData = imgageData.replace(/^data:image\/png/,
                    'data:application/octet-stream');
                let dwld = angular.element(document.querySelector('#download'));
                dwld.attr('download', name).attr('href', newData);
            };
        }
})();