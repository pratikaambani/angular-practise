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
			.when("src/1", {
				template: "<h1>Hiiiiiiiiiiiii</h1>"
			}).when("/src/1", {
				template: "<custom-module></custom-module>"
			//008-02
			}).when("/1", {
				template: "about.html"
			}).when("1", {
				template: "Not Found"
			}).otherwise({
				template: "<custom-module></custom-module>"
			})
	});