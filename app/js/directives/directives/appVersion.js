define(['angular'], function (angular) {
    'use strict';

    return function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    };
});
