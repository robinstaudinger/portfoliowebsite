/*
*** Author: Robin Staudinger ***

WorkItem creates the structure for each work element.
@props work -  work object
@props order - gives the order of the object on the site to help
              with the alignment
*/
import React, { Component } from 'react';

class WorkItem extends Component {

  render() {
    if (this.props.order % 2 === 0){ //image on the right for even numbers
      return (
        <div key={this.props.work} className={'workEntry fadeIn'}>
        <div class="workInfo">
        <h2><a href={this.props.work.link} target="_blank">{this.props.work.employer} {this.props.work.title}</a></h2>
        <div class="dateText">{this.props.work.dates}</div>
        <p>{this.props.work.description}</p>
        </div>
        <img class="workImage" src={this.props.work.image}/>
        </div>
      );
    }else{
      return (
        <div key={this.props.work} className={'workEntry fadeIn'}>
        <img class="workImage" src={this.props.work.image}/>
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

export default WorkItem;
