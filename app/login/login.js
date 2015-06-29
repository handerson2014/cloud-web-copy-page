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