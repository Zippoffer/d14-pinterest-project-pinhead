"use strict";

app.controller("LogInCtrl", function($scope, $location, AuthFactory) {




  $scope.login = function() {


    AuthFactory.authWithProvider()
      .then(function(result) {
        var user = result.user.uid;
        console.log("logged in ", user);
        $location.path("#/pinhead/mainboard");
        $scope.$apply();
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

});