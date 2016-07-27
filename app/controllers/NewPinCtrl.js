"use strict";

app.controller("NewPinCtrl", function($scope, ItemStorage, $location, $routeParams, AuthFactory) {
  $scope.newPin = {
    uid: null,
    boardID: null,
    title: "",
    url: "",
    description: "",
    tags: "",
  };

  $scope.addNewPin = function(boardID) {
    $scope.newPin.uid = AuthFactory.getUser();
    $scope.newPin.boardID = $routeParams.boardID
    ItemStorage.postNewPin($scope.newPin)
      .then(function(response) {
        $location.url("/pinhead/board/`${boardID}`");
      });
  };
});