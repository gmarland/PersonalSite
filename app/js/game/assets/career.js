"use strict";

angular.module("gm.game.assets.career", []).service("$career", [function() {
    return {
		create: function() {
			var careerObject = new THREE.Object3D();

			careerObject.getName = function() {
				return "Career";
			};

			careerObject.getContent = function() {
				return {
					title: "Career",
					content: "<p><div class=\"header\">Senior Software Developer</div><div class=\"company\">RAND Worldwide</div><div class=\"detail\">January 2009 – Present</div><div class=\"detail\">Toronto, Canada</div><p>Developed web, windows and server based applications from concept to deployment using Agile development methodologies. Applications are mainly developed using MVC.Net and tested and released using tools such as Installshield, CruiseControl and Selenium.</p></p>" + 
							"<br/><p><div class=\"header\">Software Developer</div><div class=\"company\">Hay Group</div><div class=\"detail\">January 2008 – July 2009</div><div class=\"detail\">Boston, US</div><p>Developed multilingual web, windows and server based applications for global deployment. Planned the architecture of applications, wrote technical specifications and set standards for other programming teams to follow. Interfaced with development teams of outsourced projects to plan integration to existing Hay Group applications.</p></p>" + 
							"<br/><p><div class=\"header\">Software Developer</div><div class=\"company\">Hay Group</div><div class=\"detail\">September 2006 – January 2008</div><div class=\"detail\">London, England</div><p>Development of multilingual web applications based on the requirements specified by company clients and consultants. Working to tight deadlines using strict methodologies in all aspects of the development cycle. Implementing innovative solutions to problems where no solutions are immediately apparent.</p></p>" + 
							"<br/><p><div class=\"header\">Software Developer</div><div class=\"company\">Inmarkets</div><div class=\"detail\">August 2004 – September 2006</div><div class=\"detail\">London, England</div><p>Development and maintenance of SCORM compliant portal based Learning Management System (LMS). Implementation of bespoke client projects and courses using the company's in-house LMS. Design and implementation of tools for internal company use by sales and support staff. Entering into client meetings to gather requirements for bespoke features and applications.</p></p>" + 
							"<br/><p><div class=\"header\">Web Developer</div><div class=\"company\">Ocean Internet</div><div class=\"detail\">March 2003 – August 2004</div><div class=\"detail\">Cannock, England</div><p>Development and maintenance of web sites for local businesses, charities and government. Gathering requirements for web sites directly from none IT minded clients.</p></p>" + 
							"<br/><p><div class=\"header\">Junior Developer</div><div class=\"company\">Intergral</div><div class=\"detail\">July 2001 – August 2002</div><div class=\"detail\">Stuttgart, Germany</div><p>Development of both web and server based features for document management systems used by a global client base. Development of bespoke features for the company's document management system based on client requirements. Rapid prototyping of potential application features for demonstrations within client meetings.<p></p>"
				};
			};

			var geometry = new THREE.TetrahedronGeometry( 45, 0 ),
				material = new THREE.MeshBasicMaterial({
					color: 0x000000
				});
			
			careerObject.add(new THREE.Mesh( geometry, material ));

			var wireGeometry = new THREE.TetrahedronGeometry( 45.2, 0 ),
				wireMaterial = new THREE.MeshBasicMaterial({
					color: 0xffffff,
					wireframe: true
				});
			
			careerObject.add(new THREE.Mesh( wireGeometry, wireMaterial ));

			return careerObject;
		}
    }
}]);