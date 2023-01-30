define([
    'angular',
    'controllers/MainController', 'controllers/person.controller'
    ], function (angular, MainController, PersonController) {
        'use strict';
        var controllers = angular.module('App.controllers', []);

        controllers.controller('MainController', MainController);
        controllers.controller('person.controller', PersonController);
        
        return controllers;
    });

