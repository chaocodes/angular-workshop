(function(app) {
	app.directive('workshop.comment.commentDirective', [
		function() {
			return {
				scope: {
					comment: '='
				},
				templateUrl: '/templates/comment/comment.html',
				controller: 'workshop.comment.commentController',
				link: function($scope) {}
			}
		}
	]);
})(angular.module('angular-workshop'));