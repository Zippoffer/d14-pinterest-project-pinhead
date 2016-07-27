"use strict";

var app = angular.module("PinheadApp", ['ngRoute'])
    .constant('FirebaseURL', "https://teampinhead-1aff1.firebaseio.com/");



app.config(function($routeProvider, FireCreds) {


    let authConfig = {
        apiKey: FireCreds.apiKey,
        authDomain: FireCreds.authDomain
    };
    firebase.initializeApp(authConfig);

    $routeProvider.
    when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LogInCtrl'
    }).
    when('/pinhead/mainboard', {
        templateUrl: 'partials/mainboard.html',
        controller: 'BoardViewCtrl'
    }).
    when('/pinhead/newboard', {
        templateUrl: 'partials/newBoard.html',
        controller: 'NewBoardCtrl'
    }).
    when('/pinhead/board/:boardID', {
        templateUrl: 'partials/pins.html',
        controller: 'PinViewCtrl'
    }).
    when('/pinhead/newPinform/:boardID', {
        templateUrl: 'partials/newPins.html',
        controller: 'NewPinCtrl'
    }).
    otherwise("/pinhead/mainboard");

});