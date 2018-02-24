/*
*** Author: Robin Staudinger ***

The skills class is the container for the skill items.
In the class we define how the skill items will appear in the app.
The skills are arranged in a circle with the first skill in the middle.
Skills calls for SkillItem with the passing the props: key, skill and style.
*/
import React, { Component } from 'react';
import WorkItem from './WorkItem';

class Work extends Component {

  render() {
    let workItems = [];
    for (var i = 0; i < this.props.work.length; i++){
      workItems.push(<WorkItem key={this.props.work[i]} work={this.props.work[i]} order={i}/>);
    }
    return (
      <div id="work">
      <h1>Work Experience</h1>
      {workItems}
      </div>
    );
  }
}

export default Work;
