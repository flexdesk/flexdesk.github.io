'use strict';

flexDeskApp.controller('sectionController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.sections = sectionList;
	$scope.floor = $cookieStore.get('floorSelected');
	$scope.building = $cookieStore.get('buildingSelected');
	if($scope.building == 'Midtown I' && $scope.floor == '16th Floor'){
		$scope.sections = sectionListATLSixteen;
	}
	$scope.goLayout = function(){
		$cookieStore.put('sectionSelected', this.sectionSelect);
		$location.url("layout");
	};

}]);
var sectionList = {};
var sectionListATLSixteen = [
	{
		name:'P-Q',
		
	},
	{
		name:'R-S',
		
	},
	{
		name:'S-T',
	},
	{
		name: 'H-I',
	},
	{
		name: 'A-B',
	},
	{
		name: 'C-D',
	},
	{
		name: 'E-F',
	}
];