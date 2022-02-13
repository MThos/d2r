import React, { Component } from 'react';
import ExpAbove25 from '../../../json/faq/exp-above-25';
import ExpBelow25 from '../../../json/faq/exp-below-25';
import ExpPerLevel50 from '../../../json/faq/exp-per-level-50';
import ExpPerLevel99 from '../../../json/faq/exp-per-level-99';

class Experience extends Component {
    render() {
        let active = this.props.active;

        let ExpAbove = ExpAbove25.map(ele => {
            return (
                <tr>
                    <td>{ele.level_diff}</td>
                    <td>{ele.exp}</td>
                </tr>
            );
        });

        let ExpBelow = ExpBelow25.map(ele => {
            return (
                <tr>
                    <td>{ele.level_diff}</td>
                    <td>{ele.exp}</td>
                </tr>
            );
        });

        let ExpLevel50 = ExpPerLevel50.map(ele => {
            return (
                <tr>
                    <td>{ele.level}</td>
                    <td>{ele.exp}</td>
                    <td>{ele.exp_needed}</td>
                </tr>
            );
        });

        let ExpLevel99 = ExpPerLevel99.map(ele => {
            return (
                <tr>
                    <td>{ele.level}</td>
                    <td>{ele.exp}</td>
                    <td>{ele.exp_needed}</td>
                </tr>
            );
        });

        return (
            <div id="base-container">
                <div id="main-title">FREQUENTLY ASKED QUESTIONS</div>
                <div id="basics-nav">
                    <a id="basics" className={active === 'basics' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>BASICS</a>
                    <a id="experience" className={active === 'experience' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>EXPERIENCE</a>
                    <a id="resistances" className={active === 'resistances' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>RESISTANCES</a>
                    <a id="difficulty" className={active === 'difficulty' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>DIFFICULTY</a>
                    <a id="gambling" className={active === 'gambling' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>GAMBLING</a>
                    <a id="hirelings" className={active === 'hirelings' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>HIRELINGS</a>
                    <a id="attributes" className={active === 'attributes' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>ATTRIBUTES</a>
                    <a id="realm" className={active === 'realm' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>REALM TYPES</a>
                    <a id="pvp" className={active === 'pvp' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>PVP</a>
                    <a id="controls" className={active === 'controls' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>CONTROLS</a>
                    <a id="hardcore" className={active === 'hardcore' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>HARDCORE</a>
                    <a id="trading" className={active === 'trading' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>TRADING</a>
                    <a id="ubers" className={active === 'ubers' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>UBERS</a>
                    <a id="parties" className={active === 'parties' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>PARTIES</a>
                    <a id="d2r" className={active === 'd2r' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>D2R</a>
                    <a id="patches" className={active === 'patches' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>PATCHES</a>
                </div>
                <div className="basics">
                    <div className="basics-header">WHAT IS EXPERIENCE?</div>
                    <div className="basics-body">
                        <p>Experience is what you gain for killing monsters.</p>
                        <p>You gain more experience for being in a party.</p>
                        <p>You <span className="bold upper">do not</span> gain experience for killing a monster that was resurrected by another monster.</p>
                        <p>Hirelings (Mercenaries) killing blows will give you experience.</p>
                        <p>The later levels (Level 97+) start requiring an enormous amount of monster kills.</p>
                        <p>Only two items provide increased experience: Annihilus Charm (5-10%) and Ondal's Staff (5%).</p>
                        <p>The chart with the amount of experience required per level can be found below.</p>
                        <p>The chart with the amount of experience you will get based on your level vs monster level can be found below.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">EXPERIENCE IN A PARTY</div>
                    <div className="basics-body">
                        <p>If you aren't in a party, whoever gets the killing blow on a monster is awarded the experience.</p>
                        <p>If you are in a party, experience for killing a monster is split evenly among all party members within ~2 screens of the monsters death.</p>
                        <p>Monster experience and life will increase with more players in the game. This gives more risk but more reward. As people join the game, the monsters become harder and as they leave they become easier. This happens the moment someone leaves or joins.</p>
                        <p>Life is increased by: (BaseLife * (n + 1) / 2)</p>
                        <p>Experience is increased by: (x * (n + 1) / 2)</p> 
                        <p>x = base experience and n = number of players.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">EXPERIENCE LOSS (NIGHTMARE AND HELL ONLY!)</div>
                    <div className="basics-body">
                        <p>You <span className="upper bold">will</span> lose experience when you die in Diablo 2 - <span className="bold">Nightmare</span> or <span className="bold">Hell</span> game modes.</p>
                        <p>You can <span className="upper bold">never</span> lose a level from dying.</p>
                        <p>The experience loss is: Nightmare = 5% and Hell = 10%.</p>
                        <p>The loss in experience is the difference between your current level and the next level.</p>
                        <p>Example: If you reached level X with 1,000,000 experience and you would reach level X+1 at 2,000,000 experience, then the penalty would be 5% or 10% of 2,000,000 minus 1,000,000. Calculation = (2,000,000 - 1,000,000) * 0.05 (or 0.10)</p>
                        <p>You can gain back some of your lost experience. If you recover your corpse at the location it died in the game, you will <span className="bold upper">recover 75%</span> of your lost experience. If you exit the game before recovering your body, you will lose the entire experience you lost on death.</p> 
                        <p>This loss of experience isn't as important at lower levels, but once you get to much higher levels (90+) this becomes a significant amount of lost experience and time.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header" id="exp-level-diff">EXPERIENCE GAINED BY LEVEL DIFFERENCE</div>
                    <div className="basics-body">
                        <p>If you kill monsters with a much higher or lower monster level from you, you will get a limited amount of experience.</p>
                        <p>These charts will give the percent of experience you can expect depending on your level vs the monster.</p>
                        <br/>
                        <div className="basics-flex">
                            <table className="chart">
                                <thead>
                                <tr>
                                    <th colSpan="2">BETWEEN LEVEL 1 AND 25</th>
                                </tr>
                                <tr>
                                    <th width="50">LEVEL<br/>DIFFERENCE</th>
                                    <th width="50">EXPERIENCE<br/>GAINED</th>
                                </tr>
                                </thead>
                                <tbody>
                                { ExpBelow }
                                </tbody>
                            </table>
                            <table className="chart">
                                <thead>
                                    <tr>
                                        <th colSpan="2">BETWEEN LEVEL 25 AND 99</th>
                                    </tr>
                                    <tr>
                                        <th width="50">LEVEL<br/>DIFFERENCE</th>
                                        <th width="50">EXPERIENCE<br/>GAINED</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { ExpAbove }
                                </tbody>
                            </table>
                        </div>                        
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header" id="exp-per-level">EXPERIENCE PER LEVEL</div>
                    <div className="basics-body">
                        <p>The amount of experience needed per level to reach level 99 - it becomes very difficult after 97 due to monster levels.</p>
                        <br/>
                        <div className="basics-flex">
                            <table className="chart">
                                <thead>
                                    <tr>
                                        <th colSpan="3">REQUIRED FOR LEVEL 1 - 49</th>
                                    </tr>
                                    <tr>
                                        <th>LEVEL</th>
                                        <th>CURRENT<br/>EXPERIENCE</th>
                                        <th>EXPERIENCE<br/>NEEDED</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { ExpLevel50 }
                                </tbody>
                            </table>
                            <table className="chart">
                                <thead>
                                    <tr>
                                        <th colSpan="3">REQUIRED FOR LEVEL 50 - 99</th>
                                    </tr>
                                    <tr>
                                        <th>LEVEL</th>
                                        <th>CURRENT<br/>EXPERIENCE</th>
                                        <th>EXPERIENCE<br/>NEEDED</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { ExpLevel99 }
                                </tbody>
                            </table>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;