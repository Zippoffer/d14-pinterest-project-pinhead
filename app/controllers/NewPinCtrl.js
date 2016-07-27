"use strict";

app.controller("NewPinCtrl", function($scope, ItemStorage, $location, $routeParams, AuthFactory) {
  $scope.newPin = {
    uid: null,
    boardID: null,
    date: null,
    title: "",
    url: "",
    description: "",
    tags: "",
  };

  $scope.addNewPin = function() {
    $scope.newPin.uid = AuthFactory.getUser();
    $scope.newPin.boardID = $routeParams.boardID;
    $scope.newPin.date = Date();
    ItemStorage.postNewPin($scope.newPin)
      .then(function(response) {
        $location.path("/pinhead/board/:boardID");;
        ItemStorage.getPins();
      });
  };
});