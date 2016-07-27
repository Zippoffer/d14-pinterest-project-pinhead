"use strict";

app.controller("BoardViewCtrl", function($scope, $routeParams, $location, ItemStorage, AuthFactory) {

  $scope.userID = AuthFactory.getUser();

  $scope.boards = [];

  if (AuthFactory.isAuthenticated()) {
    ItemStorage.getBoards($scope.userID)
      .then(function(boardCollection) {
        $scope.boards = boardCollection;

        $scope.selectedBoard = $scope.boards.filter(function(board) {
          return board.id === $routeParams.boardId;
        })[0];
      });
  } else {}

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