"use strict";

<<<<<<< HEAD
app.controller("NewPinCtrl", function($scope, ItemStorage, $location, AuthFactory) {
    $scope.newPin = {
        uid: null,
        boardID: "",
        title: "",
        url: "",
        description: "",
        tags: "",
    };

    $scope.addNewPin = function(boardID) {
        console.log("you added a new pin", $scope.newPin)
        $scope.newPin.uid = AuthFactory.getUser();
        ItemStorage.postNewPin($scope.newPin)
            .then(function(response) {
                $location.url("/pinhead/board/`${boardID}`");
            });
    };
=======
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
>>>>>>> master
});