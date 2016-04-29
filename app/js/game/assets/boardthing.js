"use strict";

angular.module("gm.game.assets.boardthing", []).service("$boardthing", [function() {
    return {
		create: function() {
			var boardthingObject = new THREE.Object3D();

			boardthingObject.getName = function() {
				return "Boardthing";
			};

			boardthingObject.getContent = function() {
				return {
					title: "Boardthing",
					content: "<p><div class=\"header\">Demo</div><div><p><iframe width=\"540px\" height=\"300px\" frameborder=\"0\" scrolling=\"no\" src=\"http://app.looplogic.com/davegray/boardthing-trailr/embedded?layout=7\" marginwidth=\"0\" marginheight=\"0\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" allowfullscreen=\"true\" ></iframe></p></div></p>" +
							"<p><div class=\"header\">About</div><div><p>BoardThing is an online white-board that allows people to collaborate in real time with other users. The project came about after I read the Gamestorming book and reached out to Dave Gray with a prototype of a tool I built that allowed dot-voting on items in a web page. After talking to Dave for a while he said he knew of Michael Ramos who had been working on an online empathy map and thought maybe we could come together and make something that would allow all the Gamestorming exercises.</p><p>We've had a successful beta version of the site for several months and are now working on a new general release.</p></div></p>" + 
							"<p><div class=\"header\">Technology</div><div><p>BoardThing was built using node.js back-end with a MongoDB database. The front end was built with AngularJS and BackboneJS (among other things) and manually positioned DIVs on a page to simulate stickies.</p></div></p>" +
							"<p><div class=\"header\">Links</div><div><p><a href=\"http://boardthing.com\" target=\"_blank\">BoardThing</a><br/></p></div></p>"
				};
			};

			var geometry = new THREE.BoxGeometry( 70, 40, 10 ),
				material = new THREE.MeshBasicMaterial({
					color: 0x000000
				});
			
			boardthingObject.add(new THREE.Mesh( geometry, material ));

			var wireGeometry = new THREE.BoxGeometry( 70.2, 40.2, 10.2 ),
				wireMaterial = new THREE.MeshBasicMaterial({
					color: 0xffffff,
					wireframe: true
				});
			
			boardthingObject.add(new THREE.Mesh( wireGeometry, wireMaterial ));

			return boardthingObject;
		}
    }
}]);