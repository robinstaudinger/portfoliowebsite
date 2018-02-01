import React, { Component } from 'react';

class SkillItem extends Component {
  render() {
    return (
      <div key={this.props.skill} className={'skill-entry'} style={this.props.idStyle} >
      <strong><span>{this.props.skill}</span></strong>
      </div>
    );
  }
}

export default SkillItem;
