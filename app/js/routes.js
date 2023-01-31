define(['app'], function (app) {
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view1', { templateUrl: 'partials/partial1.html', controller: 'MainController' });
	        $routeProvider.when('/person1', { templateUrl: 'partials/person1.html', controller: 'person.controller' });            
            $routeProvider.when('/time1', { templateUrl: 'partials/time1.html', controller: 'time.controller' });            
            $routeProvider.otherwise({ redirectTo: '/view1' });
        }]);
});
