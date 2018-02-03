import React, { Component } from 'react';
import Skills from './Components/Skills';

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
      <Skills skills={this.state.skills} width = {this.state.width}/>
      </div>
    );
  }
}

export default App;
