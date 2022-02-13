import React, {Component} from 'react';
import Skills from '../../../json/classes/skills-by-level';

class Amazon extends Component {
    render() {
        let skillNames = Object.keys(Skills.amazon.skill_names).map(key => {
            for (let i = 0; i < Skills.amazon.skill_names.length; i++) {
                return (
                    <th>
                        {Skills.amazon.skill_names[i]}
                    </th>
                ); 
            }            
        });

        return (
            <div id="base-container">
                <div id="main-title">AMAZON</div>
                <div id="classes-nav">
                    <a class="classes-link" href="/classes/assassin"><img class="classes-icon" src="images/classes/assassin_icon.png" /></a>
                    <a class="classes-link"><img class="classes-icon active" src="images/classes/amazon_icon.png" /></a>
                    <a class="classes-link" href="/classes/druid"><img class="classes-icon" src="images/classes/druid_icon.png" /></a>
                    <a class="classes-link" href="/classes/paladin"><img class="classes-icon" src="images/classes/paladin_icon.png" /></a>
                    <a class="classes-link" href="/classes/necromancer"><img class="classes-icon" src="images/classes/necromancer_icon.png" /></a>
                    <a class="classes-link" href="/classes/barbarian"><img class="classes-icon" src="images/classes/barbarian_icon.png" /></a>
                    <a class="classes-link" href="/classes/sorceress"><img class="classes-icon" src="images/classes/sorceress_icon.png" /></a>
                </div>
                <div class="classes">
                    <div class="classes-header">AMAZON SKILLS</div>
                    <div class="classes-body">
                        <table class="chart">
                        <thead>
                            <tr>
                                <th colspan="4">SKILLS BY LEVEL</th>
                            </tr>
                            <tr>
                                { skillNames }
                            </tr>
                        </thead>
                        <tbody>
                            {/* {% for value in skills_list.skills %}
                            <tr>
                            <td>{{ value[0] }}</td>
                            <td>{{ value[1] }}</td>
                            <td>{{ value[2] }}</td>
                            <td>{{ value[3] }}</td>
                            </tr>
                            {% endfor %} */}
                        </tbody>
                        </table>
                    </div>
                    </div>
                    <div class="classes">
                    <div class="classes-header">AMAZON ATTRIBUTES</div>
                    <div class="classes-body">
                        <table class="chart">
                        <thead>
                            <tr>
                            <th colspan="4">ATTRIBUTES BREAKDOWN</th>
                            </tr>
                            <tr>
                            {/* {% for value in attributes.attribute_names %}
                                <th>
                                {{ value }}
                                </th>
                            {% endfor %} */}
                            {/* 
                            skills_by_level = {}
                            for key, value in skills_by_level_json[class_name].items():
                                skills_by_level[key] = [value][0]
                            return skills_by_level
                            */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* {% for value in attributes.attributes %}
                            <tr>
                            <td>{{ value[0] }}</td>
                            <td>{{ value[1] }}</td>
                            <td>{{ value[2] }}</td>
                            <td>{{ value[3] }}</td>
                            </tr>
                            {% endfor %} */}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Amazon;