//006
/*'use strict';

angular.module('customModule')
	.config(function() {});*/

'use strict';

// 008 
angular.module('customModule')
	.config( function($routeProvider, $locationProvider) {
		$routeProvider
			.when("/blog/1", {
				template: "<h1>Hiiiiiiiiiiiii</h1>"
			}).when("/blog/2", {
				template: "Not Found"
			}).otherwise({
				template: "<custom-module></custom-module>"
			})
	});