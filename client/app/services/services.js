angular.module('shortly.services', [])

.factory('Links', function ($http) {

  var something = function() {

    return $http({
      method: 'Get',
      url: '/api/links',
    })
      .then(function (resp) {
        return resp.data;
      });
  };

  var updateVisits = function(info) {

    return $http({
      method: 'GET',
      url: '/'+info.code,
      data: info
    })
        .then(function (resp) {
          console.log(resp);
          return resp;
        });
  };



  var addOne = function(info) {
    var regex = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    if(info.url.match(regex) === null){
      document.getElementById('hideme').style.visibility = 'visible';
    } else {
      document.getElementById('hideme').style.visibility = 'hidden';
       document.getElementById('goodjob').style.visibility = 'visible';
    }
  
    return $http({
      method: 'POST',
      url: '/api/links',
      data: info
    })
      .then(function (resp) {
        console.log(resp);
        return resp;
      });
  };

  return {
    updateVisits: updateVisits,
    getAll: something,
    addOne: addOne
  };
  
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
     document.getElementById('linking').style.display = 'inline';
     document.getElementById('shortening').style.display = 'inline';
      return resp.data.token;


    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
       document.getElementById('linking').style.display = 'inline';
     document.getElementById('shortening').style.display = 'inline';
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {

  document.getElementById('signingin').style.display = 'inline';
  document.getElementById('signingup').style.display = 'inline';
    document.getElementById('linking').style.display = 'none';
     document.getElementById('shortening').style.display = 'none';
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  
  };
  var testingg=function(){
    console.log('wdefsdkjfhsdkhfkwejhfbklsehf');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout,
    test:testingg
  };
});
