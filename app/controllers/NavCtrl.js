'use strict';

//this populates the navbar anchors\\

app.controller("NavCtrl", function($scope) {
    $scope.navItems = [{
        name: "boards",
        url: "#/pinhead/mainboard.html"
    }]

});