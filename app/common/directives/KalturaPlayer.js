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
