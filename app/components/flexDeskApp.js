
//create the module and name it flexDeskApp
var flexDeskApp = angular.module('flexDeskApp', ['ngRoute']);

flexDeskApp.config(function($routeProvider) {
		$routeProvider

			// route for the building page
			.when('/building', {
				templateUrl : 'building/building.html',
				controller  : 'buildingController'
			})

			// route for the floor page
			.when('/floor', {
				templateUrl : 'floor/floor.html',
				controller  : 'floorController'
			})

			// route for the section page
			.when('/section', {
				templateUrl : 'section/section.html',
				controller  : 'sectionController'
			})
			// route for the layout page
			.when('/layout', {
				templateUrl : 'layout/layout.html',
				controller  : 'layoutController'
			});
	});
