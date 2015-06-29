;(function(namespace, undefined) {
    'use strict';

    namespace.BackOffice = angular.module('BackOffice', ['angular.css.injector', 'smoothScroll', 'Main', 'Shared', 'Login','angulartics', 'angulartics.google.analytics']);
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
        $urlRouterProvider.when('', '/login/signin');
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
        name: "",
        email: ""
    });

    var config;

        // URL DOMAINS
        if (location.host === "global2.laureate.net" || location.host==="www.global2.laureate.net") {
            //prod
            config = {
                apiURL: 'https://qa-dot-api-dot-qa-liugateway.appspot.com/_ah/api'                
            };
        } else if (location.host === "qa-liugateway.appspot.com" || location.host==="www.qa-liugateway.appspot.com") {
            //ssi
            config = {
                 apiURL: 'https://qa-dot-api-dot-qa-liugateway.appspot.com/_ah/api'                 
             };
        } else {
            //dev
            config = {                 
                apiURL: 'http://yaxstudio.host56.com/ccp'                 
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

;(function(namespace, undefined) {
	'use strict';


	var Shared=angular.module('Shared',['ui.router','angular.css.injector','youtube-embed']);

	Shared.provider('notificationsConfig', function () {
		var config = {};

		this.setHideTimeout = function (hide) {
			config['hideTimeout'] = hide;
		};

		this.$get = function () {
			return {
			};
		};
	});


}(this));

;(function(namespace, undefined) {
    'use strict';


    var Login = angular.module('Login', ['ui.router']);

    Login.config(function($stateProvider) {

        $stateProvider.state('login', {
            url: '/login',
            views: {
                'header': {
                    templateUrl: 'app/common/views/header.html'
                },
                'container':{
                    templateUrl: 'app/login/views/container-main.html'
                },
                'footer':{
                    templateUrl: 'app/common/views/footer.html'
                }
            }
        });

        $stateProvider.state('login.signin', {
            url: '/signin',
            views: {                
                'container-inside':{
                    templateUrl: 'app/login/views/signin.html',
                    controller: 'SignInCtrl'
                },
                'footer':{
                    templateUrl: 'app/common/views/footer.html'
                }
            }
        });

        $stateProvider.state('login.register', {
            url: '/register',
            views: {                
                'container-inside':{
                    templateUrl: 'app/login/views/register.html',
                    controller: 'RegisterCtrl'
                },
                'footer':{
                    templateUrl: 'app/common/views/footer.html'
                }
            }
        });
    });

}(this));
;(function(namespace, undefined) {
    'use strict';


    var Main = angular.module('Main', ['ui.router']);

    Main.config(function($stateProvider) {

        $stateProvider.state('main', {
            url: '/main',
            views: {
                'header': {
                    templateUrl: 'app/common/views/header.html'
                },
                'container':{
                    templateUrl: 'app/main/views/container-main.html'
                },
                'footer':{
                    templateUrl: 'app/common/views/footer.html'
                }
            }
        });        

        $stateProvider.state('main.index', {
            url: '/index',
            views: {                
                'container-inside':{
                    templateUrl: 'app/main/views/textboxes.html'
                },
                'footer':{
                    templateUrl: 'app/common/views/footer.html'
                }
            }
        });
    });

}(this));

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

(function(namespace, undefined) {
	'use strict';

	var SidebarController = ['$scope', '$http', '$stateParams',  'cssInjector','$location',
		function($scope, $http, $stateParams, cssInjector, $location) {

			//Sidebar functions



		}
	];
	angular.module('Shared').controller('SidebarCtrl', SidebarController);

})(this);

;(function(namespace, undefined) {
    'use strict';

    var videoDirective=[function(){

        var playVideoKaltura=function(element,kalturaId,autoPlay){
            var EnableFullscreen = 'true';
            if (  navigator.userAgent.toLowerCase().match(/android/ ) !== null && navigator.userAgent.toLowerCase().match(/chrome/ ) !== null ) {
                EnableFullscreen = 'false';
            }
            kWidget.embed({
                "targetId": element,
                "cache_st": "1368054178",
                "wid": "_1320581",
                "uiconf_id": "24231962",
                "entry_id": kalturaId,
                "allowNetworking": "all",
                "allowScriptAccess": "always",
                'flashvars': {
                    "streamerType": "auto",
                    'mediaProxy.preferedFlavorBR': 360,
                    'autoPlay': true,
                    'EmbedPlayer.EnableIpadHTMLControls': false,
                    'EnableIpadNativeFullscreen': true,
                    'LeadWithHTML5': 'true',
                    'FullScreenZIndex' : 0,
                    'forceMobileHTML5': 'true',
                    'ForceFlashOnDesktop': 'false',
                    'EmbedPlayer.EnableFullscreen': EnableFullscreen
                },
                "params":{
                    'externalInterfaceDisabled': false
                },
                'readyCallBack': function(objectId) {
                    var kdp = document.getElementById(objectId);
                    kdp.addJsListener("doStop", "showOverlay");
                    kdp.click();

                }
            });

            if(autoPlay){
           //    $('#'+element+'>div>div').click();
            }
        };

        var playVideoYoutube=function (element,src,width,height){
            var videoContainer = $(element);
            var iframe = '<iframe src="' + src + '?enablejsapi=1" frameborder="0" allowfullscreen width="' + width + '" height="' + height + '"></iframe>';
            videoContainer.html(iframe);
            videoContainer.find('iframe').load(function () {
                this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            });
        };

        var linker=function(scope,element,attrs){
            var element_targetId=scope.videoContainer;
            console.log("scopeevid",scope);
            if(scope.videoContainer===""||scope.videoContainer===undefined){
                $(element).attr("id",scope.videoId);
                element_targetId=scope.videoId;
            }
            element.bind('click',function (){
                if(scope.kalturaId===undefined||scope.videoType==='youtube'){
                    var video_container=(scope.videoContainer===undefined)?element:$('#'+scope.videoContainer);
                    playVideoYoutube(video_container,scope.videoSource,scope.width,scope.height);
                }else{
                    var kaltura_loaded=(typeof kWidget!=='undefined');
                    if(kaltura_loaded){
                        playVideoKaltura(element_targetId,scope.kalturaId,scope.autoPlay);
                    }else{
                        $.getScript('/libs/kalturaPlayer.js').then(function(){
                            playVideoKaltura(element_targetId,scope.kalturaId,scope.autoPlay);
                        });
                    }
                }
            });
            if(scope.autoPlay){
                $(element).click();
            }

        };

        return{
            restrict:'A',
            scope:{
                'videoSource':'@',
                'videoContainer':'@',
                'videoType': '@',
                'kalturaId':'@',
                'videoId':'@',
                'autoPlay':'@',
                'width': '@',
                'height': '@'
            },
            link:linker
        };
    }];

    angular.module('Shared').directive('gpVideo',videoDirective);
}(this));

(function(namespace, undefined) {
    'use strict';
    BackOffice.directive('toggleDropdown', [function() {

        return {
            restrict: 'A',
            link: function(scope, $elm, attr) {
                $elm.on("click", function() {
                    if ($elm.hasClass("nav-dropdown-is-open")) {
                        $elm.removeClass("nav-dropdown-is-open");
                    } else {
                       $elm.addClass("nav-dropdown-is-open");
                    }

                });
            }
        };

    }]);


    BackOffice.directive('closeDropdown', [function() {

        return {
            restrict: 'A',
            link: function(scope, $elm, attr) {
                $elm.on("click", function() {
                    if ($elm.hasClass("nav-dropdown-is-open")) {
                        $elm.removeClass("nav-dropdown-is-open");
                    }
                });
            }
        };

    }]);

})(this);

BackOffice.filter('FilterByType', function() {
    return function(items, filterValue, ammount) {
        var filtered = [];
        if (typeof items !== "undefined") {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                //console.log(item);
                if (filterValue.indexOf(item.type.keyname) !== -1) {
                    filtered.push(item);
                }
            }
        }
        return filtered.slice(0, ammount);
    };
});


BackOffice.filter('TrimQuote', function() {
    return function(quote) {
        if (typeof quote !== "undefined") {
            return quote.substring(0, 100) + "...";
        }
    };
});

(function(namespace, undefined) {
    'use strict';

    BackOffice.directive('modalContainer', function($timeout,$compile) {
        return {
            restrict: 'EA',
            /*jshint multistr: true */
            templateUrl: '/app/common/views/modal-window.html',
            scope: true,
            link: function(scope) {

                scope.modalOptions = {};
                var defaultModalOptions = {
                    closeButtonText: 'Close',
                    headerText1: 'Signature',
                    headerText2: 'Products',
                    contentType: 'Video',
                    VideoProvider: 'youtube',
                    VideoId: 'ix932j4',
                    BodyContent: 'This is a modal window'
                };

                scope.playerVars = {
                    autoplay: 1
                };

                var closeModalWindow = function() {
                    var timerHide = $timeout(function() {
                        $('.modal').removeClass('modal--is-open');
                        $timeout.cancel(timerHide);
                    }, 100);
                    scope.modalOptions = null;
                };

                var modalWindowVideoHandler = function(event, data) {
                    var message, hide, title;
                    console.debug(data);
                    if (typeof data === 'object') {
                       //("set modal window data");
                        scope.modalOptions = data;
                    } else {
                        scope.modalOptions = defaultModalOptions;
                    }
                    if(scope.modalOptions.VideoProvider ==='kaltura'){
                        $('.video-container').prepend(
                        $compile('<div video-id="kalturaModal" style="width:100%;height:100%" gp-video video-type="kaltura" kaltura-id="{{modalOptions.VideoId}}" auto-play="false"></div>')(scope));

                         //fix for second time opening, embedded div needs a click (kaltura sux)
                         $timeout(function(){$('#kalturaModal').click();}) ;
                         //endfix
                    }else{
                        $('.video-container').prepend(
                        $compile(' <youtube-video ng-if="modalOptions.VideoProvider === \'youtube\'"" player="youtubePlayer"\
                                    video-id="modalOptions.VideoId" player-width="\'100%\'" player-height="\'100%\'"\
                                    player-vars="playerVars"></youtube-video>')(scope));
                    }

                    //show animation
                    var timerShow = $timeout(function() {
                        // TODO: apply the animation
                        $('.modal').addClass('modal--is-open');
                        $timeout.cancel(timerShow);
                    }, 150);
                };

                var modalWindowTextHandler = function(event, data){
                    if (typeof data === 'object') {
                       //("set modal window data");
                        scope.modalOptions = data;
                    } else {
                        scope.modalOptions = defaultModalOptions;
                    }

                    //show animation
                    var timerShow = $timeout(function() {
                        // TODO: apply the animation
                        $('.modal').addClass('modal--is-open');
                        $timeout.cancel(timerShow);
                    }, 150);
                };

                scope.stopVideos =function() {
                    ////("STOPP THE VIDEOOSS");
                    if (typeof kWidget !== "undefined" ) {
                        kWidget.destroy('kalturaModal');
                    }
                    $('.video-container').empty();
                };

                scope.$on('modal:open-video', function(event, data) {
                    modalWindowVideoHandler(event, data);
                });
                scope.$on('modal:open-text', function(event, data) {
                    modalWindowTextHandler(event, data);
                });

                scope.close = function() {
                    closeModalWindow();
                };
            }
        };
    });
}(this));

(function(namespace, undefined) {
    'use strict';

    BackOffice.directive('notificationsBar', function(notificationsConfig, $timeout) {
        return {
            restrict: 'EA',
            /*jshint multistr: true */
            template: '\
            <div ng-if="notifications.length">\
                <div class="alert alert-{{note.type}}" ng-repeat="note in notifications">\
                  <i class="alert-icon icon-check-bold"></i>\
                    <div class="alert-message">\
                        <h3>{{note.title}}</h3>\
                        <p>{{note.message}}</p>\
                    </div>\
                  <a class="alert-close" ng-click="close($index)"><i class="icon-close"></i></a>\
                </div>\
            </div>\
			',

            link: function(scope) {
                var notifications = scope.notifications = [];
                var timers = [];
                var defaultTimeout = 4000;

                var removeById = function(id) {
                    var found = -1;

                    notifications.forEach(function(el, index) {
                        if (el.id === id) {
                            found = index;
                        }
                    });

                    if (found >= 0) {

                        notifications.splice(found, 1);
                    }
                };

                var notificationHandler = function(event, data, type) {
                    var message, hide, title;


                    if (typeof data === 'object') {
                        title = data.title;
                        message = data.message;
                        hide = data.hide;
                    } else {
                        message = data;
                    }

                    var id = 'notif_' + (Math.floor(Math.random() * 100));
                    notifications.push({
                        id: id,
                        type: type,
                        message: message,
                        title: title
                    });
                    //show animation
                    var timerShow = $timeout(function() {
                        // TODO: apply the animation
                        $('.alert').addClass('is-active');
                        $timeout.cancel(timerShow);
                    }, 150);

                    if (hide) {
                        var timer = $timeout(function() {
                            //hide animation:
                            var timerHide = $timeout(function() {
                                $('.alert').addClass('is-active');
                                $timeout.cancel(timerHide);
                            }, 100);

                            $('.alert').removeClass('is-active');
                            removeById(id);

                            $timeout.cancel(timer);
                        }, defaultTimeout);
                    }
                };

                scope.$on('notifications:error', function(event, data) {
                    notificationHandler(event, data, 'error');
                });

                scope.$on('notifications:warning', function(event, data) {
                    notificationHandler(event, data, 'warning');
                });

                scope.$on('notifications:success', function(event, data) {
                    notificationHandler(event, data, 'success');
                });

                scope.close = function(index) {
                    notifications.splice(index, 1);
                };
            }
        };
    });
}(this));

(function(namespace, undefined) {
    'use strict';
    BackOffice.directive('errSrc', [function() {

        return {
            link: function(scope, element, attrs) {

                scope.$watch(function() {
                    return attrs['ngSrc'];
                }, function(value) {
                    if (!value) {
                        element.attr('src', attrs.errSrc);
                    }
                });

                element.bind('error', function() {
                   element.attr('src', attrs.errSrc);
                });
            }
        };

    }]);



})(this);

(function(namespace, undefined) {
    'use strict';
    BackOffice.directive("stickyHeader", function($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {

                var distanceY = $window.pageYOffset;

                var shrinkOn = $window.innerHeight - element[0].offsetHeight;
                if (element.hasClass("smaller")) {
                    shrinkOn -= 60;
                }
                if (distanceY > shrinkOn) {
                    element.addClass("smaller");
                } else {
                    element.removeClass("smaller");
                }
                scope.$apply();
            });
        };
    });

    BackOffice.directive("blurrySection", function($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {

                var distanceY = $window.pageYOffset;
                var shrinkOn = $window.innerHeight - (element[0].offsetHeight / 2);

                if (distanceY > shrinkOn) {
                    element.addClass("blur");
                } else {
                    element.removeClass("blur");
                }
                scope.$apply();
            });
        };
    });

    BackOffice.directive('loadMore', function($window) {
        return function(scope, elm, attr) {
          angular.element($window).bind('scroll', function() {
                var distanceY = $window.pageYOffset;
                var documentHeight = $(document).height();
                var innerHeight =  $window.innerHeight;
                var headersHeight = 0;
                var foldersHeight = $('.block-folder-container').height();
                $('header').each(function() {
                    headersHeight += ($(this).height());
                });

                if (distanceY + innerHeight >= documentHeight-10) {
                    scope.$apply(attr.loadMore);
                }
            });
        };
    });

    BackOffice.directive('scrollTop', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    $(window).scrollTop(0);

                });
            }
        };
    });


})(this);

