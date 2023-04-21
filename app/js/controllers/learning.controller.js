define([], function () {
    'use strict';

	return ['$scope', '$http', 'personFactory',
		function($scope, $http, personFactory) {
		        $scope.viewName = "View xxxx";
    
    
		$scope.doSomething = function() {
			personFactory.sayPersonName();
		}
		
		$scope.doConversation = function() {
			personFactory.setPersonName();
		}		
		
    }];

});
