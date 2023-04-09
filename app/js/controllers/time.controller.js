define([], function () {
    'use strict';
    
    return ['$scope', '$http', 
        function($scope, $http) {
       
        $scope.getClocks  = function (callback) {
            if ($scope.clockings !== null && $scope.clockings !== '' && $scope.clockings !== undefined) {
                console.log("Agora já recebeu os dados");
                console.log($scope.clockings);
                console.log($scope.clockings[1]);
            } else {
                const url = 'http://localhost:8100/getClocks';
                $http.get(url).then(function(response) {
                    $scope.clockings = response.data;    
                    if (callback) {
                        callback();
                    }
                })
                console.log("Fez requisição dos dados");
                console.log($scope.clockings);
            }    
        };
        
        $scope.cx  = function() {
            console.log("chamou outro método");
            console.log($scope.clockings);
            $scope.getClocks();
        }
    }];
});