(function(namespace, undefined) {
    'use strict';
    BackOffice.directive('toggleSidebar', [function() {

        return {
            restrict: 'A',
            link: function(scope, $elm, attr) {
                $elm.on("click", function() {
                    if ($("body").hasClass("explore-the-portal-is-open")) {
                        $("body").removeClass("explore-the-portal-is-open");
                    } else {
                        $("body").addClass("explore-the-portal-is-open");
                    }

                });
            }
        };

    }]);

     BackOffice.directive('closeSidebar', [function() {

        return {
            restrict: 'A',
            link: function(scope, $elm, attr) {
                $elm.on("click", function() {
                        $("body").removeClass("explore-the-portal-is-open");
                });
            }
        };

    }]);



})(this);

;(function(namespace, undefined) {
    'use strict';

    var browserDetect = ['$http', '$location',
        function($http, $location) {
            var detectorService = {
                isValid: function(){
                    var versions = {
                        'firefox': {'keyname':'firefox', 'minVersion': '33'},
                        'webkit': {'keyname':'webkit', 'minVersion': '33'},
                        'msie': {'keyname':'msie', 'minVersion': '33'},
                        'safari': {'keyname':'safari', 'minVersion': '33'},
                        'chrome': {'keyname':'chrome', 'minVersion': '39'},
                        'opera': {'keyname':'opera', 'minVersion': '33'}
                    };
                    /*if(namespace.bowser.firefox){
                        return true;
                    }else*/ if(namespace.bowser.msie){
                        return true;
                    }else if(namespace.bowser.safari){
                        return true;
                    }else if(namespace.bowser.chrome){

                        if(namespace.bowser.version <= versions['chrome'].minVersion){
                            //redirect to oldbrowser
                            return true;
                        }else{
                            $location.path('/oldbrowser');
                        }
                    }else{
                        $location.path('/oldbrowser');
                    }


                }
            };
            //console.debug(bowser.version);
            return detectorService;
        }
    ];
    angular.module('Shared').service('__browserDetect', browserDetect);

}(this));

