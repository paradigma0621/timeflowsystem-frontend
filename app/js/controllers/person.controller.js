define([], function () {
    'use strict';

    var PersonController = function ($scope, $http) {
        const url = 'http://localhost:8080/sayHello';
        $http.get(url).then(function success(response) {
            $scope.personName = response.data;
        }, function error(response) {
            $scope.personName = 'ERROR';
        });
    };

    return PersonController;
});
