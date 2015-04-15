'use strict';

flexDeskApp.controller('layoutController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.section = $cookieStore.get('sectionSelected');
	$scope.floor = $cookieStore.get('floorSelected');
	$scope.building = $cookieStore.get('buildingSelected');
	if($scope.building == 'Midtown I' && $scope.floor == '16th Floor'){
		//$scope.sections = sectionListATLSixteen;
	}

}]);