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
