'user strict';

/*angular.module('customModule')
	.controller('blogListController', function($scope) {
		console.log("Hellowwww from component")
		$scope.title = 'Hi, from scope'
		$scope.onBtnClick = function() {
			alert("Clicked re");
			console.log("Button clicked")
			$scope.title = "Clicked ;)"
		}
	});	
*/
angular.module('myModule')
	.component('customModule', {
//		template: "<div class=''><h1>{{title}}</h1><button ng-click='onBtnClick()'>Click me!!</button></div>",
		templateUrl:'scripts/templates/blog-list.html',
		controller: function($scope) {
			$scope.title = 'Hi, from scope'
			$scope.onBtnClick = function() {
				alert("Clicked re");
				console.log("Button clicked")
				$scope.title = "Clicked ;)"
			}
		}
	});
 