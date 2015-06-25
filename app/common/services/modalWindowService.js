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
