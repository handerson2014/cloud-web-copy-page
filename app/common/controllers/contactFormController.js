(function(namespace, undefined) {
    'use strict';

    var ContactFormController = ['$scope', '$attrs','$http','$location', '$stateParams', '__GlobalPortal', '__Email', '__Notifications',
        function($scope, $attrs, $http, $location,$stateParams, __GlobalPortal, __Email, __Notifications) {


            $scope.submitButtonDisabled = false;
            $scope.sender = $attrs.sender;
            $scope.subject = $attrs.subject;
            $scope.program= $attrs.program;
            $scope.template = $attrs.template;
            var currentEnv =$location.host();

            if(currentEnv==="global2.laureate.net"){
                //prod environment
                $scope.admins = $attrs.admins.split(",");
            }else if (currentEnv==="qa-liugateway.appspot.com"){
                //qa environment
                 $scope.admins = $attrs.qaadmins.split(",");
            }else{
                //local/dev environment
                 $scope.admins = $attrs.devadmins.split(",");
            }

            $scope.resetForm = function(form){
                //console.log("reset",form);
                $scope.email="";
                $scope.name="";
                $scope.yourmessage="";
                form.$setPristine();
            };

            $scope.sendEmailFromTemplate = function(name, personemail, yourmessage, form) {

                //console.log(form);
               // console.log(name, personemail,yourmessage);
                var tags = [];
                tags.push({
                    'name': 'NAME',
                    'content': name
                });
                tags.push({
                    'name': 'PERSONEMAIL',
                    'content':personemail
                });
                tags.push({
                    'name': 'MESSAGE',
                    'content':yourmessage
                });
                 tags.push({
                    'name': 'PROGRAM',
                    'content':$scope.program
                });

                form.$setPristine();

                var email_state = __Email.sendEmailFromTemplate($scope.sender, $scope.admins, $scope.subject, $scope.template, tags, false, false, false);

                email_state.success(function() {
                    __Notifications.showSuccess({
                        title:'Your message was sent successfully.',
                        message: "Thank You! Your message has been sent and we will be in touch with you as soon as possible.",
                        hide: true
                    });
                }).error(function(){
                    __Notifications.showWarning({
                        title:"Your message wasn't sent.",
                        message: "Sorry! Your message hasn't been sent. Report it in the support section.",
                        hide: true
                    });
                });
            };
        }
    ];

    angular.module('Shared').controller('ContactFormController', ContactFormController);

})(this);
