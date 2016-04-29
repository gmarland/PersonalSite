"use strict";

var app = angular.module("gm.game.radarScene", []);

app.directive("radarScene", function($window) {
    return {
        restrict: "E",
        scope: {
        	container: "="
        },
        link: function(scope, element, attr, ctrl) {
			function buildRadarScene() {
	   			scope.radarScene = new THREE.Scene();

				//scope.radarCamera = new THREE.PerspectiveCamera(75, $("#" + scope.container).width()/$("#" + scope.container).height(), 0.1, 2000 );
				scope.radarCamera = new THREE.OrthographicCamera( $("#" + scope.container).width() / - 2, $("#" + scope.container).width() / 2, $("#" + scope.container).height() / 2, $("#" + scope.container).height() / - 2, 1, 1000 );

				scope.radarCamera.position.x = 0;
				scope.radarCamera.position.y = 100;
				scope.radarCamera.position.z = 200;

				scope.radarCamera.lookAt(new THREE.Vector3(0,0,0));

				scope.radarRenderer = new THREE.WebGLRenderer({ antialias: true });
				scope.radarRenderer.setSize($("#" + scope.container).width()-3, $("#" + scope.container).height()-3);
            	scope.radarRenderer.setClearColor(0x000000, 1);

				$("#" + scope.container).append(scope.radarRenderer.domElement);
			}

			function createRenderRadarScene() {
				var that = this;

				var render = function () {
					requestAnimationFrame( render );

					scope.radarRenderer.render(scope.radarScene, scope.radarCamera);
				};

				render();
			}

			function createBase() {
				var material = new THREE.LineBasicMaterial( { color: 0xffffff } ),
	    			geometry = new THREE.CircleGeometry( 150, 100 );

				geometry.vertices.shift();

				var mesh = new THREE.Line( geometry, material);
				mesh.rotation.x = Math.PI / 2;

				return mesh;
			}

			function createMarker(x,z) {
				var geometry = new THREE.SphereGeometry( 3, 10, 10 ),
					material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
				
				var marker = new THREE.Mesh( geometry, material );

				marker.position.x = x;
				marker.position.z = z;
				marker.position.y = 10;

				return marker;
			}

			function createRadar() {
				var radarObject = new THREE.Object3D();

				radarObject.add(createBase());
				radarObject.add(createMarker(0, -110));
				radarObject.add(createMarker(110, 0));
				radarObject.add(createMarker(0, 110));
				radarObject.add(createMarker(-110, 	0));

				return radarObject;
			}

			function createViewSpace() {
				function getPointOnCenter(a) {
					return {
						x: (150 * Math.cos(degInRad(a))),
						y: (150 * Math.sin(degInRad(a)))
					}
				}

				var ViewSegmentObject = new THREE.Object3D();

				var edgePointOne = getPointOnCenter(-142.5),
					edgePointTwo = getPointOnCenter(-37.5);

				var material = new THREE.LineBasicMaterial({
					color: 0x00ff00
				});

				var geometryOne = new THREE.Geometry();
				geometryOne.vertices.push(
					new THREE.Vector3( 0, 0, 0 ),
					new THREE.Vector3( edgePointOne.x, 0, edgePointOne.y )
				);

				ViewSegmentObject.add(new THREE.Line( geometryOne, material ));

				var geometryTwo = new THREE.Geometry();
				geometryTwo.vertices.push(
					new THREE.Vector3( 0, 0, 0 ),
					new THREE.Vector3( edgePointTwo.x, 0, edgePointTwo.y )
				);

				ViewSegmentObject.add(new THREE.Line( geometryTwo, material ));

				return ViewSegmentObject;
			}

			function degInRad(deg) {
			    return deg * Math.PI / 180;
			}

			buildRadarScene();
			createRenderRadarScene();

			scope.radar = createRadar();

			scope.radarScene.add(scope.radar);
			scope.radarScene.add(createViewSpace());

			$(window).keydown(function(e) {
				if(e.keyCode == 39) scope.radar.rotation.y += degInRad(2);
				if(e.keyCode == 37) scope.radar.rotation.y -= degInRad(2);
			});

			scope.lastX = null;

            // touch events
           window.addEventListener("touchstart", function(e) {
                if (e.touches.length == 1) {
                    scope.lastX = e.touches[0].pageX-(window.innerWidth/2);
                }
            }, false );

	       window.addEventListener( "touchmove", function(e) {
	            if (scope.lastX) {
	                if (e.touches.length == 1) {
	                    var mouseX = e.touches[0].pageX-(window.innerWidth/2);
	                    scope.radar.rotation.y -= ((mouseX - scope.lastX) * 0.008);
                   	 	scope.lastX = mouseX;
	                }
	            }
	        }, false );

           window.addEventListener( "touchend", function(e) {
                scope.lastX = null;
            }, false );

           window.addEventListener( "touchcancel", function(e) {
                scope.lastX = null;
            }, false );

			window.addEventListener('resize', function(e) {
			    scope.radarCamera.aspect = $("#" + scope.container).width()/$("#" + scope.container).height();
			    scope.radarCamera.updateProjectionMatrix();

			    scope.radarRenderer.setSize($("#" + scope.container).width(), $("#" + scope.container).height() );
			}, false );
        }
    }
});