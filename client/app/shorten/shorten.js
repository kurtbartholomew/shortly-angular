angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links, Auth) {
  // Your code here
  $scope.link = null;

  $scope.addLink = function(isValid) {
    $scope.submitted = true;

    if(isValid){
      $http.post('/api/links', {url: $scope.link})
        .success(function(data, status, headers, config) {
          $scope.link = null;
          $scope.submitted = false;
          console.log(data);
        })
        .error(function(err) {
          console.log(err);
        });
    }
  };

  $scope.signout = Auth.signout;
});
