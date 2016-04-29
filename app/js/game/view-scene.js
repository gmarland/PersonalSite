"use strict";

var app = angular.module("gm.game.viewScene", []);

app.directive("viewScene", function($window, $aboutme, $career, $boardthing, $dotstorming, $lazers) {
    return {
        restrict: "E",
        scope: {},
        link: function(scope, element, attr, ctrl) {
			function buildScene() {
	   			scope.scene = new THREE.Scene();

				scope.camera = new THREE.PerspectiveCamera(75, $("#view-panel").width()/$("#view-panel").height(), 0.1, 2000 );

				scope.camera.position.x = 0;
				scope.camera.position.y = 0;
				scope.camera.position.z = 0;

				scope.camera.lookAt(new THREE.Vector3(0,0,0));

				scope.renderer = new THREE.WebGLRenderer({ antialias: true });
				scope.renderer.setSize($("#view-panel").width()-3, $("#view-panel").height()-3);
            	scope.renderer.setClearColor(0x000000, 1);

				$("#view-panel").append(scope.renderer.domElement);
			}

			function createRenderScene() {
				var that = this;

				var render = function () {
					requestAnimationFrame( render );

					updateObjects();

					scope.renderer.render(scope.scene, scope.camera);
				};

				render();
			}

			function updateObjects() {
	        	var rotations = [ {
	        		x: 0.005, y: 0.005
	        	},{
	        		x: 0.005, y: -0.005
	        	},{
	        		x: -0.005, y: -0.005
	        	},{
	        		x: -0.005, y: 0.005
	        	} ];

				for (var i=0; i<scope.allObjects.length; i++) {
					scope.allObjects[i].rotation.x += rotations[i].x;
					scope.allObjects[i].rotation.y += rotations[i].y;
				}
			}

			function degInRad(deg) {
			    return deg * Math.PI / 180;
			}

			function rotateCameraRight(deg) {
				scope.camera.rotation.y -= degInRad(deg);
			}

			function rotateCameraLeft(deg) {
				scope.camera.rotation.y += degInRad(deg);	
			}

			function checkSelectedItem() {
			    scope.raycaster.setFromCamera(scope.mouse, scope.camera);

				for (var i=0; i<scope.allObjects.length; i++) {
					if (scope.raycaster.intersectObject(scope.allObjects[i], true).length > 0) {
						return scope.allObjects[i];
					}
				}

				return null;
			}

    		scope.raycaster = new THREE.Raycaster();

			scope.allObjects = [];

			scope.allObjects.push($aboutme.create());
			scope.allObjects.push($career.create());
			scope.allObjects.push($boardthing.create());
			scope.allObjects.push($dotstorming.create());

			scope.allObjects[0].position.z = -300;
			scope.allObjects[1].position.x = 300;
			scope.allObjects[2].position.x = -300;
			scope.allObjects[3].position.z = 300;

			buildScene();

			for (var i=0; i<scope.allObjects.length; i++) scope.scene.add(scope.allObjects[i]);

			createRenderScene();

			scope.mouse = null;

			$(window).keydown(function(e) {
				if ((!scope.$parent.modalOpen) && (e.keyCode == 39)) rotateCameraRight(2);
				if ((!scope.$parent.modalOpen) && (e.keyCode == 37)) rotateCameraLeft(2);

				if (scope.mouse) {
					var selected = checkSelectedItem();

					if (selected) scope.$parent.setSelected(selected.getName());
					else scope.$parent.clearSelected();
				}
			});

			$("#view-panel").mouseover(function(e) {
				$(this).css( 'cursor', 'url(/img/target.cur), auto' );
			});

			$("#view-panel").mouseout(function(e) {
				$(this).css( 'cursor', 'auto' );
				scope.mouse = null;
			});

			$("#view-panel").mousemove(function(e) {
				scope.mouse = new THREE.Vector2();
			    scope.mouse.x = ( e.clientX / scope.renderer.domElement.clientWidth ) * 2 - 1;
			    scope.mouse.y = - ( e.clientY / scope.renderer.domElement.clientHeight ) * 2 + 1;
			
				var selected = checkSelectedItem();

				if (selected) scope.$parent.setSelected(selected.getName());
				else scope.$parent.clearSelected();
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
	                    rotateCameraLeft(((mouseX - scope.lastX) * 0.2));
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

			$("#view-panel").click(function(e) {
				scope.mouse = new THREE.Vector2();
			    scope.mouse.x = ( e.clientX / scope.renderer.domElement.clientWidth ) * 2 - 1;
			    scope.mouse.y = - ( e.clientY / scope.renderer.domElement.clientHeight ) * 2 + 1;
			
				var selected = checkSelectedItem();
				if (selected) scope.$parent.viewSelected(selected.getContent());
				scope.$parent.clearSelected();
			});

			window.addEventListener('resize', function(e) {
			    scope.camera.aspect = $("#view-panel").width()/$("#view-panel").height();
			    scope.camera.updateProjectionMatrix();

			    scope.renderer.setSize( $("#view-panel").width(), $("#view-panel").height() );
			}, false );
        }
    }
});