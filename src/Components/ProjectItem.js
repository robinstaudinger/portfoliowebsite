/*
*** Author: Robin Staudinger ***

ProjectItem creates the structure for each project element.
@props project contains a list of project objects
*/
import React, { Component } from 'react';

export default class ProjectItem extends Component {
  constructor(){
    super();
    //automatically crop some of the image on the edges of the screen
    this.state = {
      imgLeft: {left: '-10%'},
      imgRight: {right: '-10%'}
    };
  }

handleMouseOver(){
  this.setState({
    imgLeft:{
    left: '-10%',
    transition: 'all .4s ease-in',
    transform: 'scale(1.3)'
  },
    imgRight:{
    right: '-10%',
    transition: 'all .4s ease-in',
    transform: 'scale(1.3)'
  }
});
}

handleMouseOut(){
  this.setState({
    imgLeft:{left: '-10%', transition: 'all .4s ease-out'},
    imgRight:{right: '-10%', transition: 'all .4s ease-out'}
});
}

  render() {

    if (this.props.order % 2 === 1){ //image on the left for even numbers
      return (
        <div key={this.props.project} className={'projectEntry fadeIn'} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
        <div class="projectInfo">
        <h2><a href={this.props.project.link} target="_blank">{this.props.project.title}</a></h2>
        <div class="dateText">{this.props.project.dates}</div>
        <p>{this.props.project.description}</p>
        </div>
        <div class="imgContainer" id={this.props.project.image} style={this.state.imgRight}>
        <img class="projectImage" src={this.props.project.image} alt={this.props.project.title} />
        </div>
        </div>
      );
    }else{
      return (
        <div key={this.props.project} className={'projectEntry fadeIn'} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
        <div class="imgContainer" id={this.props.project.image} style={this.state.imgLeft}>
        <img class="projectImage" src={this.props.project.image} alt={this.props.project.title} />
        </div>
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
