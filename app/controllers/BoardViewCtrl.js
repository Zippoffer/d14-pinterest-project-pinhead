"use strict";

app.controller("BoardViewCtrl", function($scope, $routeParams, ItemStorage) {
    $scope.boards = [];


    ItemStorage.getBoards()
        .then(function(boardCollection) {
            $scope.boards = boardCollection;

            $scope.selectedBoard = $scope.boards.filter(function(board) {
                return board.id === $routeParams.boardId;
            })[0];
        });

});