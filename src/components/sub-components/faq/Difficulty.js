import React, { Component } from 'react';

class Difficulty extends Component {
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
                    <div className="basics-header">WHAT ARE THE DIFFICULTY LEVELS?</div>
                    <div className="basics-body">
                        <p>The three difficulty levels are: Normal, Nightmare and Hell.</p>
                        <p>The game gets significantly more difficult the higher the difficulty. You should try to stay in the lowest difficulty you can until the experience gains start to slow down.</p>
                        <p>Once you defeat Normal, you will only see Nightmare games in your server list, and the same once you beat Nightmare you will only see Hell games. Consider this before you decide to kill Baal in any of the difficulties.</p>
                        <p>You achieve new titles for each difficulty you complete.</p>
                        <p>Quests that give a +skill or +resistances permanently can be completed in each difficulty. These quests will give a total of +12 skill points, +15 stat points, +60 hitpoints and +30 resistance once completed in all three difficulties.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">NORMAL DIFFICULTY</div>
                    <div className="basics-body">
                        <p>This is the default difficulty level.</p>
                        <p>You will not lose any experience when you die.</p>
                        <p>A majority of players recommend you should try to stay in normal until around level 40.</p>
                        <p>Unqiue and Champion monsters gain 90% damage bonus.</p>
                        <p>Hirelings will deal 50% damage to bosses.</p>
                        <p>Nihlithak's Corpse Explosion deals 50% damage.</p>
                        <p>Once you defeat Baal, you will only see Nightmare games in the realm server list.</p>
                        <p>You are awared the title of 'Slayer' once you beat Baal or 'Destroyer' once you beat Baal Hardcore.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">NIGHTMARE DIFFICULTY</div>
                    <div className="basics-body">
                        <p>You can only create or enter Nightmare games once you defeat Normal.</p>
                        <p>You will lose 5% of your experience if you die. You cannot lose a level from this loss. If you recover your corpse before leaving the game, you will gain back 75% of the experience you lost.</p>
                        <p>A majority of players recommend to stay in Nightmare from around level 40 to level 70.</p>
                        <p>Unique and Champion monsters gain a 75% damage bonus.</p>
                        <p>The resistances of player characters and hirelings are reduced by 40. This can bring you to a negative (-) resistance.</p>
                        <p>Hirelings will deal 35% damage to bosses.</p>
                        <p>Nihlithak's Corpse Explosion deals 35% damage.</p>
                        <p>Freezing, Chills and Curses duration are reduced by 50%.</p>
                        <p>Life/Mana Stealing are reduced by 50%.</p>
                        <p>Static Field (sorceress) cannot bring a monster's life below 33%.</p>
                        <p>You will start to see monsters with 'immunities' to specific elemental damage.</p>
                        <p>Monster skill levels go up +3.</p>
                        <p>Once you defeat Baal, you will only see Hell games in the realm server list.</p>
                        <p>You are awarded the title of 'Champion' once you beat Baal or 'Conqueror' once you beat Baal Hardcore.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">HELL DIFFICULTY</div>
                    <div className="basics-body">
                        <p>You can only create or enter Hell games once you defeat Nightmare.</p>
                        <p>You will lose 10% of your experience if you die. You cannot lose a level from this loss. If you recover your corpse before leaving the game, you will gain back 75% of the experience you lost.</p>
                        <p>A majority of players recommend to start in Hell around level 70.</p>
                        <p>Unique and Champion monsters gain a 66% damage bonus.</p>
                        <p>The resistances of player characters and hirelings are reduced by 100. This can bring you to a negative (-) resistance.</p>
                        <p>Hirelings will deal 25% damage to bosses.</p>
                        <p>Nihlithak's Corpse Explosion deals 20% damage.</p>
                        <p>Freezing, Chills and Curses duration are reduced by 75%.</p>
                        <p>Life/Mana Stealing are reduced by 66%.</p>
                        <p>Static Field (sorceress) cannot bring a monster's life below 50%.</p>
                        <p>A majority of monsters will have a form of 'immunity' to a specific elemental damage.</p>
                        <p>There are a lot more unique monsters.</p>
                        <p>Monster skill levels go up +7.</p>
                        <p>You are awarded the title of 'Patriarch/Matriarch' once you beat Baal or 'Guardian' once you beat Baal Hardcore.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Difficulty;