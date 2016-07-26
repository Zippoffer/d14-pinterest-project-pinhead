"use strict";

app.controller("PinViewCtrl", function($scope, $routeParams, ItemStorage) {
  $scope.pins = [];


  ItemStorage.getPins()
    .then(function(pinCollection) {
      $scope.pins = pinCollection;

      $scope.selectedPin = $scope.pins.filter(function(pin) {
        return pin.id === $routeParams.pinId;
      })[0];
    });



});