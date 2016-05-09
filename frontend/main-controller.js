//Define an angular module for our app
var app = angular.module("trashApp")
var port = 80;




app.controller('MainController', 
	
	function($scope, $http) {
		$scope.secretWord = "Kwan";


});
