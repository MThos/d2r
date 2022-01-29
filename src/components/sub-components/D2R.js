import React, { Component } from 'react';

class D2R extends Component {
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
                    <div className="basics-header">WHAT IS D2 RESURRECTED?</div>
                    <div className="basics-body">
                        <p>Players have been asking for a re-make of Diablo 2 for a long time. Blizzard finally announced this game in 2021.</p>
                        <p>They are keeping the game quests/items/story authenticate. Most of the changes they are making are graphics, sound and quality of life.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">LIST OF CHANGES</div>
                    <div className="basics-body">
                        <p><span className="bold">Resolution:</span> The resolution for Diablo 2 used to max out at 800x600. By todays standards this is very poor visual quality. The game has been increased to allow for up to 4K quality and even super ultra-wide monitors.</p>
                        <p><span className="bold">Graphics:</span> All the game items, characters and even the menus have been brought up to date graphics wise. It looks completely different but maintains the same feel as the original.</p>
                        <p><span className="bold">Sound:</span> The sound for the game has also been dramatically updated. The sound has actually been fully reworked and it even offers surround sound now.</p>
                        <p><span className="bold">Auto-Loot:</span> You can now enable auto-loot of gold and items, so you no longer have to manually click on them. This is a huge quality of life change. If you don't like this option, it will be available to be turned off in the settings.</p>
                        <p><span className="bold">Auto-Party:</span> You can automatically join games and parties that are listed publicly.</p>
                        <p><span className="bold">Stash:</span> The stash has been expanded drastically and is shared across all your characters. This is probably the biggest quality of life change brought to the game and will completely eliminate having to create 'mule' or 'holder' characters that simply hold gear you don't have room for on your main character.</p>
                        <p><span className="bold">Cinematics:</span> Blizzard takes great pride in their cut-scenes and cinematics. The old ones simply wouldn't cut it with the updates resolution, so they are being completely re-made from scratch.</p>
                        <p><span className="bold">Crossplay:</span> Diablo 2 will be cross-play (available on consoles) for the first time since its inception. This allows people to play it on console, but also to party with PC players still.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default D2R;