"use strict";

app.controller("NewPinCtrl", function($scope, ItemStorage, $location, AuthFactory) {
    $scope.newPin = {
        uid: null,
        boardID: "",
        title: "",
        url: "",
        description: "",
        tags: "",
    };

    $scope.addNewPin = function(boardID) {
        console.log("you added a new pin", $scope.newPin)
        $scope.newPin.uid = AuthFactory.getUser();
        ItemStorage.postNewPin($scope.newPin)
            .then(function(response) {
                $location.url("/pinhead/board/`${boardID}`");
            });
    };
});