var counters = [];

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.usefulData = [];

  $scope.data = {};
  var first = Links.getAll().then(function (links) {
    
    
    $scope.data.links = links;
    console.log(links);



    $scope.usefulData = $scope.data.links.map(function(x) { 
      return {0:'shortly.com/' + x.code, "pig":x.title, 2:x.url, 3:x.visits}; 
    });
     

    $scope.somefunction = function(index) {
      console.log(links[info]);
      Links.updateVisits(links[index]);
    };

  });

});



