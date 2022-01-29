import React, { Component } from 'react';

class PVP extends Component {
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
                    <div className="basics-header">WHAT IS PLAYER VS PLAYER?</div>
                    <div className="basics-body">
                        <p>Player vs Player combat allows you to kill other real world players.</p>
                        <p>This is not enabled by default - you need to activate 'hostile' in the game against another player.</p>
                        <p>When hostility is not enabled, your spells and attacks cannot damage other players. There is no friendly-fire in Diablo.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">DECLARING HOSTILITY</div>
                    <div className="basics-body">
                        <p>To declare hostility - open the party menu and select the hostile icon.</p>
                        <p>You can only declare hostility while in town.</p>
                        <p>When someone declares hostility on you, it alerts on the screen that someone has declared hostilties.</p>
                        <p>This will also declare hostilities with that players entire party.</p>
                        <p>Hostile players will display as a red 'X' on the auto-map.</p>
                        <p>You cannot be hostile if you are under level 9.</p>
                        <p>When you declare hostility on someone, it closes your town portal (if active) and you cannot use town portals cast by another player.</p>
                        <p>You cannot use your town portal or waypoints for 10s after declaring hostility on another player.</p>
                        <p>WARNING: You can un-declare hostility with another player - but be warned - this will not remove them from being hostile with you. They will still be able to attack you but you wont be able to attack them back.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">WHAT HAPPENS IF I AM KILLED?</div>
                    <div className="basics-body">
                        <p>If you are killed by another player, you will drop the same amount of gold you would if you are killed by a monster.</p>
                        <p>When someone is killed by another player, they will drop an 'ear' on the ground with their name, className and level.</p>
                        <p>You will not lose any experience from being killed in player vs player combat as you are when killed by monsters.</p>
                        <p>If you are playing in HARDCORE, you will be killed permamently, no different then if you were killed by a monster. Be wary of PKers (player killers) in hardcore game mode.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">DAMAGE / SKILL EFFECTS</div>
                    <div className="basics-body">
                        <p>Damage is reduced to 17% of what it would do to a monster.</p>
                        <p>Some abilities are special case like Thorns (12.5%) or Iron Maiden (25%).</p>
                        <p>Poison and Cold duration is not affected and lasts the same duration as it would on a monster.</p>
                        <p>Valkyries, Hirelings, Skeletons, Golems and other player pets are reduced by 50%.</p>
                        <p>Damage over-time abilities (Firewall, Hydra, etc) will be removed from the map when you declare someone hostile.</p>
                        <p>Hit-Slows-Target attribute is reduced to 50%.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">AVOIDING PVP</div>
                    <div className="basics-body">
                        <p>Set a password on your game, this way others players cannot join it.</p>
                        <p>Set a level limit on your game if you are at a lower level. This prevents high level players from joining and trying to 'pk' (player kill) you, though this doesn't really work once you get to a higher level.</p>
                        <p>Don't give away your location if someone joins a game and asks immediately. Most experienced players can quickly narrow down where you are based on any active town portal that you currently have though.</p>
                        <p>Set a hotkey for town portal, so you can escape to town if someone declares you hostile.</p>
                        <p>Leave the game and re-create another. The chances the player will find your game in the list of games again is very rare.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PVP;