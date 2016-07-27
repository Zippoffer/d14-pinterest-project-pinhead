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
                $location.path("/partials/board/:boardID");
                ItemStorage.getPins()
                    .then((pinCollection) => {
                        $scope.pins = pinCollection;
                    });
            });
    };

});