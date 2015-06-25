(function(namespace, undefined) {
    'use strict';

    var HeaderController = ['$scope', '$http', '$stateParams', 'GlobalUser', 'cssInjector', '$rootScope', '$location',
        function($scope, $http, $stateParams, GlobalUser, cssInjector, $rootScope, $location) {

            //cssInjector.add("/assets/css/main.css");


            //var loggedUser = __GlobalPortal.getGlobalLoggedUser();
            $.getScript("http://assets.zendesk.com/external/zenbox/v2.6/zenbox.js", function(data, textStatus, jqxhr) {
                cssInjector.add("//asset0.zendesk.com/external/zenbox/v2.6/zenbox.css");
            });

            $scope.user = GlobalUser;
            $scope.loginRedirectKey = "";


            var routeParts = $location.path().split("/");
            var locationKey = routeParts[routeParts.length - 1];
            if(locationKey==='resources' || locationKey ==='testimonials' || locationKey==='catalog'){
                locationKey = routeParts[routeParts.length - 2];
            }

            $scope.loginRedirectKey = locationKey;

            console.log("location:" + locationKey);
            $scope.OpenZendeskWindow = function() {
                /*Zenbox.init({
                    dropboxID: "20077772",
                    url: "https://laureatesupport.zendesk.com",
                    tabTooltip: "Support",
                    tabID: "Support",
                    tabImageURL: "https://assets.zendesk.com/external/zenbox/images/tab_es_support.png",
                    tabColor: "black",
                    tabPosition: "Left",
                    hide_tab: "true"
                });*/
                //Remove zenbox element if they already exist:
                $("#zenbox_tab").remove();
                $("#zenbox_overlay").remove();
                Zenbox.init({
                    dropboxID: "20089174",
                    url: "https://laureatesupport.zendesk.com",
                    tabTooltip: "Soporte",
                    tabID: "Support",
                    tabImageURL: "https://assets.zendesk.com/external/zenbox/images/tab_es_support.png",
                    tabColor: "black",
                    tabPosition: "Left",
                    hide_tab: "true"
                });
                Zenbox.show();

            };

            $scope.doTheBack = function() {
                window.history.back();
            };

        }
    ];
    angular.module('Shared').controller('HeaderCtrl', HeaderController);

})(this);
