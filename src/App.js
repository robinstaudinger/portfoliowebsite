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

export default class App extends Component {
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
      		"employer" : "Vaisala Oyj",
      		"title" : "- AI Integration, Giant Leap Intern",
      		"location" : "Vantaa, Finland",
      		"dates" : "5/2018 - 8/2018",
      		"description" : "In my project, I had to transfer my academic knowledge of artificial intelligence and machine learning to apply them in the business world. My main task was to find use cases for AI in Vaisala processes, in doing so, I had to make sure that the employees of Vaisala really understood the role and capabilities of AI. I then further proceeded with a couple of the use cases, assessing the viability based on the existing data as well as the ROI. Logically a part of the project was to assess the current state-of-the-art technologies available and their suitability to Vaisala, including some hands-on experience of IBM Watson and H2O.ai.",
          "skills" : ["AI", "Project Management", "ML", "AutoML", "Python", "Public Speaking", "Research"]
          "image" : "images/vaisala.png",
      		"link" : "https://www.vaisala.com/"
      	},
        {
      		"employer" : "CSC - IT Center for Science",
      		"title" : "- Web Developer, Summer Trainee",
      		"location" : "Espoo, Finland",
      		"dates" : "5/2017 - 8/2017",
      		"description" : "Web development on the Liferay portal platform, using HTML, CSS, JavaScript (jQuery and Alloy UI) and Java EE to create website portlets and themes.",
          "skills" : ["Web Development", "Java", "JavaScript"]
          "image" : "images/csc.png",
      		"link" : "https://www.csc.fi/"
      	},
      	{
      		"employer" : "Reuter-Stolt",
      		"title" : "- Web Developer",
      		"location" : "Espoo, Finland",
      		"dates" : "8/2016",
      		"description" : "Using my skills in HTML, CSS and Wordpress I created a functioning and aesthetically pleasing website to fit the customer's needs.",
          "skills" : ["Web Development", "Project Management"]
          "image" : "images/reuter.png",
      		"link" : "http://reuter-stolt.fi/"
      	},
      	{
      		"employer" : "Self",
      		"title" : "",
      		"location" : "Espoo, Finland",
      		"dates" : "3/2012 - 3/2017",
      		"description" : "Selling apparel prints using the Spreadshirt platform. With over 8000 prints sold, I've been able to get a good financial support during my studies. My work has been designing prints for clothes, marketing them and running my own website.",
          "skills" : ["Digital Marketing", "Web Development", "Creativity"]
          "image" : "images/spreadshirt.png",
      		"link" : "https://www.spreadshirt.com"
      	}],

      	projects : [
          {
        		"title" : "Real Estate Investment Tool",
        		"dates" : "12/2018 -",
        		"description" : "Identifies the best investment opportunities in the real estate market. Delivers high interest and cashflowing apartments, solely based on rental income.",
            "skills" : ["Python","Web Scraping", "Big Data", "Project Management", "NoSQL"]
            "image" : "images/real_estate.jpg",
        		"link" : "#"
        	},
          {
        		"title" : "SAP0 - Junction 2018",
        		"dates" : "11/2018",
        		"description" : "A concept of creating a smoother customer experience using traditional phone calls. Implementation includes speech to text and natural language processing.",
            "skills" : ["Python", "Flask", "AI", "NLP", "ML", "Project Management", "Leadership"]
            "image" : "images/SAP0.png",
        		"link" : "https://github.com/robinstaudinger/Junction2018_winwinsolution"
        	},
      	{
      		"title" : "Casino Card game",
      		"dates" : "4/2017 - 5/2017",
      		"description" : "Command line operated card game played against NPCs or other players. The game is coded in Python.",
          "skills" : ["Python", "Project Management"]
          "image" : "images/casino.png",
      		"link" : "https://github.com/robinstaudinger/Casino_Card_Game"
      	}],

      skills: [
      "Software Development",
      "Robotics",
      "Artificial Intelligence",
      "Web Development",
      "Project Management",
      "Problem Solving",
      "Data Science"
    ],

      education: {
    	"schools" : [
    	{
    		"name" : "Aalto University",
    		"location" : "Espoo, Finland",
    		"degree": "MSc",
    		"major": "Translational Engineering",
        "gpa": 3.56,
        "maxGrade": 5,
    		"dates" : "2017-",
    		"link" : "http://www.aalto.fi"
    	},
    	{
    		"name" : "Pace University",
    		"location" : "New York, NY",
    		"degree": "Exchange studies",
    		"major": "Computer Science",
        "gpa": 3.8,
        "maxGrade": 4,
    		"dates" : 2017,
    		"link" : "http://www.pace.edu"
    	},
    	{
    		"name" : "Aalto University",
    		"location" : "Espoo, Finland",
    		"degree": "BSc",
    		"major": "Automation and systems technology",
        "gpa": 2.4,
        "maxGrade": 5,
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
