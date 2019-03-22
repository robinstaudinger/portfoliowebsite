
//JSONs
var bio = {
	"name" : "Robin Staudinger",
	"role" : "AI Expert",
	"welcomeMessage" : "",
	"biopic" : "images/portrait.jpeg",
	"contacts" : {
		"email" : "robin.staudinger@hotmail.com",
		"github" : "https://github.com/robinstaudinger",
		"linkedin": "https://www.linkedin.com/in/robin-staudinger/",
		"kaggle" : "https://www.kaggle.com/robinstaudinger",
		"location" : "Espoo, Finland"
	},
	"skills" : [
	"Python",
	"Artificial Intelligence",
	"Project Management",
	"Full Stack Development"
	]
}

//append formatted data to page
function format(place, HTMLvar, data){
	if(arguments[3]){
		HTMLvar = HTMLvar.replace(/\#/g, arguments[3])
	}
	$(place).append(HTMLvar.replace(/\%data%/g, data));
}

format("#footerContacts",HTMLlinkedin, bio.contacts.linkedin);
format("#footerContacts", HTMLgithub, bio.contacts.github);
format("#footerContacts", HTMLkaggle, bio.contacts.kaggle);
//format("#topContacts", HTMLmobile, bio.contacts.mobile);
format("#topContacts", HTMLemail, bio.contacts.email);
format("#topContacts", HTMLlocation, bio.contacts.location);
format("#headerContent", HTMLbioPic, bio.biopic);
format("#headerContent", HTMLheaderName, bio.name);



//append skills to page
if(bio.skills.length > 0) {
	$("#headerContent").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length ; i++) {
		format("#skillsPreview", HTMLskills, bio.skills[i]);
	}

}

//$("#main").append(internationalizeButton);

//functions

// //displays the work correctly on the page, using helper.js
// function displayWork(){
// 	for (job in work.jobs) {
// 	//create div for work element
// 	$("#workExperience").append(HTMLworkStart);
// 	//child div for the information
// 	if(job % 2 === 0){
// 		$(".work-entry:last").append(HTMLworkInfo);
// 		format(".work-entry:last", HTMLworkImage, work.jobs[job].image);
// 	}else{
// 		format(".work-entry:last", HTMLworkImage, work.jobs[job].image);
// 		$(".work-entry:last").append(HTMLworkInfo);
// 	}
//
// 	//add employer and title
// 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
// 	formattedEmployer = formattedEmployer.replace("#", work.jobs[job].link);
// 	if(work.jobs[job].title !== ""){
// 		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
// 	}else{
// 		var formattedTitle = "</a></h2>";
// 	}
// 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
// 	$(".work-info:last").append(formattedEmployerTitle);
//
// 	//add dates
// 	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
// 	$(".work-info:last").append(formattedDates);
// 	//add location
// 	//var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
// 	//$(".work-info:last").append(formattedLocation);
//
// 	//add description
// 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
// 	$(".work-info:last").append(formattedDescription);
// }
// }
//
// //displays the education correctly on the page, using helper.js
// function displayEducation(){
// 	for (school in education.schools) {
// 		//create div for education experience
// 		$("#education").append(HTMLschoolStart);
// 		//add Name and Degree
// 		format(".education-entry:last", HTMLschoolName, education.schools[school].name, education.schools[school].link);
// 		format(".education-entry:last", HTMLschoolDegree, education.schools[school].degree);
// 		//add dates
// 		format(".education-entry:last", HTMLschoolDates, education.schools[school].dates);
// 		//add location
// 		format(".education-entry:last", HTMLschoolLocation, education.schools[school].location);
// 		//add major
// 		format(".education-entry:last", HTMLschoolMajor, education.schools[school].major);
// 	}
// }
//
// displayEducation();
//
// function displayOnlineClasses(){
// 	$("#education").append(HTMLonlineClasses);
// 	for(var i = 0;i < education.onlineClasses.length ; i++){
// 		$("#education").append(HTMLschoolStart);
// 		format(".education-entry:last", HTMLonlineTitle, education.onlineClasses[i].title, education.onlineClasses[i].link);
// 		format(".education-entry:last", HTMLonlineSchool, education.onlineClasses[i].school);
// 		format(".education-entry:last", HTMLonlineDates, education.onlineClasses[i].dates);
// 	}
// }
//
// displayOnlineClasses();
//
// function locationizer(work_obj) {
// 	var locations = [];
// 	for(var i ; i< work_obj.jobs.length; i++){
// 		locations.push(work_obj.jobs.location)
// 	}
// 	return locations;
// }
//
// // //internationalize name, Last name all upper
// // function inName(name){
// // 	var name = name.trim().split(" ");
// // 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// // 	name[1] = name[1].toUpperCase();
// // 	return name[0] + " " + name[1];
// // }
//
// displayWork();
//
// // display projects correctly, using helper.js
// projects.display = function(){
// 	for (var i = 0; i < projects.projects.length; i++) {
// 		$("#projects").append(HTMLprojectStart);
// 		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);
// 		$(".project-entry:last").append(formattedImage);
// 		$(".project-entry:last").append(HTMLprojectInfo);
// 		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
// 		formattedTitle = formattedTitle.replace("#", projects.projects[i].link);
// 		$(".project-info:last").append(formattedTitle);
// 		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
// 		$(".project-info:last").append(formattedDates);
// 		//add description
// 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
// 		$(".project-info:last").append(formattedDescription);
// 	}
// }
//
// projects.display();

// function displaySkills(){
// 	for (var i = 0; i < skills.skill.length ; i++) {
// 		$("#skills").append(HTMLskillStart);
// 		format(".skill-entry:last", HTMLskillName, skills.skill[i]);
// 		$(".skill-entry:last").attr('id', skills.skill[i].replace(/\s/g, ""));
// 	}
// }
//
// displaySkills();

//add fade in to elements
$(document).ready(function() {

	/* Every time the window is scrolled ... */
	$(window).scroll( function(){

		/* Check the location of each desired element */
		$('.fadeIn').each( function(i){

			var middle_of_object = $(this).position().top + $(this).outerHeight()/2;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is visible in the window, fade it in */
			if( bottom_of_window > middle_of_object ){

				$(this).animate({'opacity':'1'},1500);

			}

		});

	});

});

$("#mapDiv").append(googleMap);
