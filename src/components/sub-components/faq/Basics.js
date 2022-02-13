import React, { Component } from 'react';

class Basics extends Component {
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
                    <div className="basics-header">GOLD</div>
                    <div className="basics-body">
                        <p>You can carry up to 10,000 gold per level.</p>
                        <p>A max-level character (level 99) can carry up to 990,000 gold.</p>
                        <p>The maximum gold you can hold in your stash is 3,490,000 at level 99.</p>
                        <p>Gold can be used for buying items from vendors, repairing your items or to gamble.</p>
                        <p>If you are killed, you will lose a percentage of your total gold, both on your character and in the stash. The percentage is equal to your characters level but will never exceed 20%.</p>
                        <p>You can enable the ability to 'auto-loot' gold in settings.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">STASH</div>
                    <div className="basics-body">
                        <p>Your stash is near the starting area of each act. It looks like a large treasure chest.</p>
                        <p>You are the only one who can access or view your stash.</p>
                        <p>Your stash is a safe place to store items you may want to use in the future or for specific purposes.</p>                
                        <p>It can hold a maximum of 2,500,000 gold.</p>
                        <p>The items in the stash are the same across all acts.</p>
                        <p>You have 3 shared stash tabs that are shared across all your characters.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">SCROLLS</div>
                    <div className="basics-body">
                        <p>There are two types of scrolls available: Scroll of Town Portal and Scroll of Identity.</p>
                        <p>You use a scroll by right-clicking on it in your inventory.</p>
                        <p>Scrolls can be stored inside 'Tomes'. These Tomes may hold up to 20 scrolls each. This helps your character save space.</p>
                        <p>Scroll of Town Portal are used to open a magical portal that will bring you back to the town of the current act you are in. This can be helpful both for fast-travel purposes and to get out of immediate danger. You may only have one open at a time and opening a new portal will overwrite the previous.</p>
                        <p>Scrolls of Identity are used to 'identify' magical, rare or unique items so you can decide on whether you want to keep or sell the item. You cannot use a magical, rare or unique item until it has been identified.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">TOWN PORTAL</div>
                    <div className="basics-body">
                        <p>Town Portals are the quickest way to get back to town and out of danger.</p>
                        <p>A town portal will remain active until the character who created it re-enters it, at which point it will close and need to be re-cast for another use.</p>
                        <p>Only members of your party can use your town portal, though anyone can see your town portal and where it was created. Hostile players may use this to their advantage.</p>
                        <p>If you go hostile with another player, your town portal will immediately close. This is intended to prevent 'griefing' play.</p>
                        <p>Town portals cannot be taken in certain situations. There are restrictions from using town portals to enter areas known as 'blocking quests'. Examples of this would be: Canyon of the Magi, Duriel's Lair, Arcane Sanctuary, The Ancients, The Secret Cow Level or Durance of Hate.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">WAYPOINTS</div>
                    <div className="basics-body">
                        <p>In every acts town and at various distant locations throughout the act, you will find 'waypoints'. These allow you to fast-travel to places you have already discovered other waypoints.</p>
                        <p>If you find a new waypoint (it will be dark and no blue candles burning) - ensure you click on it. You only ever have to do this once and your character can use that waypoint going forward.</p>
                        <p>Waypoints are independant to each player. They are not shared with other players. If someone else does have a waypoint you do not, they can go to that waypoint and town portal for you to come pickup the waypoint.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">DUNGEON RANDOMIZATION</div>
                    <div className="basics-body">
                        <p>The majority of dungeons are random in the world of sanctuary with the exception of the following:</p>
                        <ul className="flex">                            
                            <li>Caves 2</li>
                            <li>Forgotten Tower Level V</li>
                            <li>Inner Cloister</li>
                            <li>Cathedral</li>
                            <li>Tristram</li>
                            <li>Catacombs Level 4</li>
                            <li>Duriel's Lair</li>
                            <li>Sewer Level 2</li>
                            <li>Kurast</li>
                            <li>Travincal</li>
                            <li>Durance of Hate Level 3</li>
                            <li>The Chaos Sanctuary</li>
                            <li>Nihlathak's Temple</li>
                            <li>Arreat Summit</li>
                            <li>Throne of Destruction</li>
                            <li>World Stone Chamber</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Basics;