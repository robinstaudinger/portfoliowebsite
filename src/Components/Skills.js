import React, { Component } from 'react';
import SkillItem from './SkillItem';

class Skills extends Component {

  render() {
    let skillItems = [];
    let w = 600;
    let h = 300;
    let cx = w/2;
    let cy = h/2;
    var x, y, angle, idStyle;

    //Make objects appear in a circle
    for (var i = 0; i < this.props.skills.length; i++){
      angle = (i * 2 * Math.PI / (this.props.skills.length-1));
      x = cx + 120 * Math.cos(angle);
      y = cy + 120 * Math.sin(angle);

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
      <div className="Skills">
      <h1>Skills</h1>
      <div className="skillCloud">
      {skillItems}
      </div>
      </div>
    );
  }
}

export default Skills;
