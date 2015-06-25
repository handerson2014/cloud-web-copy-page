;(function(namespace, undefined) {
    'use strict';

    namespace.BackOffice = angular.module('BackOffice', ['angular.css.injector', 'smoothScroll', 'Main', 'Shared', 'angulartics', 'angulartics.google.analytics']);
    namespace.Controllers = {};
    namespace.Services = {};
    namespace.Directives = {};

    BackOffice.config(function($stateProvider, $urlRouterProvider, cssInjectorProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        cssInjectorProvider.setSinglePageMode(true);

        $stateProvider.state('error', {
            url: '/error',
            views: {
                'body': {
                    //template: '<body><div id="header"><img src="assets/images/adjusts/logo.png" /><h1>OOPS!</h1><h2>The page you’re looking for isn’t here.</h2></div><div id="content"><a><i class="icon-home"></i>Home Page</a><a href="desktop-errorfeedback.aspx"><i class="icon-envelope-alt"></i>Report a Problem</a></div></body>'
                    templateUrl: '/app/common/views/404.html',
                    controller:function($scope, cssInjector){
                        $.getScript("http://assets.zendesk.com/external/zenbox/v2.6/zenbox.js", function(data, textStatus, jqxhr) {
                            cssInjector.add("//asset0.zendesk.com/external/zenbox/v2.6/zenbox.css");
                        });
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
                    }

                }
            }
        });

        $urlRouterProvider.otherwise('/error');
        $urlRouterProvider.when('', '/main/index');
    });

    BackOffice.config(['$provide', function($provide){
        $provide.decorator('$rootScope', ['$delegate', function($delegate){

            Object.defineProperty($delegate.constructor.prototype, '$onRootScope', {
                value: function(name, listener){
                    var unsubscribe = $delegate.$on(name, listener);
                    this.$on('$destroy', unsubscribe);

                    return unsubscribe;
                },
                enumerable: false
            });


            return $delegate;
        }]);
    }]);


    BackOffice.filter('iif', function() {
        return function(input, trueValue, falseValue) {
            return input ? trueValue : falseValue;
        };
    });

    BackOffice.value('GlobalUser', {
        logged: false,
        name: "",
        email: "",
        numericalId: "",
        university: ""
    });

    var config;

        // URL DOMAINS
        if (location.host === "global2.laureate.net" || location.host==="www.global2.laureate.net") {
            //prod
            config = {
                apiURL: 'https://qa-dot-api-dot-qa-liugateway.appspot.com/_ah/api',
                //apiURL: 'https://master-dot-api-dot-liugateway.appspot.com/_ah/api',
                mandrillKey: 'Yr4uE3q0pAV6J8lqFlCigQ'
            };
        } else if (location.host === "qa-liugateway.appspot.com" || location.host==="www.qa-liugateway.appspot.com") {
            //ssi
            config = {
                 apiURL: 'https://qa-dot-api-dot-qa-liugateway.appspot.com/_ah/api',
                 //apiURL: 'https://master-dot-api-dot-liugateway.appspot.com/_ah/api',
                 mandrillKey: 'jOPSbaFk5N9Z8FfHTApgjQ'
             };
        } else {
            //dev
            config = {
                 //apiURL: 'http://localhost:8080/_ah/api',
                 apiURL: 'https://qa-dot-api-dot-qa-liugateway.appspot.com/_ah/api',
                 //apiURL: 'https://master-dot-api-dot-liugateway.appspot.com/_ah/api',
                 mandrillKey: 'jOPSbaFk5N9Z8FfHTApgjQ'
            };
        }

        config.deploy_current_version = "1.0";
        config.apiEndPointGlobal = 'global';
        config.apiVersion = 'v1';

    BackOffice.value('GlobalSettings',config);

    BackOffice.run(function(__browserDetect) {
        //alert(__browserDetect.isValid());
    });

    BackOffice.controller(Controllers);
    // GlobalPortal.factory(Factories);

}(this));
