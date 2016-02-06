(function(app) {
	app.service('workshop.core.apiService', [
		'$http',
		function($http) {
			var service = {};

			var BASE_URL = 'http://jsonplaceholder.typicode.com';

			service.getPosts = function() {
				return $http.get(BASE_URL + '/posts').then(function(res) {
					if (res.status === 200) {
						return res.data;
					}
				});
			};

			service.getPostComments = function(postId) {
				return $http.get(BASE_URL + '/posts/' + postId + '/comments').then(function(res) {
					if (res.status === 200) {
						return res.data;
					}
				});
			};

			return service;
		}
	]);
})(angular.module('angular-workshop'));