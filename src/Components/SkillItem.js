import React, { Component } from 'react';
/*
SkillItem returns the skill item with proper styling.
*/
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
