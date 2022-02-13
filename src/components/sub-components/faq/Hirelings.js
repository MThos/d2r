import React, { Component } from 'react';

class Hirelings extends Component {
    render() {
        let active = this.props.active;

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
                    <div className="basics-header">WHAT ARE HIRELINGS?</div>
                    <div className="basics-body">
                        <p>Hirelings (otherwise known as mercs), are NPCs you can hire to play in your party.</p>
                        <p>You can only have one at a time.</p>
                        <p>There are 4 Hirelings: Act I: Rogues, Act II: Desert Mercs, Act III: Ironwolves and Act V: Barbarians</p>
                        <p>The most useful hireling for a majority of players is the Act II: Desert Mercs because of their auras.</p>
                        <p>They follow you between acts, waypoints, town portals and even games.</p>
                        <p>You can access Hirelings once you complete the second quest of Act I or when you become level 8.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">HIRELING STATISTICS</div>
                    <div className="basics-body">
                        <p>Hirelings level and improve in power as they do.</p>
                        <p>When you hire a merc you are charged a one-time fee of gold.</p>
                        <p>They cannot level up higher than you, nor can they be purchased as a higher level.</p>
                        <p>You will get experience from your mercenaries kills.</p>
                        <p>If you hire a new mercenary, be sure to take items off your current mercenary or you will lose them.</p>
                        <p>Hirelings have their own attributes: Strength, Dexterity, Health, Damage, Defense and Experience.</p>
                        <p>As they level, their will improve their attributes and will also increase their skills/abilities.</p>
                        <p>Their maximum level is 98.</p>
                        <p>They gain resistances naturally as they level, but are also subject to the Nightmare (-40) and Hell (-100) resistance penalties.</p>
                        <p>Hireling min-damage: ((weapon min) * (str + 100) / 100) + base min.</p>
                        <p>Hireling max-damage: ((weapon max) * (str + 100) / 100) + base max.</p>
                        <p>Hirelings deal less damage against bosses: Normal (50%), Nightmare (35%) and Hell (25%) and they take 1000% more damage from Act bosses.</p>
                        <p>Hirelings will deal 25% damage in player-vs-player combat.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">ACT I - ROGUE SCOUTS</div>
                    <div className="basics-body">
                        <p>Available to purchase from Kashya in Rogue Encampment.</p>
                        <p>They are a ranged support and shoot arrows.</p>
                        <p>Equipment: Armor, Helms, Bows (no Crossbows) and no Amazon-only equipment.</p>
                        <br/>
                        <span className="bold">SKILL OPTIONS</span> 
                        <p>Cold Arrow.</p>
                        <p>Fire Arrow.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">ACT II - DESERT MERCENARIES</div>
                    <div className="basics-body">
                        <p>Available to purchase from Greiz in Lut Gholein.</p>
                        <p>They are a melee support and jab with spears or polearms.</p>
                        <p>Equipment: Armor, Helms, Spears, Polearms and Javelins.</p>
                        <p>The most popular hireling due to the powerful aura they provide.</p>
                        <br/>
                        <span className="bold">SKILL OPTIONS</span> 
                        <p>Normal: Prayer / Defiance / Blessed Aim.</p>
                        <p>Nightmare: Thorns / Holy Freeze / Might.</p>
                        <p>Hell: Prayer / Defiance / Blessed Aim.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">ACT III - IRONWOLVES</div>
                    <div className="basics-body">
                        <p>Available to purchase from Asheara in Kurast.</p>
                        <p>They are a ranged support and cast magic.</p>
                        <p>Equipment: Armor, Helms, Shields and Swords.</p>
                        <br/>
                        <span className="bold">SKILL OPTIONS</span> 
                        <p>Charged Bolt / Lightning</p>
                        <p>Glacial Spike / Ice Blast / Frozen Armor</p>
                        <p>Inferno / Fireball</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">ACT V - BARBARIANS</div>
                    <div className="basics-body">
                        <p>Available to purchase from Qual-Kehk in Harrogath.</p>
                        <p>They are a melee support and hack and slash.</p>
                        <p>Equipment: Armor, Helms (including Barbarian-only), Swords.</p>
                        <br/>
                        <span className="bold">SKILL OPTIONS</span> 
                        <p>Bash / Stun.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hirelings;