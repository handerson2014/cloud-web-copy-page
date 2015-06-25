;(function(namespace, undefined) {
    'use strict';


    var Main = angular.module('Main', ['ui.router']);

    Main.config(function($stateProvider) {

        $stateProvider.state('main', {
            url: '/main/index',
            views: {
                'header': {
                    templateUrl: 'app/main/views/header.html'
                },
                'container':{
                    templateUrl: 'app/main/views/container-main.html'
                },
                'footer':{
                    templateUrl: 'app/main/views/footer.html'
                }
            }
        });
    });

}(this));
