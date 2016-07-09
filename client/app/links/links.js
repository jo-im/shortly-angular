angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.usefulData = [];

  $scope.data = {};
  var first = Links.getAll().then(function (links) {
    $scope.data.links = links;
    $scope.usefulData =$scope.data.links.map(function(x){return ["shortly.com/"+x.code,x.title,x.url]});

    console.log($scope.usefulData);


    
    })
  });