;(function(namespace, undefined) {
	'use strict';

	var EmailServices = ['$http','GlobalSettings',
		function($http, GlobalSettings, transformRequestAsFormPost ) {
			var MandrillEmailServices = {
				sendEmail: function(from, to, subject, type, content, autotextEnabled, trackOpensEnabled, trackClicksEnabled) {
					var m = new mandrill.Mandrill(GlobalSettings.mandrillKey);

					var params = {
						'message': ''
					};
					params.message = {
						from_email: from,
						to: [],
						subject: subject,
						autotext: autotextEnabled,
						track_opens: trackOpensEnabled,
						track_clicks: trackClicksEnabled
					};
					if (type === "html") {
						params.message.text = content;
					} else {
						params.message.html = content; //$sanitize(content);
					}
					angular.forEach(to, function(person, key) {
						params.message.to.push({
							email: person
						});

					});

					m.messages.send(params, function(res) {
						//console.log(res);
						return true;
					}, function(err) {
						return false;
					});
				},
				sendEmailFromTemplate: function(from, to, subject, templatename, tags, autotextEnabled, trackOpensEnabled, trackClicksEnabled, success, error) {
					var m = new mandrill.Mandrill(GlobalSettings.mandrillKey);

					var params = {
						'message': '',
						'template_name': templatename,
						'template_content': []
					};
					params.message = {
						from_email: from,
						to: [],
						subject: subject,
						autotext: autotextEnabled,
						track_opens: trackOpensEnabled,
						track_clicks: trackClicksEnabled,
						merge_vars: []
					};


					angular.forEach(to, function(person, key) {
						params.message.to.push({
							email: person
						});
						params.message.merge_vars.push({
							rcpt:person,
							vars:tags
						});

					});

                    var extra_params = {'auto_text': autotextEnabled, 'track_opens': trackOpensEnabled, 'track_clicks': trackClicksEnabled};
                    var data = {'sender': from, 'sender_name': 'Signature Products Portal', 'to': params.message.to, 'template': templatename, 'subject': subject, 'merge_vars': params.message.merge_vars, 'extra_params': extra_params};
                    var data_json =JSON.stringify(data);

                    //send mails api
                    var post = {
                        method: 'POST',
                        url: GlobalSettings.apiURL + '/' + GlobalSettings.apiEndPointGlobal + '/' + GlobalSettings.apiVersion + '/global_emails/emails',
                        data: data_json,
                        contentType : "application/json",
                        dataType: 'json'
                    };

                    return $http(post);
				}
			};
			return MandrillEmailServices;
		}
	];
	angular.module('Shared').service('__Email', EmailServices);

}(this));

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

