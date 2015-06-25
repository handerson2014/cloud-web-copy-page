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
