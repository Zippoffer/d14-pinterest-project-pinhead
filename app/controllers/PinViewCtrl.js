"use strict";

app.controller("PinViewCtrl", function($scope, $routeParams, ItemStorage, $location) {

    $scope.pins = [];


    $scope.boardID = $routeParams.boardID;

    ItemStorage.getPins($routeParams.boardID)
        .then(function(pinCollection) {
            $scope.pins = pinCollection;

            $scope.selectedPin = $scope.pins.filter(function(pin) {
                return pin.id === $routeParams.pinId;
            })[0];
        });


    $scope.deletePinCall = function(pin) {
        ItemStorage.deletePin(pin)
            .then((pinCollection) => {
                $scope.pins = pinCollection;
                $scope.boardID = $routeParams.boardID
                console.log("boardID", $scope.boardID, $routeParams.boardID);
                $location.path(`/pinhead/board/${$routeParams.boardID}`);
                ItemStorage.getPins($scope.boardID)
                    .then((pinCollection) => {
                        $scope.pins = pinCollection;
                    });
            });
    };

});