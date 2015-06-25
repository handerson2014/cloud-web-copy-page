;(function(namespace, undefined) {
	'use strict';


	var Shared=angular.module('Shared',['ui.router','angular.css.injector','youtube-embed']);

	Shared.provider('notificationsConfig', function () {
		var config = {};

		this.setHideTimeout = function (hide) {
			config['hideTimeout'] = hide;
		};

		this.$get = function () {
			return {
			};
		};
	});


}(this));
