'use strict';

flexDeskApp.controller('floorController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.floors = floorList;
	$scope.building = $cookieStore.get('buildingSelected'); 
	if($scope.building == 'Midtown I'){
		$scope.floors = floorListATL;
	}
}]);
var floorList = {};
var floorListATL = [
	{
		name:'',
		
	},
	{
		name:'10th Floor',
	},
	{
		name: '11th Floor',
	},
	{
		name: '16th Floor',
	},
	{
		name: '17th Floor',
	},
	{
		name: '19th Floor',
	}
];