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
					content: "<p><div class=\"header\">Senior Software Developer</div><div class=\"company\">RAND Worldwide</div><div class=\"detail\">January 2009 – Present</div><div class=\"detail\">Toronto, Canada</div><p>Developed web, windows and server based applications from concept to deployment using Agile development methodologies. Applications are mainly developed using MVC.Net and tested and released using tools such as Installshield, CruiseControl and Selenium.</p><p><b>Accomplishments:</b><ul><li>Development of the web based Millman Virtual Surveyor, implemented in C# using MVC.Net. Used by surveyors it allowed online collaberation around Autodesk drawings.</li><li>Development of the web based tool IMAGINiT Clarity for Autodesk Revit. It provides the hosting, access and management of Revit drawings when installed on a client server.</li></ul></p></p>" + 
							"<br/><p><div class=\"header\">Software Developer</div><div class=\"company\">Hay Group</div><div class=\"detail\">January 2008 – July 2009</div><div class=\"detail\">Boston, US</div><p>Developed multilingual web, windows and server based applications for global deployment. Planned the architecture of applications, wrote technical specifications and set standards for other programming teams to follow. Interfaced with development teams of outsourced projects to plan integration to existing Hay Group applications.</p><p><b>Accomplishments:</b><ul><li>Development of a Windows application, implemented in C#, used by company analysts for generating multilingual pdf reports from XML and XSL templates. This allowed rapid and accurate results to the leadership measurement tools completed by users.</li><li>Development of a replacement server application that uploaded multilingual spreadsheets to an SQL database; reducing upload times from several hours to minutes.</li><li>Creating structure to the development cycle by gathering requirements, writing technical specifications and providing documentation. This lead to the creation of architected, stable and extendable applications.</li></ul></p></p>" + 
							"<br/><p><div class=\"header\">Software Developer</div><div class=\"company\">Hay Group</div><div class=\"detail\">September 2006 – January 2008</div><div class=\"detail\">London, England</div><p>Development of multilingual web applications based on the requirements specified by company clients and consultants. Working to tight deadlines using strict methodologies in all aspects of the development cycle. Implementing innovative solutions to problems where no solutions are immediately apparent.</p><p><b>Accomplishments:</b><ul><li>Development of a portal based CMS used by the Hay Group and clients. This allowed the creation of web sites based on templates by none technical analysts.</li><li>Implementation of new functionality to existing applications based on client specifications, many times in legacy systems not designed for further development.</li><li>Worked to planned milestones and deadlines using tools such as Gantt charts. This required breaking the development of applications into manageable elements and estimating times for completion.</li></ul></p></p>" + 
							"<br/><p><div class=\"header\">Software Developer</div><div class=\"company\">Inmarkets</div><div class=\"detail\">August 2004 – September 2006</div><div class=\"detail\">London, England</div><p>Development and maintenance of SCORM compliant portal based Learning Management System (LMS). Implementation of bespoke client projects and courses using the company's in-house LMS. Design and implementation of tools for internal company use by sales and support staff. Entering into client meetings to gather requirements for bespoke features and applications.</p><p><b>Accomplishments:</b><ul><li>Development of an administration suite feature for the company LMS that dynamically generated reports regarding user course statuses and results.</li><li>Development of additional functionality to the company LMS that reliably recorded course data using the SCORM framework. This allowed the hosting of third party courses adding flexibility to the LMS capabilities.</li><li>The design and implementation of a portal based intranet that integrated with third party applications. This was used by all company staff and was architected in a way that would easily allowed applications to be added in the future.</li><li>Development of communication and requirement gathering skills that could be trusted in meeting with clients such as Barclays Bank.</li></ul></p></p>" + 
							"<br/><p><div class=\"header\">Web Developer</div><div class=\"company\">Ocean Internet</div><div class=\"detail\">March 2003 – August 2004</div><div class=\"detail\">Cannock, England</div><p>Development and maintenance of web sites for local businesses, charities and government. Gathering requirements for web sites directly from none IT minded clients.</p><p><b>Accomplishments:</b><ul><li>Designed and developed a CMS for a local business that allowed them to insert, maintain and display their catalogue of products.</li><li>Implementation of an online auditing tool that allowed company contractors to enter time spent on jobs; also generating invoices based on said records.</li></ul></p></p>" + 
							"<br/><p><div class=\"header\">Junior Developer</div><div class=\"company\">Intergral</div><div class=\"detail\">July 2001 – August 2002</div><div class=\"detail\">Stuttgart, Germany</div><p>Development of both web and server based features for document management systems used by a global client base. Development of bespoke features for the company's document management system based on client requirements. Rapid prototyping of potential application features for demonstrations within client meetings.<p><p><b>Accomplishments:</b><ul><li>Development of an application that received an XML catalogue that was then parsed and imported into the company document management system. The parser had to be flexible enough to deal with errors and corruptions in the catalogue.</li><li>Starting on core application development the move was made onto bespoke client application after proving ability to work to requirements and tight deadlines.</li></ul><p></p>"
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