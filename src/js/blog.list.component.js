'use strict';

//005
angular.module('customModule')
	.controller('blogListController', function($scope) {
		console.log("Hellowwww from component")
		$scope.title = 'Hi, from scope'
		$scope.onBtnClick = function() {
			alert("Clicked re");
			console.log("Button clicked")
			$scope.title = "Clicked ;)"
		}
	});	

//006
angular.module('myModule')
	.component('customModule', {
//		template: "<div class=''><h1>{{title}}</h1><button ng-click='onBtnClick()'>Click me!!</button></div>",
//007 External Template
		templateUrl:'js/templates/blog-list.html',
		controller: function($scope) {
//006-2		
		console.log("Page Loaded")
		var blogItems = [
		{title:"Maths", id:1, description:"This is maths book"},
		{title:"Eng", id:2, description:"This is english book"},
		{title:"Gujju", id:3, description:"This is Gujarati book"}
		]
//006-2		
		$scope.items = blogItems;

			$scope.title = 'Hi, from scope'
			$scope.onBtnClick = function() {
				alert("Clicked re");
				console.log("Button clicked")
				$scope.title = "Clicked ;)"
			}
		}
	});
 