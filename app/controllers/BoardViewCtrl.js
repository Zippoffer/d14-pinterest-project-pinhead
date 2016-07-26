"use strict";

app.controller("BoardViewCtrl", function($scope, $routeParams, $location, ItemStorage) {
  $scope.boards = [];


  ItemStorage.getBoards()
    .then(function(boardCollection) {
      $scope.boards = boardCollection;

      $scope.selectedBoard = $scope.boards.filter(function(board) {
        return board.id === $routeParams.boardId;
      })[0];
    });


  $scope.deleteBoardCall = function(board) {
    ItemStorage.deleteBoard(board)
      .then((boardCollection) => {
        $scope.boards = boardCollection;
        $location.path("/partials/mainboard");
        ItemStorage.getBoards()
          .then((boardCollection) => {
            $scope.boards = boardCollection;
          });
      });
  };

});