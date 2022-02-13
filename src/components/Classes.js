import React, {Component} from 'react';
import ClassSelection from './sub-components/classes/ClassSelection';
import Assassin from './sub-components/classes/Assassin';
import Amazon from './sub-components/classes/Amazon';
import Barbarian from './sub-components/classes/Barbarian';
import Druid from './sub-components/classes/Druid';
import Necromancer from './sub-components/classes/Necromancer';
import Paladin from './sub-components/classes/Paladin';
import Sorceress from './sub-components/classes/Sorceress';

class Classes extends Component {
    constructor() {
        super();
        this.state = {
            active: "selection"
        }
    }

    onClick = link => {
        this.setState({ active: link.target.id });
    }

    render() {
        let active = this.state.active;

        if (active === "selection") {
            return (
                <ClassSelection onClick={this.onClick} />
            );
        } else if (active === "assassin") {
            return (
                <Assassin />
            );
        } else if (active === "amazon") {
            return (
                <Amazon />
            );
        } else if (active === "barbarian") {
            return (
                <Barbarian />
            );
        } else if (active === "druid") {
            return (
                <Druid />
            );
        } else if (active === "necromancer") {
            return (
                <Necromancer />
            );
        } else if (active === "paladin") {
            return (
                <Paladin />
            );
        }else if (active === "sorceress") {
            return (
                <Sorceress />
            );
        }
    }
}

export default Classes;