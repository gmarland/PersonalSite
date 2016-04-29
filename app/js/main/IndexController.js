"use strict";

angular.module("gm").controller("IndexCtrl", ["$scope", "$sce", "ngDialog", function($scope, $sce, ngDialog) {
	$scope.selected = null;

	$scope.setSelected = function(title) {
		$scope.selected = title;
		$scope.$apply();
	}

	$scope.clearSelected = function() {
		$scope.selected = null;
		$scope.$apply();
	}

	$scope.viewSelected = function(content) {
		$scope.modalOpen = true;

		ngDialog.open({
			template: "/partials/main/dialog.html",
			closeByEscape: true,
			closeByDocument: false,
			showClose: false,
		    controller: ['$scope', function($scope) {
		    	$scope.title = content.title;
		    	$scope.content = $sce.trustAsHtml(content.content);

		    	$scope.close = function() {
		    		ngDialog.closeAll(null);
		    	};
		    }]
		}).closePromise.then(function(data) {
			$scope.modalOpen = false;
        });
	}
}]);