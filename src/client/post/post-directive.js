(function(app) {
	app.directive('workshop.post.postDirective', [
		function() {
			return {
				scope: {
					post: '='
				},
				templateUrl: '/templates/post/post.html',
				controller: 'workshop.post.postController',
				link: function($scope) {}
			}
		}
	]);
})(angular.module('angular-workshop'));