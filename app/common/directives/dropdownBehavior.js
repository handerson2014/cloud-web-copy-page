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
