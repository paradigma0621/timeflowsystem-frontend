define(['angular', 'controllers/MainController', 'controllers/person.controller',  'controllers/time.controller', 'controllers/learning.controller'
   
    ], function (angular, MainController, PersonController, TimeController, LearningController) {
        'use strict';
        var controllers = angular.module('App.controllers', []);

        controllers.controller('MainController', MainController);
        controllers.controller('person.controller', PersonController);
        controllers.controller('time.controller', TimeController);
        controllers.controller('learning.controller', LearningController);
        
        
        return controllers;
    });

