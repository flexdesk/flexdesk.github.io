'use strict';

flexDeskApp.controller('buildingController', function($scope){
	$scope.buildings = buildingList;

});


var buildingList = [
{	name:'Midtown - 1',
	address: '675 W PEACHTREE ST NW Atlanta, GA 30308'
	},
{	name:'Midtown - 2',
	address: '725 W PEACHTREE ST NE Atlanta, GA 30308'
	}
];