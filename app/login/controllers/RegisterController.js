(function(namespace, undefined) {
	'use strict';

	var RegisterController = ['$scope', '$http', '$stateParams',  'cssInjector','$location',
		function($scope, $http, $stateParams, cssInjector, $location) {
			$scope.register = function(){
				alert();
			};			
		}
	];
	angular.module('Login').controller('RegisterCtrl', RegisterController);

})(this);
