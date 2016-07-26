"use strict";

app.controller("NewBoardCtrl", function($scope, ItemStorage, $location, AuthFactory) {
  $scope.newBoard = {
    uid: null,
    title: "",
    tags: "",
  };

  $scope.addNewBoard = function() {
    $scope.newBoard.uid = AuthFactory.getUser();
    ItemStorage.postNewBoard($scope.newBoard)
      .then(function(response) {
        $location.url("/pinhead/mainboard");
      });
  };
});