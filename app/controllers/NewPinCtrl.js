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

  $scope.addNewItem = function() {
    $scope.newBoard.uid = AuthFactory.getUser();
    ItemStorage.postNewBoard($scope.newBoard)
      .then(function(response) {
        $location.url("/pinhead/board");
      });
  };
});