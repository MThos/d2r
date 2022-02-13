import React, { Component } from 'react';

class Hardcore extends Component {
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
                    <div className="basics-header">WHAT IS HARDCORE?</div>
                    <div className="basics-body">
                        <p>Hardcore is a game mode where you get ONE life. There is no resurrection or second chance if your life hits zero.</p>
                        <p>In simple terms, if your character dies, it becomes unplayable.</p>
                        <p>This game mode only becomes playable once you beat the game in Normal.</p>
                        <p>Hardcore isn't for everyone. It is recommended only for players who have a great understanding of the game.</p>
                        <p>On character creation, there is a 'HARDCORE' checkbox to create a Hardcore character.</p>
                        <p><span className="red bold">BLIZZARD WILL NEVER REVIVE A CHARACTER THAT IS KILLED IN HARDCORE</span></p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">WHAT IS THE PURPOSE OF HARDCORE?</div>
                    <div className="basics-body">
                        <p>Hardcore offers a unique challenge that most games do not have. One death and it's game over. This can add another level of excitement and thrill for players who have become bored with Normal.</p>
                        <p>You will get a <span className="red bold">RED</span> name when in the lobby chat - unique to hardcore characters.</p>
                        <p>You can get 3 unique titles on defeating the different game modes: Destroyer (Normal), Conqueror (Nightmare) and Guardian (Hell). These are different then the titles from beating the game in Softcore.</p>
                        <p>You will be ranked on the Hardcore ladder, even after you die. If you delete your character you will be removed.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">I DIED, WHAT NOW?</div>
                    <div className="basics-body">
                        <p>When you die in Hardcore, a screen will come up asking you to press escape to go back to the BNET chat.</p>
                        <p>The message displayed is: "You have died. Press ESC to continue. Your deeds of valor will be remembered."</p>
                        <p>You can still chat from your character - though you cannot join or create games any longer.</p>
                        <p>You can consent another player in the game to be able to 'loot' your corpse for its items on your death. This is useful if you are playing with friends, as they can save your items for your next character (if they can get to your corpse and select it with enough room to carry the items). This must be enabled BEFORE you die.</p>
                        <p>If you decide to consent to another player being able to loot your items on your demise, be sure your friend loots your body before you press 'ESC' and exit the game, or your body will disappear and the items lost forever.</p>
                        <p>Be sure to only consent to friendly players being able to loot your items. Other players may try to kill you to collect your items if you enable this option for them - otherwise known as PKers.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">TIPS FOR HARDCORE MODE</div>
                    <div className="basics-body">
                        <p>Keep an eye on your health bar. This cannot be stressed enough. One death and you no longer exist.</p>
                        <p>Hardcore characters will typically run more defensive items, attributes and skills.</p>
                        <p>Vitality is very important to a Hardcore character. This will provide you with a large life pool.</p>
                        <p>Rejuvenation potions are a must in Hardcore. These will heal you instantly, not over time.</p>
                        <p>Playing ranged characters can have an advantage, as you are less likely to get stuck in a pile of monsters.</p>
                        <p>Do not play Hardcore if your Internet connection is poor. Even if you disconnect it can take 20s to drop from the game.</p>
                        <p>Enabled the 'buddy system' that allows a friend to pickup your items on death. Do this before you die.</p>
                        <p>Only play Hardcore games in private (password protected) games to avoid PKers (player killers) joining.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hardcore;