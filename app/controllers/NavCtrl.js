'use strict';

//this populates the navbar anchors\\

app.controller("NavCtrl", function($scope) {
    $scope.navItems = [{
        name: "all boards",
        url: "#/pinhead/mainboard"
    }, {
        name: "new boards",
        url: "#/boards/new"
    }]
    // , {
    //     name: "logout",
    //     url: "#/boards/login"
    // }];
});