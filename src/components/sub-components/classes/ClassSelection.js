import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

class ClassSelection extends Component {
    render() {
        return (
            <div id="base-container">
                <div id="main-title">CLASSES</div>
                <div id="classes-select">- CHOOSE YOUR CLASS -</div>
                <div id="classes-selection">
                    <img id="classes-img" src="images/classes/d2characters.png" usemap="#image-map" />
                    <map name="image-map">
                        <area id="assassin" alt="Assassin" data-tip="Assassin" onClick={e => this.props.onClick(e)} coords="0,1,0,305,126,303,94,102,115,1" shape="poly" />
                        <area id="amazon" alt="Amazon" data-tip="Amazon" onClick={e => this.props.onClick(e)} coords="117,3,98,106,131,302,261,305,277,100,266,3" shape="poly" />
                        <area id="druid" alt="Druid" data-tip="Druid" onClick={e => this.props.onClick(e)} coords="272,2,281,103,266,304,387,306,375,194,429,3" shape="poly" />
                        <area id="paladin" alt="Paladin" data-tip="Paladin" onClick={e => this.props.onClick(e)} coords="433,3,377,197,392,306,568,307,572,101,547,3" shape="poly" />
                        <area id="necromancer" alt="Necromancer" data-tip="Necromancer" onClick={e => this.props.onClick(e)} coords="550,4,576,102,571,306,705,307,698,134,706,4" shape="poly" />
                        <area id="barbarian" alt="Barbarian" data-tip="Barbarian" onClick={e => this.props.onClick(e)} coords="714,2,701,143,709,306,859,307,905,176,833,1" shape="poly" />
                        <area id="sorceress" alt="Sorceress" data-tip="Sorceress" onClick={e => this.props.onClick(e)} coords="839,2,908,174,865,306,992,308,989,2" shape="poly" />
                    </map>      
                </div>
                <ReactTooltip 
                    border="true" 
                    place="bottom"
                    backgroundColor="black" />
            </div>            
        );
    }
}

export default ClassSelection;