/*

*** Author: Robin Staudinger ***

The Educations class is the container for the education items.
In the class we define how the education items will appear in the app.
@props education - list of school and online class lists of objects

*/

import React, { Component } from 'react';
import EducationItem from './EducationItem';

export default class Education extends Component {

  render() {
    let schoolItems = [];
    let onlineItems = [];
    for (var i = 0; i < this.props.education.schools.length; i++){
      schoolItems.push(<EducationItem key={this.props.education.schools[i]} school={this.props.education.schools[i]}/>);
    }
    for (i = 0; i < this.props.education.onlineClasses.length; i++){
      onlineItems.push(<EducationItem key={this.props.education.onlineClasses[i]} onlineClasses={this.props.education.onlineClasses[i]}/>);
    }
    return (
      <div id="education">
      <h1>Education</h1>
      {schoolItems}
      <h3>Online Classes</h3>
      {onlineItems}
      </div>
    );
  }
}
