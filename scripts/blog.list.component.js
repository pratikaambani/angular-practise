'user strict';

angular.module('customModule')
	.controller('blogListController', function($scope) {
		console.log("Hellowwww from component ;)");
		$scope.title = "Hi, from scope"
	});