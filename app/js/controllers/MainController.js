define([], function () {
    'use strict';

	return ['$scope', '$http',
		function($scope, $http) {
		        $scope.viewName = "View 2";
    
    
		$scope.doSomething = function() {
			console.log("tupatipatupa");
		}
		
    }];

});
