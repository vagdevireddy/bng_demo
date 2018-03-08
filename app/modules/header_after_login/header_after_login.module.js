var header_after_login_module = angular.module("headerAfterLoginModule", [])
header_after_login_module.directive("headerAfterLoginComponent", [function () {
    return {
        restrict: "E",
        templateUrl: "modules/header_after_login/header_after_login.template.html",
        controller: "headerAfterLoginCtrl"
    }
}])
// controller
header_after_login_module.controller("headerAfterLoginCtrl", ['$scope', function ($scope) {
    // toggle width
    $scope.toggleWidth = function (event) {
        var current = $(event.currentTarget);
        if(current.width() < 160) {
            current.animate({
                width: 300
            }, 100);
        } else {
            current.animate({
                width: 159
            }, 100);
        }
    }
}])