;(function(namespace, undefined) {
	'use strict';

	var EmailServices = ['$http','GlobalSettings',
		function($http, GlobalSettings, transformRequestAsFormPost ) {
			var MandrillEmailServices = {
				sendEmail: function(from, to, subject, type, content, autotextEnabled, trackOpensEnabled, trackClicksEnabled) {
					var m = new mandrill.Mandrill(GlobalSettings.mandrillKey);

					var params = {
						'message': ''
					};
					params.message = {
						from_email: from,
						to: [],
						subject: subject,
						autotext: autotextEnabled,
						track_opens: trackOpensEnabled,
						track_clicks: trackClicksEnabled
					};
					if (type === "html") {
						params.message.text = content;
					} else {
						params.message.html = content; //$sanitize(content);
					}
					angular.forEach(to, function(person, key) {
						params.message.to.push({
							email: person
						});

					});

					m.messages.send(params, function(res) {
						//console.log(res);
						return true;
					}, function(err) {
						return false;
					});
				},
				sendEmailFromTemplate: function(from, to, subject, templatename, tags, autotextEnabled, trackOpensEnabled, trackClicksEnabled, success, error) {
					var m = new mandrill.Mandrill(GlobalSettings.mandrillKey);

					var params = {
						'message': '',
						'template_name': templatename,
						'template_content': []
					};
					params.message = {
						from_email: from,
						to: [],
						subject: subject,
						autotext: autotextEnabled,
						track_opens: trackOpensEnabled,
						track_clicks: trackClicksEnabled,
						merge_vars: []
					};


					angular.forEach(to, function(person, key) {
						params.message.to.push({
							email: person
						});
						params.message.merge_vars.push({
							rcpt:person,
							vars:tags
						});

					});

                    var extra_params = {'auto_text': autotextEnabled, 'track_opens': trackOpensEnabled, 'track_clicks': trackClicksEnabled};
                    var data = {'sender': from, 'sender_name': 'Signature Products Portal', 'to': params.message.to, 'template': templatename, 'subject': subject, 'merge_vars': params.message.merge_vars, 'extra_params': extra_params};
                    var data_json =JSON.stringify(data);

                    //send mails api
                    var post = {
                        method: 'POST',
                        url: GlobalSettings.apiURL + '/' + GlobalSettings.apiEndPointGlobal + '/' + GlobalSettings.apiVersion + '/global_emails/emails',
                        data: data_json,
                        contentType : "application/json",
                        dataType: 'json'
                    };

                    return $http(post);
				}
			};
			return MandrillEmailServices;
		}
	];
	angular.module('Shared').service('__Email', EmailServices);

}(this));
