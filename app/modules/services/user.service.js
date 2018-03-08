angular.module("userServiceModule", [])
	.factory("userService", ['$http', '$q', function($http, $q) {
		return {
			get: function () {
				var def = $q.defer();
				$http({
					url: "https://jsonplaceholder.typicode.com/users/1",
					method: "GET"
				}).then(function (data) {
					def.resolve(data.data);
				}, function (error) {
					def.reject(error.data);
				});
				return def.promise;
			}
		}
	}]);