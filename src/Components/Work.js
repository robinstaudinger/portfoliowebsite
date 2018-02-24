/*
*** Author: Robin Staudinger ***

The Work class is the container for the work items.
In the class we define how the work items will appear in the app.
@props work - list of work objects
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
