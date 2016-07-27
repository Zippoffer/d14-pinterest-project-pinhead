"use strict";

app.controller("NewBoardCtrl", function($scope, ItemStorage, $location, AuthFactory) {
  $scope.newBoard = {
    uid: null,
    title: "",
    date: null,
    tags: "",
  };

  $scope.addNewBoard = function() {
    $scope.newBoard.uid = AuthFactory.getUser();
    $scope.newBoard.date = Date();
    ItemStorage.postNewBoard($scope.newBoard)
      .then(function(response) {
        $location.path("/partials/mainboard");
        ItemStorage.getBoards();
      });
  };
});