define(['angular', './directives/appVersion', './directives/w3TestDirective'], function (angular, appVersion, w3TestDirective) {
    'use strict';

    var directives = angular.module('App.directives', [])
        .directive('appVersion', ['version', appVersion])
        .directive('w3TestDirective', w3TestDirective);

    return directives;
});

