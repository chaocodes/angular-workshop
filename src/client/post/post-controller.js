(function(app) {
	app.controller('workshop.post.postController', [
		'$scope',
		'workshop.core.apiService',
		function($scope, apiService) {
			$scope.comments = [];
			$scope.viewComments = false;

			$scope.toggleViewComments = function() {
				$scope.viewComments = !$scope.viewComments;
			};

			apiService.getPostComments($scope.post.id).then(function(comments) {
				$scope.comments = comments;
			});
		}
	]);
})(angular.module('angular-workshop'));