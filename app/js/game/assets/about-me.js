"use strict";

angular.module("gm.game.assets.aboutme", []).service("$aboutme", [function() {
    return {
		create: function() {
			var aboutMeObject = new THREE.Object3D();

			aboutMeObject.getName = function() {
				return "About Me";
			};

			aboutMeObject.getContent = function() {
				return {
					title: "About Me",
					content: "<p>My name is Gareth Marland. I'm a senior full stack software developer who creates professional business applications.</p><p>I've worked all over the world building software and I'm driven to produce quality solutions and passionate about software development.</p><p>By day, I work as the Senior Developer on Clarity for Rand Worldwide, a product that helps manage Autodesk Revit. It’s wrote in C# using the MVC.Net framework and is a constantly evolving challenge.</p><p>By night, I am one of the co-founders of BoardThing which is an online collaborative workspace. I also created a collaborative brainstroming and voting website called Dotstorming which is used in classrooms all over the world.</p>"
				};
			};

			var geometry = new THREE.DodecahedronGeometry( 40, 0),
				material = new THREE.MeshBasicMaterial({
					color: 0x000000
				});
			
			aboutMeObject.add(new THREE.Mesh( geometry, material ))

			var wireGeometry = new THREE.DodecahedronGeometry( 40.2, 0),
				wireMaterial = new THREE.MeshBasicMaterial({
					color: 0xFFFFFF,
					wireframe: true
				});
			
			aboutMeObject.add(new THREE.Mesh( wireGeometry, wireMaterial ))

			return aboutMeObject;
		}
    }
}]);