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
    this.state = {
      img:{}
    };
    this.containerLeft ={justifyContent: 'flex-start'};
    this.containerRight ={justifyContent: 'flex-end'};
  }

  handleMouseOver(){
    this.setState({
      img:{
        transition: 'all .4s ease-in',
        transform: 'scale(1.1)'
      }
    });
  }

  handleMouseOut(){
    this.setState({
      img:{transition: 'all .4s ease-out'}
    });
  }
  render() {

    if (this.props.order % 2 === 1){ //image on the left for even numbers
      return (
        <div key={this.props.work} className={'workEntry fadeIn hvr-float-shadow'} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
          <div class="workInfo">
            <h2><a href={this.props.work.link} target="_blank">{this.props.work.employer} {this.props.work.title}</a></h2>
            <div class="dateText">{this.props.work.dates}</div>
            <p>{this.props.work.description}</p>
          </div>
          <div class="imgContainer " id={this.props.work.image}>
            <img class="workImage" src={this.props.work.image} alt={this.props.work.title}/>
          </div>
        </div>
      );
    }

    else{
      return (
        <div key={this.props.work} className={'workEntry fadeIn hvr-float-shadow'} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
          <div class="imgContainer" id={this.props.work.image}>
            <img class="workImage" src={this.props.work.image} alt={this.props.work.title}/>
          </div>
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
