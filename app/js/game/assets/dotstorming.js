"use strict";

angular.module("gm.game.assets.dotstorming", []).service("$dotstorming", [function() {
    return {
		create: function() {
			var dotstormingObject = new THREE.Object3D();

			dotstormingObject.getName = function() {
				return "Dotstorming";
			};

			dotstormingObject.getContent = function() {
				return {
					title: "Dotstorming",
					content: "<div class=\"panel\"><div class=\"header\">Demo</div><div><p><iframe width=\"540\" height=\"300\" src=\"https://www.youtube.com/embed/eTDbzdIC0BM\" frameborder=\"0\" allowfullscreen></iframe></p></div></div>" +
							"<div class=\"panel\"><div class=\"header\">About</div><div><p>Dotstorming is a real-time group brainstorming and decision making tool similar to padlet and pinterest, but with a focus on voting. The voting is done using dot voting which means every participant gets several votes to distribute among posted options. The purpose isn't to pick the right answer, but facilitate a discussion and keep people engaged.</p><p>Dotstorming is currenly used in classrooms and companies all over the world.</p></div></div>" + 
							"<div class=\"panel\"><div class=\"header\">Technology</div><div><p>Dotstorming was built using node.js back-end with a MongoDB database. The front end was built with BackboneJS amd JQuery (among other things).</p></div></div>" + 
							"<div class=\"panel\"><div class=\"header\">Links</div><div><p><a href=\"http://dotstorming.com\" target=\"_blank\">Dotstorming</a><br/></p></div></div>"
				};
			};

			var geometry = new THREE.CylinderGeometry( 30, 30, 10, 15 ),
				material = new THREE.MeshBasicMaterial({
					color: 0x000000
				});
			
			dotstormingObject.add(new THREE.Mesh( geometry, material ));

			var wireGeometry = new THREE.CylinderGeometry( 30.2, 30.2, 10, 15 ),
				wireMaterial = new THREE.MeshBasicMaterial({
					color: 0xffffff,
					wireframe: true
				});
			
			dotstormingObject.add(new THREE.Mesh( wireGeometry, wireMaterial ));

			return dotstormingObject;
		}
    }
}]);