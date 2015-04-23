angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = Links.getLinks;

  $scope.getLinks().then(function(data){
    $scope.data.links = data;
  })
});
