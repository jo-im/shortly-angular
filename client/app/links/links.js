var counters = [];

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.usefulData = [];

  $scope.data = {};
  var first = Links.getAll().then(function (links) {
    console.log('linkssss');
    
    $scope.data.links = links;
    console.log(links);

    // for (var i = 0 ; i < links.length ; i++) {

    //   var inThere=false;
    //   for (var x = 0 ; x < counters.length ; x++) {
    //         console.log('dsfsdf')
    //    if (counters[x][0] === links[i].code) {
    //     inThere = true;
    //     }
    //   }
    //   if (!inThere){

    //   counters.push([links[i].code,0]);
    // }
  
    //   }

      // console.log(counters);

    $scope.usefulData =$scope.data.links.map(function(x){return ["shortly.com/"+x.code,x.title,x.url,x.visits]; });
   
    //$scope.listOfVistsAndShortenedUrls=[['shortly.com/595c3',0],['shortly.com/5dsfsd',0]];
    $scope.visits=0;
    $scope.omefunction=function(x){
      console.log(x);
    };

  });

});



