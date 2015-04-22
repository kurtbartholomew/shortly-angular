angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    $http.post('/api/links')
      .success(function(data, status, headers, config) {

      })
      .error(function(err) {
        console.log(err);
      });
  };
});
