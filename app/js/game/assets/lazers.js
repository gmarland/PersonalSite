"use strict";

angular.module("gm.game.assets.lazers", []).service("$lazers", [function() {
    return {
		create: function(x1,z1,tx, ty, tz) {
			var lazerObject = new THREE.Object3D();

			var lazerGeometry = new THREE.Geometry();

           	var leftLazer = [ new THREE.Vector3(0, -0.1, 0), new THREE.Vector3(0.1, -0.1, 0), new THREE.Vector3(tx, ty, tz)];
           	console.log(leftLazer)

           	for (var i=0; i<leftLazer.length; i++) lazerGeometry.vertices.push(leftLazer[i]);

            lazerObject.add(new THREE.Line( lazerGeometry, new THREE.LineBasicMaterial({
					color: 0x00ff00
				} )));

			return lazerObject;
		}
    }
}]);