"use strict";

/* App Module */
angular.module("gm", []) // Overall module

// Import other modules
var module = angular.module("main", [
	"gm",
	"gm.game.assets.aboutme",
	"gm.game.assets.career",
	"gm.game.assets.boardthing",
	"gm.game.assets.dotstorming",
	"gm.game.assets.lazers",
	"gm.game.viewScene",
	"gm.game.radarScene",
	"ngDialog",
	"ngRoute"]);

module.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  	$routeProvider.when("/", { templateUrl: "/partials/main/index.html", controller: "IndexCtrl"});

  	$locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}]);