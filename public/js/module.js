'use strict';

var app = angular.module('angularApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'homeCtrl',
            resolve: {
                items: function(myService) {
                    return myService.getAll();
                }
            }
        })
        .state('delete', {
            url: '/delete/:id',
            templateUrl: '/html/home.html',
            controller: 'deleteCtrl'
        })
        .state('state1', {
            url: '/state1/',
            templateUrl: '/html/state1.html',
            controller: 'state1Ctrl'
        })
        .state('details', {
            url: '/details/:id/:image',
            templateUrl: '/html/state3.html',
            controller: 'state3Ctrl'
        })
        .state('stats', {
            url: '/stats',
            templateUrl: '/html/stats.html',
            controller: 'statstrl'
        })



    $urlRouterProvider.otherwise('/');

})
