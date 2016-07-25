"use strict";

var app = angular.module("PinheadApp", ['ngRoute'])
    .constant('FirebaseURL', "https://teampinhead-1aff1.firebaseio.com/");



app.config(function($routeProvider, FireCreds) {
<<<<<<< HEAD
        let authConfig = {
            apiKey: FireCreds.apiKey,
            authDomain: FireCreds.authDomain
        };
        firebase.initializeApp(authConfig);

        $routeProvider.
        when('/items/login', {
            templateUrl: 'partials/login.html',
            controller: 'LogInCtrl'
        }).
=======
    let authConfig = {
        apiKey: FireCreds.apiKey,
        authDomain: FireCreds.authDomain
    };
    firebase.initializeApp(authConfig);

    $routeProvider.
    when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LogInCtrl'
    });
    // }).
    // when('/pinhead/mainboard', {
    //     templateUrl: 'partials/mainboard.html',
    //     controller: 'BoardViewCtrl'
    // }).
    // when('/pinhead/board/:itemID', {
    //     templateUrl: 'partials/board.html',
    //     controller: 'SelectViewCtrl'
    // }).
    // otherwise("/pinhead/mainboard");
});
>>>>>>> 323b21b4373b39ad1e491755ac865931909e2a8e
