import React, { Component } from 'react';
import ResistAbsorb from '../../json/resist-absorb';

class Resistances extends Component {
    render() {
        let active = this.props.active;

        let ResSorb = ResistAbsorb.map(ele => {
            return (
                <tr>
                    <td>{ele.full_damage}</td>
                    <td>{ele.resist}</td>
                    <td>{ele.absorb}</td>
                    <td>{ele.heal}</td>
                    <td>{ele.damage_taken}</td>
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
                    <a id="difficulty" className={active === 'difficulty' ? 'basics-link active' : 'basics-link'} onClick={e => this.props.onClick(e)}>DIFFICULTIES</a>
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
                    <div className="basics-header">WHAT ARE RESISTANCES?</div>
                    <div className="basics-body">
                        <p>The elemental damage types: <span className="fire bold">Fire</span>, <span className="cold bold">Cold</span>, <span className="lightning bold">Lightning</span>, and <span className="poison bold">Poison</span>.</p>
                        <p>The other types: <span className="magic bold">Magic</span> and <span className="bold">Physical</span>.</p>
                        <p>The 'elemental' damage above can be resisted and/or absorbed.</p>
                        <p><span className="magic bold">Magic</span> has no resistance but can be absorbed.</p>
                        <p><span className="bold">Physical</span> damage can be reduced by both a percentage or a static amount.</p>
                        <p><span className="bold">Physical</span> damage can be increased by Amplify Damage or Decrepify curses that are cast by monsters or the Necromancer.</p>
                        <p>Resistances can be increased by items, runes, gems, charms, skills and shrines.</p>
                        <p>The maximum elemental resistance is 75% for each element (can be increased by items to 95%).</p>
                        <p>The minimum elemental resistance is -100% for each element.</p>
                        <p>You will take increased damage from an elemental attack if under 0%.</p>
                        <p>Your base all resist is: Normal (0), Nightmare (-40) and Hell (-100).</p>
                        <p>This means to achieve the maximum resistance of 75% in Hell, you really need 175% resistance.</p>
                        <p>There is a quest you can complete in Act 5 called Prison of Ice which will permanently increase <span className="gold bold">all resists</span> by +10%.</p>
                        <p>If you get the scroll from Prison of Ice in all difficulties it will be +30% <span className="gold bold">all resist</span>.</p>
                        <p>You can find a chart detailing resistance and absorb examples below.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">SKILLS THAT INCREASE RESISTANCE</div>
                    <div className="basics-body">
                        <p>Amazon: While not a resistance - Evade is one of the few ways to avoid elemental damage entirely.</p>
                        <p>Assassin: Fade skill gives <span className="gold bold">+resist all</span> and +damage reduction and claw block stops elemental attacks.</p>
                        <p>Barbarian: Natural Resistance passive skill gives <span className="gold bold">+resist all</span>.</p>
                        <p>Druid: Cyclone Armor is an activated skill that absorbs <span className="fire bold">fire</span>, <span className="cold bold">cold</span> and <span className="lightning bold">lightning</span> damage.</p>
                        <p>Necromancer: Bone Armor will absorb <span className="bold">physical</span> damage taken.</p>
                        <p>Paladins: Resist <span className="fire bold">Fire</span> / <span className="cold bold">Cold</span> / <span className="lightning bold">Lightning</span> Auras give the respective resist. Salvation Aura gives <span className="gold bold">all resist</span>.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">GEMS / RUNES THAT INCREASE RESISTANCE</div>
                    <div className="basics-body">
                        <span className="bold">GEMS</span>
                        <p>Diamond: <span className="gold bold">+all resist</span> (6% / 8% / 11% / 14% / 19% - shields only).</p>
                        <p>Ruby: <span className="fire bold">+fire </span> resist (12% / 16% / 22% / 28% / 40% - shields only)</p>
                        <p>Sapphire: <span className="cold bold">+cold </span> resist (12% / 16% / 22% / 28% / 40% - shields only)</p>
                        <p>Topez: <span className="lightning bold">+lightning</span> (12% / 16% / 22% / 28% / 40% - shields only)</p>
                        <p>Emerald: <span className="poison bold">+poison </span> (12% / 16% / 22% / 28% / 40% - shields only)</p>
                        <br/>
                        <span className="bold">RUNES</span>
                        <p>Um: <span className="gold bold">+all resist</span> (15% armor or 22% shield).</p>
                        <p>Ral: <span className="fire bold">+fire</span> resist (30% armor or 35% shield).</p>
                        <p>Thul: <span className="cold bold">+cold</span> resist (30% armor or 35% shield).</p>
                        <p>Ort: <span className="lightning bold">+lightning</span> resist (30% armor or 35% shield).</p>
                        <p>Tal: <span className="poison bold">+poison</span> resist (30% armor or 35% shield).</p>
                        <p>Mal: <span className="magic bold">+magic</span> damage reduced by (7) flat damage.</p>
                        <p>Sol: <span className="bold">+physical</span> damage reduced by (7) flat damage.</p>
                        <p>Ber: <span className="bold">+physical</span> damage reduced by (8%).</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">ABSORPTIONS</div>
                    <div className="basics-body">
                        <p>You can absorb damage as well with specific items, which will first heal you for the percent absorbed and then reduce the remaining damage by the absorb percent. This can be very powerful, especially if the absorb is percent based.</p>
                        <p>You still need good resistances, even with absorbs, because resistances are calculated before absorb, so if an attack would bring you to negative life after your resist check, you will die before the absorb check can even take effect.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">LIGHTNING DAMAGE</div>
                    <div className="basics-body">
                        <p><span className="lightning bold">Lightning</span> damage is typically the most deadly element in Diablo 2, and the one that characters are most likely to gear towards maximum resistance if playing in Hell.</p>
                        <p>Willowisps are perhaps the most deadly monster in Hell (and even Nightmare), and definitely one of the scariest to encounter while teleporting. They are usually clumped up and all casting lightning bolt on you at once. This can easily kill a player without maximum <span className="lightning bold">lightning</span> resistance or some form of <span className="lightning bold">lightning</span> absorb. They are most commonly found while doing Baal runs.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">DAMAGE MODIFICATION ORDER</div>
                    <div className="basics-body">
                        <p>Damage is resisted / absorbed / reduced in a specific order.</p>
                        <p>1. Energy Shield.</p>
                        <p>2. Bone Armor / Cyclone Armor.</p>
                        <p>3. Damage Reduction / Magic Damage Reduction.</p>
                        <p>4. Resistance.</p>
                        <p>5. Absorb Percent (%).</p>
                        <p>6. Absorb Flat Damage (X).</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header" id="examples">RESIST / ABSORB VS DAMAGE TAKEN - COMPARISON</div>
                    <div className="basics-body">
                        <p>The chart below will give a general idea of how absorbs and resistance work on a 1000 damage attack.</p>
                        <br/>
                        <table className="chart chart-lg">
                            <thead>
                                <tr>
                                    <th colSpan="5">RESIST / ABSORB COMPARISON</th>
                                </tr>
                                <tr>
                                    <th>INITIAL<br/>DAMAGE</th>
                                    <th>RESIST<br/>AMOUNT</th>
                                    <th>ABSORB<br/>AMOUNT</th>
                                    <th>HEAL<br/>AMOUNT</th>
                                    <th>DAMAGE<br/>TAKEN</th>
                                </tr>
                            </thead>
                            <tbody>
                                { ResSorb }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resistances;