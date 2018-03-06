/*

*** Author: Robin Staudinger ***

The Projects class is the container for the project items.
In the class we define how the project items will appear in the app.
@props projects - list of project objects
@props order - gives the order of the object on the site to help
              with the alignment
*/

import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export default class Projects extends Component {

  render() {
    let projectItems = [];
    for (var i = 0; i < this.props.projects.length; i++){
      projectItems.push(<ProjectItem key={this.props.projects[i]} project={this.props.projects[i]} order={this.props.order + i+1}/>);
    }
    return (
      <div id="projects">
      <h1>Projects</h1>
      {projectItems}
      </div>
    );
  }
}
