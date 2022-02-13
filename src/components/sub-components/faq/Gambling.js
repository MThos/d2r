import React, { Component } from 'react';

class Gambling extends Component {
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
                    <div className="basics-header">WHAT IS GAMBLING?</div>
                    <div className="basics-body">
                        <p>In every Acts main town, there will be an NPC available to gamble with.</p>
                        <p>Act I: Gheed. Act II: Elzix. Act III: Alkor. Act IV: Jamella. Act V: Nihlathak.</p>
                        <p>The items you gamble for will not have any stats on them and you wont know there level of quality (magic/rare). They will all have a gold cost associated with them. Once you click on them to purchase, the stats of the item as well as its rarity will then be revealed to you. This is basically a lottery.</p>
                        <p>You can only use gold to gamble for items.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">QUALITY OF ITEMS</div>
                    <div className="basics-body">
                        <p>Gambled items will be (+/-) 5 levels of you.</p>
                        <p>You can recieve the following item quality: magical, rare, sets and unique. Set and unique are exceptionally rare.</p>
                        <p>The chance for you to get: unique = 0.05%, sets = 0.10%, rare = 10% and magic ~90%.</p>
                        <p>Magic Find gear has no effect on gambling quality.</p>
                        <p>The number of players or difficulty of the game will not effect the quality of your gambling.</p>
                        <p>Certain items you wont see until you are within 5 levels of that items quality requirement ie: Diadems.</p>
                        <p>Some of the best rares in the game, especially amulets, rings, belts and gloves can be found through gambling. These will typically be the items players gamble for.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gambling;