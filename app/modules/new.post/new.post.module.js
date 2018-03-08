angular.module('newPostModule', [])
.directive("newPostComponent", [function () {
	return {
		restrict: "E",
		templateUrl: "modules/new.post/new.post.template.html",
		controller: "newPostCtrl"
	}
}])
.controller("newPostCtrl", ["$scope", function ($scope) {
	
}]);