;(function(namespace, undefined) {
  'use strict';

  var ModalWindowFactory = ['$rootScope', function ($rootScope) {
        var showModalOverlay = function (data) {
            switch(data.contentType){
                case 'Video':
                    $rootScope.$broadcast('modal:open-video', data);
                    break;
                case 'Text':
                    $rootScope.$broadcast('modal:open-text', data);
                    break;
            }
        };

        return {
            showModalOverlay: showModalOverlay
        };
    }
  ];
  angular.module('Shared').service('__ModalWindow', ModalWindowFactory);

}(this));

;(function(namespace, undefined) {
  'use strict';

  var NotificationsFactory = ['$rootScope', function ($rootScope) {
		var showError = function (message) {
			$rootScope.$broadcast('notifications:error', message);
		};

		var showWarning = function (message) {
			$rootScope.$broadcast('notifications:warning', message);
		};

		var showSuccess = function (message) {
			$rootScope.$broadcast('notifications:success', message);
		};

		return {
			showError: showError,
			showWarning: showWarning,
			showSuccess: showSuccess
		};
	}
  ];
  angular.module('Shared').service('__Notifications', NotificationsFactory);

}(this));

(function(namespace, undefined) {
	'use strict';

	var RegisterController = ['$scope', '$http', '$stateParams',  'cssInjector','$location',
		function($scope, $http, $stateParams, cssInjector, $location) {
			$scope.register = function(){
				alert();
			};			
		}
	];
	angular.module('Login').controller('RegisterCtrl', RegisterController);

})(this);

