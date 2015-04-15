'use strict';

flexDeskApp.controller('floorController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.floors = floorList;
	$scope.building = $cookieStore.get('buildingSelected'); 
	if($scope.building == 'Midtown I'){
		$scope.floors = floorListATL;
	}
	
	$scope.goSection = function(){
		$cookieStore.put('floorSelected', this.floorSelect);
		$location.url("section");
	};
}]);
var floorList = {};
var floorListATL = [
	{
		name:'8th Floor',
		
	},
	{
		name:'9th Floor',
		
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