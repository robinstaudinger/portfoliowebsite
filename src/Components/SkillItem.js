/*

*** Author: Robin Staudinger ***

SkillItem returns the skill item with proper styling.
@props skill - the skill object
@props idstyle - the styling of the object
*/

import React, { Component } from 'react';

class SkillItem extends Component {
  render() {
    return (
      <div key={this.props.skill} className={'skillEntry'} style={this.props.idStyle} >
      <strong><span>{this.props.skill}</span></strong>
      </div>
    );
  }
}

export default SkillItem;