(function(namespace, undefined) {
	'use strict';

	var SignInController = ['$scope', '$http', '$stateParams',  'cssInjector','$location', 'GlobalUser', '__Login',
		function($scope, $http, $stateParams, cssInjector, $location, GlobalUser, __Login) {
			
			$scope.user = {
				email: "dddd",
				password: ""
			};

			$scope.signin = function(){
				 __Login.getGlobalLoggedUser({
					'Username': 'handerson.contreras@gmail.com',
					'Password': '123456'});
			};			
		}
	];
	angular.module('Login').controller('SignInCtrl', SignInController);

})(this);
;(function(namespace, undefined) {
    'use strict';

    var GlobalPortalServices = ['$http', 'GlobalUser', 'GlobalSettings','$rootScope', '$location','$timeout',

        function($http, GlobalUser, GlobalSettings, $rootScope, $location,$timeout) {
            var GPservices = {
                getGlobalLoggedUser: function(params) {                    
                    var loggedUser = $http({
                        'method': 'POST',
                        'async': true,                        
                        'url': GlobalSettings.apiURL + '/CCPLoginWS.php'
                    });

                    return loggedUser;
                },
                setLoginData: function(params) {
                    var self = this;
                    var userinfo = self.getGlobalLoggedUser();

                    userinfo.then(function(response) {
                        console.log(response);
                        if (response.data.email === "") {
                            GlobalUser.logged = false;
                        } else {
                            GlobalUser.logged = true;
                        }
                        
                        GlobalUser.email = response.data.email;                                               

                        $timeout(function() {
                            $rootScope.$emit('Global.UserLogin', response.data.email);
                        });

                    });
                }
            };
            return GPservices;
        }
    ];
    angular.module('Login').service('__Login', GlobalPortalServices);

}(this));
