import React, { Component } from 'react';

class Attributes extends Component {
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
                    <div className="basics-header">WHAT ARE ATTRIBUTES?</div>
                    <div className="basics-body">
                        <p>There are four attributes you can put points in: Strength, Dexterity, Vitality and Energy.</p>
                        <p>You can put as many points in an attribute as you would like, though you only get +5 attributes per level.</p>
                        <p>You can also get +5 attributes from completing the Act III quest: Lam Esen's Tome in each difficulty for a total of +15.</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">STRENGTH</div>
                    <div className="basics-body">
                        <p>Most items have a strength requirement that you must reach before you can equip the item.</p>
                        <p>Strength can affect how much damage you deal with weapons, but by a very small margin. You typically will only put enough points in that you need to wear your armor as the points can be better spent elsewhere.</p>
                        <p>The most strength to wear an item is 253.</p>
                        <p>A lot of items have +strength modifiers, so you don't typically need to invest a lot of points in strength.</p>
                        <br/>
                        <span className="bold">ATTACK DAMAGE FORMULAS</span>
                        <br/><br/>
                        <span className="bold">Melee and Throwing Weapons</span>
                        <p>Min Damage = (weapon_min_dmg * (str + 100) / 100)</p>
                        <p>Max Damage = (weapon_max_dmg * (str + 100) / 100)</p>
                        <br/>
                        <span className="bold">Bows and Crossbows</span>
                        <p>Min Damage = (weapon_min_dmg * (dex + 100) / 100)</p>
                        <p>Max Damage = (weapon_max_dmg * (dex + 100) / 100)</p>
                        <br/>
                        <span className="bold">Total Damage</span>
                        <p>Min Damage = (weapon_min_dmg + (+x to minimum_dmg)) * (1 + stat_bonus + (+x% enhanced_dmg) / 100) * modifier</p>
                        <p>Max Damage = (weapon_max_dmg + (+x to maximum_dmg)) * (1 + stat_bonus + (+x% enhanced_dmg) / 100) * modifier</p>
                        <br/>
                        <span className="bold">Legend For Formulas</span>
                        <p>+x% enhanced_damage is enhanced damage percent from items (including jewels), skills and auras.</p>
                        <p>+x to minimum/maximum is from armor and charms.</p>
                        <p>stat_bonus is a damage bonus you get from strength or dexterity depending on the weapon you are using (see below).</p>
                        <p>modifier is a percent modifier you receive from certain skills (see below).</p>
                        <br/>
                        <span className="bold">Stat Bonus</span>
                        <p>Hammers (War Hammer / Maul / Great Maul and their upgrades) = (1.10 * str) / 100</p>
                        <p>Daggers / Assassins Claws / Throwing Weapons = ((0.75 * str) / 100) + ((0.75 * dex) / 100)</p>
                        <p>Bows and Crossbows = (dex / 100)</p>
                        <p>Amazon-only Spears / Javelins = ((0.80 * str) / 100) + ((0.5 * dex) / 100)</p>
                        <br/>
                        <span className="bold">Modifier</span>
                        <p>Default = 1</p>
                        <p>Multi-shot / Strafe / Lightning Bolt = 0.75</p>
                        <p>Critical Hit / Deadly Strike = 2</p>
                        <p>Blade Fury (1-handed) = 0.75</p>
                        <p>Blade Sentinel / Blade Fury (2-handed) = 0.375</p>
                        <p>Blade Shield = 0.25</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">DEXTERITY</div>
                    <div className="basics-body">
                        <p>Some weapons have a dexterity requirement that you must reach before you can equip the item, namely bows.</p>
                        <p>Dexterity increases both your chance to hit, chance to block and your damage with ranged weapons and claws.</p>
                        <p>If you are a melee character you will want to try and maintain 75% chance to hit.</p>
                        <p>A lot of items have +dexterity modifiers, so you don't typically need to invest a lot of points in dexterity unless you are an Amazon or trying to reach max-block (75% chance).</p>
                        <p>Melee attacks can never have under 5% or over 95% chance to hit.</p>
                        <br/>
                        <span className="bold">Chance To Hit</span>
                        <p>Hit Chance = (100 * AR / (AR + DR) * 2 * aLvl / (aLvl + dLvl))</p>
                        <br/>
                        <span className="bold">Chance To Block</span>
                        <p>Block Chance = (block_chance * (dex - 15)) / (level * 2)</p>
                        <p>Maximum: 75%</p>
                        <p>When running your block chance is reduced to 33% of its value.</p>
                        <br/>
                        <span className="bold">Legend For Formulas</span>
                        <p>AR = Attack Rating.</p>
                        <p>DR = Defense Rating (of defender).</p>
                        <p>aLvl = Level of Attacker.</p>
                        <p>dLvl = Level of Defender.</p>
                        <br/>
                        <span className="bold">Class Level Bonus</span>
                        <p>Certain classes get a level 'bonus' when attacking.</p>
                        <p>Barbarian / Paladin: 20</p>
                        <p>Assassin: 15</p>
                        <p>Amazon / Druid: 5</p>
                        <p>Necromancer: -10</p>
                        <p>Sorceress: -15</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">VITALITY</div>
                    <div className="basics-body">
                        <p>Vitality will increase your life and stamina.</p>
                        <p>Vitality is where most characters will invest the majority of their attribute points.</p>
                        <p>The amount of life and stamina is different for the classNamees.</p>
                        <p>Increasing your vitality will give you a bigger chance for a double-heal from health potions.</p>
                        <p>Stamina is how long you can run for without being forced to walk.</p>
                        <br/>
                        <span className="bold">Life per Vitality</span>
                        <p>Barbarian: +4</p>
                        <p>Amazon / Assassin / Paladin: +3</p>
                        <p>Druid / Necromancer / Sorceress: +2</p>
                        <br/>
                        <span className="bold">Stamina per Vitality</span>
                        <p>Assassin: +1.25</p>
                        <p>All Other classNamees: +1</p>
                        <br/>
                        <span className="bold">Stamina Loss / Gain</span>
                        <p>In the below example your character has 150 stamina and 50% stamina recovery rate.</p>
                        <p>Gain: (25 * (((150) * (100 + 50) / 100) / 256)) = 12.30 stamina per second.</p>
                        <p>Loss: (25 * (40 * (1 + (armor_speed / 10)) * item_drain / 256)</p>
                    </div>
                </div>
                <div className="basics">
                    <div className="basics-header">ENERGY</div>
                    <div className="basics-body">
                        <p>Energy will increase your mana pool.</p>
                        <p>Mana is used to use abilities/skills.</p>
                        <p>There is typically only one className/build that puts any additional points into Energy, and that is the 'Energy Shield Sorceress'.</p>
                        <p>The more energy you have, the higher the chance to get a double-mana effect from mana potions.</p>
                        <p>It takes 120s to completely replenish your mana to 100% from empty, without any additional mana-regen benefits.</p>
                        <p>The amount of mana you get per point of energy is different for certain classNamees.</p>
                        <p>The larger your mana pool, the faster your mana will regenerate.</p>
                        <br/>
                        <span className="bold">Mana per Energy</span>
                        <p>Sorceress / Necromancer / Druid: +2</p>
                        <p>Assassin: +1.75 </p>
                        <p>Amazon / Paladin: +1.5</p>
                        <p>Barbarian: +1</p>
                        <br/>
                        <span className="bold">Mana Regeneration</span>
                        <p>Regen = (M * R) / 120</p>
                        <p>M = Maximum Mana.</p>
                        <p>R = (100 + mana_regen_%) / 100</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Attributes;