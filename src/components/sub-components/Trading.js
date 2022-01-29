import React, { Component } from 'react';

class Trading extends Component {
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
                    <div className="basics-header">SECURED TRADING</div>
                    <div className="basics-body">
                        <p>The game provides a secure trading method while you are in town. Left-click on another character to start a trade.</p>
                        <p>The trade screen consists of your inventory and backpack on the right and trade areas on the left for each party.</p>
                        <p>Click and move an item into the 'trade' area to offer it for trade. The other players item or offer will show up on their part of the trade window.</p>
                        <p>If you click the checkmark button and they do as well, the trade will be completed.</p>
                        <p>If someone changes an item on the trade screen before it is finalized, it will clear your checkmark button automatically. This prevents someone from changing their item last moment and clicking accept.</p>
                        <p>You may also offer gold for trade, though in Diablo 2 gold is generally not a heavily sought after item.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">UNSECURED TRADING</div>
                    <div className="basics-body">
                        <span className="red bold">WARNING: THESE ARE RISKY WAYS TO TRADE! BLIZZARD DOES NOT REFUND LOST OR STOLEN ITEMS!</span>
                        <p>If you trust the person you are playing with, like a real life friend, you can easily just do a 'drop trade' by dropping an item on the ground for them to pickup. This is much faster then trying to trade all your items.</p>
                        <p>Be sure the other party holds the items. Do not just leave items on the ground that you plan to move to another one of your own characters - the games can easily drop connection and the items will be lost. You can attempt to rejoin a dropped game, as sometimes it will stay open for a short while.</p>
                        <p>Do not do a 'drop trade' while other players are in the game. This is exceptionally risky.</p>
                        <p>Drop trades can also be useful if you want to give another player an item while not in-town, as secure trading is only available in town.</p>
                        <p>Ensure that the other player doesn't change the item to a lesser quality item with worse stats before you accept the trade, as a worse version of the same item will look the same on the trade screen.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trading;