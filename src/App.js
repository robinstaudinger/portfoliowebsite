import React, { Component } from 'react';
import Skills from './Components/Skills';
/*
The app class is the skeleton of the whole app, as the name implies.
The function of the app is to read the dimensions of the app and set values
for the skills.
App calls for Skills giving it the list of skills and the width of the window.
*/
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
    skills: [
      "Software Development",
      "Robotics",
      "Artificial Intelligence",
      "Web Development",
      "Management",
      "Problem Solving",
      "Matlab"
    ]
    });
  }

//what will actually show on the page
  render() {
    return (
      <div className="ReactApp">
      <Skills skills={this.state.skills} width = {this.state.width}/>
      </div>
    );
  }
}

export default App;
