(function(app) {
	app.controller('workshop.core.mainController', [
		'$scope',
		'workshop.core.apiService',
		function($scope, apiService) {
			angular.extend($scope, {
				websiteName: 'Angular Workshop',
				company: 'Qualtrics',
				posts: [],
				postLimit: 10
			});

			apiService.getPosts().then(function(posts) {
				$scope.posts = posts;
			});
		}
	]);
})(angular.module('angular-workshop'));