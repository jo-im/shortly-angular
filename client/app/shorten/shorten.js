angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {  
  $scope.test='obama'
  $scope.link = {};
  $scope.addLink = function(){Links.addOne({ url: $scope.myInput })} ;
});
