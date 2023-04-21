define(['angular', './factories/person.factory'], function (angular, personFactory) {
    'use strict';

   var factories = angular.module('App.factories', [])
        .factory('personFactory', personFactory);

    return factories;
});

