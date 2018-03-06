/*
*** Author: Robin Staudinger ***

WorkItem creates the structure for each work element.
@props work -  work object
@props order - gives the order of the object on the site to help
              with the alignment
*/
import React, { Component } from 'react';

export default class WorkItem extends Component {
  constructor(props){
    super(props);
      this.state = {img:{}};
  }

  handleMouseOver(){
    this.setState({
      img:{
      transition: 'all .4s ease-in',
      transform: 'scale(1.3)'
    }
  });
  }

  handleMouseOut(){
    this.setState({
      img:{transition: 'all .4s ease-out'}
  });
  }
  render() {

    if (this.props.order % 2 === 0){ //image on the right for even numbers
      return (
        <div key={this.props.work} className={'workEntry fadeIn'} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
        <div class="workInfo">
        <h2><a href={this.props.work.link} target="_blank">{this.props.work.employer} {this.props.work.title}</a></h2>
        <div class="dateText">{this.props.work.dates}</div>
        <p>{this.props.work.description}</p>
        </div>
        <img class="workImage" src={this.props.work.image} alt={this.props.work.title} style={this.state.img}/>
        </div>
      );
    }

    else{
      return (
        <div key={this.props.work} className={'workEntry fadeIn'} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
        <img class="workImage" src={this.props.work.image} alt={this.props.work.title} style={this.state.img}/>
        <div class="workInfo">
        <h2><a href={this.props.work.link} target="_blank">{this.props.work.employer} {this.props.work.title}</a></h2>
        <div class="dateText">{this.props.work.dates}</div>
        <p>{this.props.work.description}</p>
        </div>
        </div>
      );
    }
  }
}
