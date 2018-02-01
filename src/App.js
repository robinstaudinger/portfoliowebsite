import React, { Component } from 'react';
import logo from './logo.svg';
import Skills from './Components/Skills';

class App extends Component {
  constructor(){
    super();
    this.state = {
      skills: []
    }
  }

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
  render() {
    return (
      <div className="ReactApp">
      <Skills skills={this.state.skills}/>
      </div>
    );
  }
}

export default App;
