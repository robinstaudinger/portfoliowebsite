/*

*** Author: Robin Staudinger ***

EducationItem returns the education item with proper styling.
@props school - the school object
@props onlineClasses - the online class object
*/

import React, { Component } from 'react';

export default class EducationItem extends Component {
  render() {
    if (this.props.school){
      return (
        <div key={this.props.school} className={'educationEntry'}>
        <a href={this.props.school.link} target="_blank">{this.props.school.name} -- {this.props.school.degree}</a>
        <div class="dateText">{this.props.school.dates}</div>
        <div class="locationText">{this.props.school.location}</div>
        <em>Major: {this.props.school.major}</em>
        </div>
      );
    }
    if (this.props.onlineClasses){
      return (
        <div key={this.props.school} className={'educationEntry'}>
        <a href={this.props.onlineClasses.link} target="_blank">{this.props.onlineClasses.title} - {this.props.onlineClasses.school}</a>
        <div class="dateText">{this.props.onlineClasses.dates}</div>
        </div>
      );
    }
  }
}
