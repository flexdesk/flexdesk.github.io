//create the module and name it flexDeskApp
var flexDeskApp = angular.module('flexDeskApp', ['ngRoute','ngCookies']);

flexDeskApp.config(function($routeProvider) {
		$routeProvider

			// route for the building page
			.when('/', {
				templateUrl : 'app/components/building/building.html',
				controller  : 'buildingController'
			})

			// route for the floor page
			.when('/floor', {
				templateUrl : 'app/components/floor/floor.html',
				controller  : 'floorController'
			})

			// route for the section page
			.when('/section', {
				templateUrl : 'app/components/section/section.html',
				controller  : 'sectionController'
			})
			// route for the layout page
			.when('/layout', {
				templateUrl : 'app/components/layout/layout.html',
				controller  : 'layoutController'
			});
	});
