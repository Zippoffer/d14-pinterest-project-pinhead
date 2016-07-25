"use strict";

app.controller("LogInCtrl", function($scope, $location, AuthFactory) {


<<<<<<< HEAD

    $scope.login = function() {

        AuthFactory.authWithProvider()
            .then(function(result) {
                var user = result.user.uid;
                console.log("logged in ", user);
                // Load to boards?
                $location.path("/");
                $scope.$apply();
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    };
=======
	AuthFactory.authWithProvider()
    .then(function(result) {
      var user = result.user.uid;
      console.log("logged in ", user);
      $location.path("/pinhead/mainboard");
      $scope.$apply();
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  };
>>>>>>> 323b21b4373b39ad1e491755ac865931909e2a8e
});