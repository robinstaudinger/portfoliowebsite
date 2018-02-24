/*

*** Author: Robin Staudinger ***

The app class is the skeleton of the whole web app, as the name implies.
The function of the app is to read the dimensions of the app and define
objects.

*/

import React, { Component } from 'react';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Education from './Components/Education';

class App extends Component {
  constructor(){
    super();
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      skills: []
    }
  }

  componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}

//define the skillset
  componentWillMount(){
    this.setState({

      	 work: [{
      		"employer" : "CSC - IT Center for Science",
      		"title" : "- Web Developer, Summer Trainee",
      		"location" : "Espoo, Finland",
      		"dates" : "5/2017 - 8/2017",
      		"description" : "Web development on the Liferay portal platform, using HTML, CSS, JavaScript (jQuery and Alloy UI) and Java to create website portlets and themes.",
      		"image" : "images/csc.png",
      		"link" : "https://www.csc.fi/"
      	},
      	{
      		"employer" : "Reuter-Stolt",
      		"title" : "- Web Developer",
      		"location" : "Espoo, Finland",
      		"dates" : "8/2016",
      		"description" : "Using my skills in HTML, CSS and Wordpress I created a functioning and aesthetically pleasing website to fit the customer's needs.",
      		"image" : "images/reuter.png",
      		"link" : "http://reuter-stolt.fi/"
      	},
      	{
      		"employer" : "Self",
      		"title" : "",
      		"location" : "Espoo, Finland",
      		"dates" : "3/2012 - ",
      		"description" : "Selling apparel prints using the Spreadshirt platform. With over 8000 prints sold, I've been able to get a good financial support during my studies. My work has been designing prints for clothes, mainly using Adobe Illustrator, marketing them and running my own website.",
      		"image" : "images/spreadshirt.png",
      		"link" : "https://www.spreadshirt.com"
      	}],

      	projects : [
      	{
      		"title" : "Casino Card game",
      		"dates" : "4/2017 - 5/2017",
      		"description" : "Command line operated card game played against NPCs or other players. The game is coded in Python.",
      		"image" : "images/casino.png",
      		"link" : "https://github.com/robinstaudinger/Casino_Card_Game"
      	}],

      skills: [
      "Software Development",
      "Robotics",
      "Artificial Intelligence",
      "Web Development",
      "Management",
      "Problem Solving",
      "Matlab"
    ],

      education: {
    	"schools" : [
    	{
    		"name" : "Aalto University",
    		"location" : "Espoo, Finland",
    		"degree": "MSc",
    		"major": "Robotics",
    		"dates" : "2017-",
    		"link" : "http://www.aalto.fi"
    	},
    	{
    		"name" : "Pace University",
    		"location" : "New York, NY",
    		"degree": "Exchange studies",
    		"major": "Computer Science",
    		"dates" : 2017,
    		"link" : "http://www.pace.edu"
    	},
    	{
    		"name" : "Aalto University",
    		"location" : "Espoo, Finland",
    		"degree": "BSc",
    		"major": "Automation and systems technology",
    		"dates" : "2014-2017",
    		"link" : "http://www.aalto.fi"
    	}
    	],
    	"onlineClasses" : [
    	{
    		"title" : "JavaScript Basics",
    		"school" : "Udacity",
    		"dates" : 2017,
    		"link" : "https://udacity.com"
    	},
    	{
    		"title" : "Android programming",
    		"school" : "Udacity",
    		"dates" : 2017,
    		"link" : "https://udacity.com"
    	},
    	{
    		"title" : "Java Object Oriented Programming 1",
    		"school" : "University of Helsinki",
    		"dates" : 2016,
    		"link" : "http://mooc.fi/"
    	}
    	]
    }

    });
  }

// what will actually show on the page - call different classes that will handle
// the output to the ReactApp div.
  render() {
    return (
      <div className="ReactApp">
        <Work work={this.state.work}/>
        <Projects projects={this.state.projects} order={this.state.work.length}/>
        <div class="fadeIn" id="knowledge">
          <Skills skills={this.state.skills} width = {this.state.width}/>
          <Education education={this.state.education}/>
        </div>
      </div>
    );
  }
}

export default App;
