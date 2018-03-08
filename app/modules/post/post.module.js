angular.module("postModule", [])
	.directive("postComponent", [function () {
		return {
			restrict: "E",
			scope: {
				feed: "="
			},
			templateUrl: "modules/post/post.template.html",
			controller: "postCtrl"
		}
	}])
	.controller("postCtrl", ["$scope", function ($scope) {
		
	}])