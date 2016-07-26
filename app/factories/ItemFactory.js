"use strict";

app.factory("ItemStorage", function(FirebaseURL, $q, $http, AuthFactory) {

  let postNewBoard = function(newItem) {
    return $q(function(resolve, reject) {
      $http.post(`${FirebaseURL}/boards.json`,
        JSON.stringify(newItem))
        .success(function(ObjFromFirebase) {
          resolve(ObjFromFirebase);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };

  let postNewPin = function(newItem) {
    return $q(function(resolve, reject) {
      $http.post(`${FirebaseURL}/pins.json`,
        JSON.stringify(newItem))
        .success(function(ObjFromFirebase) {
          resolve(ObjFromFirebase);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };

  let getBoards = function() {
    let boards = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}/boards.json`)
        .success(function(boardObject) {
          let boardCollection = boardObject;
          Object.keys(boardCollection).forEach(function(key) {
            boardCollection[key].id = key;
            boards.push(boardCollection[key]);
          });
          resolve(boards);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };

  let getPins = function(boardID) {
    let pins = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}/pins.json?orderBy="boardID"&equalTo="${boardID}"`)
        .success(function(pinObject) {
          let pinCollection = pinObject;
          Object.keys(pinCollection).forEach(function(key) {
            pinCollection[key].id = key;
            pins.push(pinCollection[key]);
          });
          resolve(pins);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };

  var deleteBoard = function(boardID) {
    console.log(boardID, "this is a deleted board");
    return $q((resolve, reject) => {
      $http.delete(
        `${FirebaseURL}/boards/${boardID}.json`
      )
        .success((data) => {
          resolve(data);
        })
        .error((error) => {
          reject(error);
        });
    });
  };

  var deletePin = function(pinID) {
    console.log(pinID, "this is a deleted pin");
    return $q((resolve, reject) => {
      $http.delete(
        `${FirebaseURL}/pins/${pinID}.json`
      )
        .success((data) => {
          resolve(data);
        })
        .error((error) => {
          reject(error);
        });
    });
  };



  return {
    postNewBoard, postNewPin, getBoards, deleteBoard, getPins, deletePin
  };
});