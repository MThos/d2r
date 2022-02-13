import React, { Component } from 'react';

class Controls extends Component {
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
                    <div className="basics-header">LIST OF HOTKEYS / BUTTONS</div>
                    <div className="basics-body">
                        <p>/nopickup - prevents you from picking up items on a simple mouse click. You need to hold down the 'ALT' key to pickup.</p>
                        <p>/fps - will show the current frames per second your game is running at, your ping and physical/virtual memory used.</p>
                        <p>'R' - will toggle between running and walking.</p>
                        <p>'CTRL' - holding control will make your character walk.</p>
                        <p>'ALT' - holding alt will show items on the ground in text-format. See the colors for each item type below.</p>
                        <p>'SHIFT' - holding this will keep your character attacking in place (will not move).</p>
                        <p>'W' - will swap between your main and secondary weapon sets.</p>
                        <p>'TAB' - will bring up a semi-visible mini-map on the screen.</p>
                        <p>'SHIFT - CLICK' - if you do this while purchasing scrolls, it will fill your tome (if you have one) entirely.</p>
                        <p>'CLICK HEALTH/MANA ORB' - will show text showing amount of health/mana remaining.</p>
                        <p>'A' or 'C' - will show the character attribute screen.</p>
                        <p>'B' or 'I' - will show your backpack/inventory.</p>
                        <p>'M' - shows the messages log.</p>
                        <p>'T' - shows your skill tree.</p>
                        <p>'1', '2', '3' or '4' - will use the potion in that belt slot.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">ITEM TEXT COLOR</div>
                    <div className="basics-body">
                        <p><span className="item-text-color" style={{background:"white", color:"black"}}>WHITE</span> : Normal / Superior</p>
                        <p><span className="item-text-color" style={{background:"gray"}}>GRAY</span> : Socketed / Ethereal</p>
                        <p><span className="item-text-color" style={{background:"blue"}}>BLUE</span> : Magic</p>
                        <p><span className="item-text-color" style={{background:"orange", color:"black"}}>ORANGE</span> : Crafted</p>
                        <p><span className="item-text-color" style={{background:"green"}}>GREEN</span> : Set</p>
                        <p><span className="item-text-color" style={{background:"yellow", color:"black"}}>YELLOW</span> : Rare</p>
                        <p><span className="item-text-color" style={{background:"goldenrod", color:"black"}}>GOLD</span> : Unique</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Controls;