app.factory('FeedService', [ '$http', function ($http) {
  return {
    parseFeed: function(url) {
      return $http.jsonp('https://api.rss2json.com/v1/api.json?callback=JSON_CALLBACK&rss_url=' + url);
    }
  };
}]);