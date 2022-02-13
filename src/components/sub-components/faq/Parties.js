import React, { Component } from 'react';

class Parties extends Component {
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
                    <div className="basics-header">WHAT ARE PARTIES?</div>
                    <div className="basics-body">
                        <p>Parties are when you join up in-game with player(s) to tackle more difficult challenges as a team.</p>
                        <p>You can bring up the party screen by pressing 'P'. This will show all players in-game and your relationship.</p>
                        <p>Parties let your skills assist other players, like Paladin auras.</p>
                        <p>You can also 'mute' players by clicking on the ear icon on the party screen, so you don't see their chat.</p>
                        <p>If someone selects the option to party, it will come up on the screen saying someone has requested to party with you.</p>
                        <p>There is also an option with a lock icon that allows "corpse looting" if you die. <span className="bold upper red">[hardcore only]</span></p>
                        <p>If you are killed by a hostile player in hardcore, it is the same as a monster killing you. You cannot revive.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">RELATIONSHIPS</div>
                    <div className="basics-body">
                        <p>There are three different types of relationship you can have with other players: neutral, party or hostile.</p>
                        <p>Neutral: This is the default relationship when you enter a game.</p>
                        <p>Party: Most players will party in multiplayer games. This allows you to see where your party members are on the map, use their town portals, affect each other with skills like auras, etc.</p>
                        <p>Hostile: When you want to try to kill another player in the game you click the sword icon in the party screen. This is mostly common when people are trying to player-kill or when you are in a player-vs-player game. If you hostile someone in a party, you will go hostile with the entire party.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">PARTY BENEFITS</div>
                    <div className="basics-body">
                        <p>Auras / Abilities affect other players in your party.</p>
                        <p>Experience is increased for each player in the party within 2 screens of a monster kill.</p>
                        <p>Gold is shared between all those in a party and within the same zone. Any extra gold to the person who picked it up.</p>
                        <p>Improved item drop chance when in a party (does not affect quality of the items).</p>
                        <p>Loot drop improvement formula = (1 - (item_base_drop_chance ^ num_players)</p>
                        <p>Example: 10% base chance, 3 player game. (1 - (0.90 ^ 3)</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Parties;