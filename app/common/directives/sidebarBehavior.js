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
