var counters = [];

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.usefulData = [];

  $scope.data = {};
  var first = Links.getAll().then(function (links) {
    
    
    $scope.data.links = links;
    console.log(links);



    $scope.usefulData =$scope.data.links.map(function(x){return ["shortly.com/"+x.code,x.title,x.url,x.visits]; });
   console.log($scope.usefulData);

    $scope.somefunction = function(info) {
      console.log(links[info]);
      Links.updateVisits(links[info]);
    };

  });

});



