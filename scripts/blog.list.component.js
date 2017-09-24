'user strict';

angular.module('customModule')
	.controller('blogListController', function($scope) {
		console.log("Hellowwww from component")
		$scope.title = 'Hi, from scope'
		$scope.onBtnClick = function() {
			alert("Clicked re");
			console.log("Button clicked"),
			$scope.title = "Clicked ;)"
		}
	});