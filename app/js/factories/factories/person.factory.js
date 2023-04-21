/**
 * @namespace Person
 */
define(['app'], function (app) {

    'use strict';

    return app.factory('personFactory', ['$http', function ($http) {
        var personFactory = {};

	var name = 'Fulano';

        /*personFactory.$get = function() {
            return personFactory;
        };*/
       
        personFactory.sayPersonName = function() {
            console.log('h0h0hh00hh00h: ' + name);
        };
	
        personFactory.setPersonName = function() {
            name='Deltrano';
            console.log('changed name to: ' + name);
        };

        return personFactory;
    }]);
});
