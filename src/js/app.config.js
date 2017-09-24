//006
/*'use strict';

angular.module('customModule')
	.config(function() {});*/

'use strict';

// 008 
angular.module('customModule')
	.config( function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode({
			enabled:true,
			requireBase: false
		})


		$routeProvider
			.when("/blog/1", {
				template: "<h1>Hiiiiiiiiiiiii</h1>"
			}).when("/", {
				template: "<custom-module></custom-module>"
			//008-02
			}).when("/about", {
				template: "about.html"
			}).when("/blog/2", {
				template: "Not Found"
			}).otherwise({
				template: "<custom-module></custom-module>"
			})
	});