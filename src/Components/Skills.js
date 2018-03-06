import React, { Component } from 'react';
import SkillItem from './SkillItem';
/*
The skills class is the container for the skill items.
In the class we define how the skill items will appear in the app.
The skills are arranged in a circle with the first skill in the middle.
Skills calls for SkillItem with the passing the props: key, skill and style.
*/
export default class Skills extends Component {

  render() {
    let skillItems = [];
    let w = this.props.width * 0.6 - 150; //width of the container is 60%
    let r = 130;
    if(this.props.width < 750){ // app is full width now
      w = this.props.width - 150;
    }

    let h = 300;
    let cx = w/2;
    let cy = h/2;
    var x, y, angle, idStyle;

    //Make objects appear in a circle
    for (var i = 0; i < this.props.skills.length; i++){
      angle = (i * 2 * Math.PI / (this.props.skills.length-1));
      x = cx + r * Math.cos(angle);
      y = cy + r * Math.sin(angle);

      //center the first object
      if (i === 0){
        x = cx;
        y = cy;
        idStyle = {
          top: y,
          left: x,
          zIndex: 1,
        };
      }else{
        idStyle = {
          top: y,
          left: x,
        };
      }
      skillItems.push(<SkillItem key={this.props.skills[i]} skill={this.props.skills[i]} idStyle={idStyle}/>);
    }
    return (
      <div id="skills">
      <h1>Skills</h1>
      <div className="skillCloud">
      {skillItems}
      </div>
      </div>
    );
  }
}
