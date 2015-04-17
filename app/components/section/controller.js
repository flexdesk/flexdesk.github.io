'use strict';

flexDeskApp.controller('sectionController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.sections = [];
	$scope.floor = $cookieStore.get('selectedFloor');
	$scope.building = $cookieStore.get('selectedBuildingName');
	$scope.reservedDesk = false;

	if ($scope.building == 'Midtown I' && $scope.floor == '16th Floor') {
		$scope.sections = sectionListATLSixteen;
	}

	$scope.goLayout = function(section){
		$cookieStore.put('selectedSection', section);
		$location.url("layout");
	};

	$scope.floor16Sections = $scope.sections[0];

	$scope.reserveDesk = function(selectedSeat) {

		if (!$scope.reservedDesk) {
			$scope.reservedDesk = selectedSeat;
		}

		if (selectedSeat == $scope.reservedDesk) {

			$('#' + selectedSeat).toggleClass('selected');

			$('#seat-options').toggle('fast');

			$('#action-btn').click(function() {
				$(this).toggleClass('btn-danger');
				$('#action-btn span').toggleClass('glyphicon-remove');
				$('#' + selectedSeat).toggleClass('mine');
			});

			$('#favorite-btn').click(function() {
				$('#favorite-btn span').toggleClass('favorited');
			});
		}

		if (!$('#' + selectedSeat).hasClass('selected') && !$('#' + selectedSeat).hasClass('mine')) {
			$scope.reservedDesk = false;
		}
	};
}]);

var sectionListATLSixteen = [
	{
		name: 'A-B',
		value: 'Section A-B',
		img: './assets/img/section.png'
	},
	{
		name: 'C-D',
		value: 'Section C-D',
		img: './assets/img/section.png'
	},
	{
		name: 'E-F',
		value: 'Section E-F',
		img: './assets/img/section.png'
	},
	{
		name: 'H-I',
		value: 'Section H-I',
		img: './assets/img/section.png'
	},
	{
		name: 'P-Q',
		value: 'Section P-Q',
		img: './assets/img/section.png'
	},
	{
		name: 'R-S',
		value: 'Section R-S',
		img: './assets/img/section.png'
	},
	{
		name: 'S-T',
		value: 'ST',
		img: './assets/img/section.png'
	}
];
