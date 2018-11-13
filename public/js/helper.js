/*
 *** Author: Robin Staudinger ***
*/


/*
These are HTML strings.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>'; //delete <hr> if role added
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flexItem"><span class="blueText">%contact%</span><span class="lightBlueText">%data%</span></li>';
var HTMLemail = '<li class="flexItem"><span class="blueText">email</span><a href="mailto:%data%"><span class="lightBlueText">%data%</span></a></li>';
var HTMLlinkedin = '<li class="flexItem"><a href="%data%"><img src="images/linkedin_icon.png"></a></li>';
var HTMLgithub = '<li class="flexItem"><a href="%data%"><img src="images/github_icon.ico"></a></li>';
var HTMLkaggle = '<li class="flexItem"><a href="%data%"><img src="images/kaggle.png"></a></li>';
var HTMLblog = '<li class="flexItem"><span class="blueText">blog</span><span class="lightBlueText">%data%</span></li>';
var HTMLlocation = '<li class="flexItem"><span class="blueText">location</span><span class="lightBlueText">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcomeMessage">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skillsPreview" class="flexBox"></ul>';
var HTMLskills = '<li class="flexItem"><span class="lightBlueText">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry fade-in"></div>';
var HTMLworkInfo = '<div class="work-info"></div>';
var HTMLworkEmployer = '<h2><a href="#" target="_blank">%data%';
var HTMLworkTitle = ' - %data%</a></h2>';
var HTMLworkDates = '<div class="dateText">%data%</div>';
var HTMLworkLocation = '<div class="locationText">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';
var HTMLworkImage = '<img class="work-image" src="%data%">';

var HTMLprojectStart = '<div class="project-entry fade-in"></div>';
var HTMLprojectInfo = '<div class="project-info"></div>';
var HTMLprojectTitle = '<h2><a href="#" target="_blank">%data%</a></h2>';
var HTMLprojectDates = '<div class="dateText">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img class="project-image" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_blank">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="dateText">%data%</div>';
var HTMLschoolLocation = '<div class="locationText">%data%</div>';
var HTMLschoolMajor = '<em>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="dateText">%data%</div>';
var HTMLonlineURL = '<br><a href="#" target="_blank">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

var HTMLskillStart = '<div class="skill-entry"></div>';
var HTMLskillName = '<div class="skill-name">%data%</div>';

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.

var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
  {
    x: x,
    y: y
  }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});
*/



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData. .location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());

     //zoom to marker on click
     marker.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    });

   }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.fitBounds(mapBounds);
          }, 10000);
        });

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);


}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
