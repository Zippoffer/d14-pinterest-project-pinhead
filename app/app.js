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
        when('/items/login', {
            templateUrl: 'partials/login.html',
            controller: 'LogInCtrl'
        }).