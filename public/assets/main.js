var app = angular.module("calculeteApp", ["ngRoute", "ngAnimate"]);


/** Route configuration */
app.config(["$routeProvider", "$locationProvider", 
	function($routeProvider, $locationProvider) {
	$routeProvider.
		when("/", {
			templateUrl: "assets/components/start/start.html",
			controller: "StartController"
		}).
		when("/start", {
			templateUrl: "assets/components/start/start.html",
			controller: "StartController"
		}).
		when("/game/:difficulty", {
			templateUrl: "assets/components/game/game.html",
			controller: "GameController"
		}).
		otherwise({
			redirectTo: "/"
		});

	$locationProvider.html5Mode(true);
}]);