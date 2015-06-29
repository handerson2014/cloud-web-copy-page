(function(namespace, undefined) {
	'use strict';

	var SignInController = ['$scope', '$http', '$stateParams',  'cssInjector','$location', 'GlobalUser', '__Login',
		function($scope, $http, $stateParams, cssInjector, $location, GlobalUser, __Login) {
			
			$scope.user = {
				email: "dddd",
				password: ""
			};

			$scope.signin = function(){
				 __Login.getGlobalLoggedUser({
					'Username': 'handerson.contreras@gmail.com',
					'Password': '123456'});
			};			
		}
	];
	angular.module('Login').controller('SignInCtrl', SignInController);

})(this);