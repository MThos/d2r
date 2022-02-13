import React, { Component } from 'react';

class Realm extends Component {
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
                    <div className="basics-header">WHAT ARE THE REALM TYPES?</div>
                    <div className="basics-body">
                        <p>There are two main character (realm) types on Diablo 2. Normal and Ladder characters.</p>
                        <p>These are decided on character creation. You cannot change your decision for that character after creation.</p>
                        <p>The purpose of the ladder is it runs in seasons. These seasons basically reset the game back to the beginning for a fresh start every so often, offering players a chance to start over and build up their characters once again.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">NORMAL CHARACTERS</div>
                    <div className="basics-body">
                        <p>Any character not marked with 'Ladder' is considered a normal character.</p>
                        <p>Characters can be normal softcore or normal hardcore.</p>
                        <p>Normal characters cannot join games with ladder characters.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">LADDER CHARACTERS</div>
                    <div className="basics-body">
                        <p>Characters marked with 'Ladder' cannot join normal character games.</p>
                        <p>Characters can be ladder softcore or ladder hardcore.</p>
                        <p>Once a ladder season ends, your characters are converted to 'normal' characters and you can continue to play them in the non-season games with other normal characters if you wish.</p>
                        <p>The ladder has its own economy and rare items/runes, especially early on, can be very sought after.</p>
                        <p>Ladder seasons have no set time currently. This might change with the release of D2 Resurrected.</p>
                        <p>You cannot convert a ladder character to a normal character on your own. This happens automatically by Blizzard with the conclusion of a season.</p>
                        <p>There are ladder-only runewords that can only be obtained during a ladder season. They can be brought over after a season to non-ladder (or normal) but can never be created in normal.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Realm;