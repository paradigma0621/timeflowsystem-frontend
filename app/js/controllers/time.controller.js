define([], function () {
    'use strict';
    return ['$scope', '$http',
        function($scope, $http) {
            $scope.retornaValor = function() {
                const url = 'http://localhost:8080/sayHello';
                $http.get(url).then(function success(response) {
                    $scope.timeValue = response.data;
                }, function error(response) {
                    $scope.timeValue = 'ERROR';
                });
            }

            $scope.outroRetornaValor = function() {
                console.log("outro retorna valor");
            } 
    
            //$scope.retornaValor();
        } 
    ];
});
