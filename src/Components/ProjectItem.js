/*
*** Author: Robin Staudinger ***

ProjectItem creates the structure for each project element.
@props project contains a list of project objects
*/
import React, { Component } from 'react';

class ProjectItem extends Component {

  render() {
    if (this.props.order % 2 === 1){ //image on the right for even numbers
      return (
        <div key={this.props.project} className={'projectEntry fadeIn'}>
        <div class="projectInfo">
        <h2><a href={this.props.project.link} target="_blank">{this.props.project.title}</a></h2>
        <div class="dateText">{this.props.project.dates}</div>
        <p>{this.props.project.description}</p>
        </div>
        <img class="projectImage" src={this.props.project.image}/>
        </div>
      );
    }else{
      return (
        <div key={this.props.project} className={'projectEntry fadeIn'}>
        <img class="projectImage" src={this.props.project.image}/>
        <div class="projectInfo">
        <h2><a href={this.props.project.link} target="_blank">{this.props.project.title}</a></h2>
        <div class="dateText">{this.props.project.dates}</div>
        <p>{this.props.project.description}</p>
        </div>
        </div>
      );
    }
  }
}

export default ProjectItem;
