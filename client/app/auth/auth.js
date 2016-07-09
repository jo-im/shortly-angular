// Do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
        document.getElementById('signingin').style.display = 'none';
        document.getElementById('signingup').style.display = 'none';
      })
      .catch(function (error) {
        console.log('you aint in there');
        document.getElementById('hidemypassword').style.visibility = 'visible';
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
        document.getElementById('signingin').style.display = 'none';
        document.getElementById('signingup').style.display = 'none';      
   })

      .catch(function (error) {
        document.getElementById('hidemyuser').style.visibility = 'visible';
        console.log("already in thereeeeee");
      });
  };
});
