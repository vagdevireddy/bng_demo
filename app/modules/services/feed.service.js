angular.module("feedServiceModule", [])
	.factory("feedService", ['$http', '$q', function($http, $q) {
		return {
			get: function () {
				var def = $q.defer();
				$http({
					url: "https://jsonplaceholder.typicode.com/photos",
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
