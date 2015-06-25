;(function(namespace, undefined) {
    'use strict';

    var GlobalPortalServices = ['$http', 'GlobalUser', '$rootScope', '$location','$timeout',

        function($http, GlobalUser, $rootScope, $location,$timeout) {
            var GPservices = {
                getGlobalLoggedUser: function(params) {
                    var currentEnv = $location.host();
                    var baseurl="localhost";

                    if (currentEnv === "global2.laureate.net") {
                        //prod environment
                       baseurl="http://global.laureate.net";
                    } else if (currentEnv === "qa-liugateway.appspot.com") {
                        //qa environment
                        baseurl="http://global.laureate.net";
                    } else {
                        //local/dev environment
                        baseurl="http://global.laureate.net";
                    }

                    var loggedUser = $http({
                        'method': 'JSONP',
                        'async': true,
                        //'withCredentials': true,
                        'url': baseurl+'/_vti_bin/wcfGetActions/Service.svc/GetUserInformationCrossDomain?callback=JSON_CALLBACK'
                    });

                    return loggedUser;
                },

                setLoginData: function(params) {
                    var self = this;
                    var userinfo = self.getGlobalLoggedUser();

                    userinfo.then(function(response) {
                        console.log(response);
                        if (response.data.name === "") {
                            GlobalUser.logged = false;
                        } else {
                            GlobalUser.logged = true;
                        }

                        GlobalUser.numericalId = response.data.numericalId;
                        GlobalUser.email = response.data.email;
                        GlobalUser.name = response.data.name;
                        GlobalUser.university = response.data.university;

                        $timeout(function() {
                            $rootScope.$emit('Global.UserLogin', response.data.email);
                        });

                    });

                }
            };
            return GPservices;
        }
    ];
    angular.module('Shared').service('__GlobalPortal', GlobalPortalServices);

}(this));
