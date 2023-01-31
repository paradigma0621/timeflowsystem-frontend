define(['angular', 'controllers/MainController', 'controllers/person.controller',  'controllers/time.controller'
    ], function (angular, MainController, PersonController, TimeController) {
        'use strict';
        var controllers = angular.module('App.controllers', []);

        controllers.controller('MainController', MainController);
        controllers.controller('person.controller', PersonController);
        controllers.controller('time.controller', TimeController);
        
        return controllers;
    });

