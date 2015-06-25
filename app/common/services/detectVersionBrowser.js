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
