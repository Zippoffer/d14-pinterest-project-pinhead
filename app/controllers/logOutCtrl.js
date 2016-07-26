"use strict";

app.controller("logOutCtrl", function($scope, $location, AuthFactory) {

    $scope.logout = function() {

        $location.path('/');
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            AuthFactory.currentUserID = null;
            // AuthFactory.logout();
            // need to test above coding
            console.log(AuthFactory.getUser(), "Logged out");
        }, function(error) {
            // An error happened.
            console.log(error);
        });
    };
});