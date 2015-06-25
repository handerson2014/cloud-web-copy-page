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
