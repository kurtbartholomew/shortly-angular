angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function() {
    $http.get('/api/links')
      .success(function(data, status, headers, config) {
        $scope.data.links = data;
      })
      .error(function(err) {
        console.log(err);
      });
  };

  $scope.getLinks();
});
