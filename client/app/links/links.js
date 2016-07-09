angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
    $scope.data = {};
    var first=Links.getAll().then(function (links) {
        $scope.data.links=links;
      });
 // var second=first.$$state.value;

});


