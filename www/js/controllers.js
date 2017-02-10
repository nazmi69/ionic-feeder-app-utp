app.controller('StarterCtrl', ['$scope', 'FeedService', function($scope, Feed) {
	$scope.name = function () {
		return "kimi no nawa";
	};

	$scope.fname = "Nama first";

	$scope.feed = {};

	$scope.submitFeed = function() {
		// console.log($scope.feed.url);
		Feed.parseFeed($scope.feed.url).then(function(res) {
			console.log(res.data.items);
			$scope.feeds = res.data.items;
		});
	};
}]);