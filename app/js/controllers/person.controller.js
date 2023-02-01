define([], function () {
    'use strict';

    return ['$scope', '$http',
        function($scope, $http) {
            $scope.retornaValor = function() {
                const url = 'http://localhost:8080/sayHello';
                $http.get(url).then(function success(response) {
                    $scope.personName = response.data;
                }, function error(response) {
                    $scope.personName = 'ERROR';
                });
            };
 

            // Bellow used to send a POST to endpoint http://localhost:8080/persons/savePerson
            $scope.name = null;
            $scope.removed = null;

            $scope.postdata = function (name, removed) {
                var data = {
                    name: name,
                    removed: removed
                };
            
                //Call the services
                $http.post('http://localhost:8080/persons/savePerson', JSON.stringify(data))
                    .then(function success(response) {
                        // This function handles success
                        if (response.data)
                            $scope.msg = "Post Data Submitted Successfully!";
                    }, function error(response) {
                        // this function handles error
                        $scope.msg = "Service not Exists";
                        $scope.statusval = response.status;
                        $scope.statustext = response.statusText;
                        $scope.headers = response.headers();
                    });
            };
    }];
});