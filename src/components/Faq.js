import React, { Component } from 'react';
import Basics from './sub-components/Basics';
import Experience from './sub-components/Experience';
import Resistances from './sub-components/Resistances';
import Difficulty from './sub-components/Difficulty';
import Gambling from './sub-components/Gambling';
import Hirelings from './sub-components/Hirelings';
import Attributes from './sub-components/Attributes';
import Realm from './sub-components/Realm';
import PVP from './sub-components/PVP';
import Controls from './sub-components/Controls';
import Hardcore from './sub-components/Hardcore';
import Trading from './sub-components/Trading';
import Ubers from './sub-components/Ubers';
import Parties from './sub-components/Parties';
import D2R from './sub-components/D2R';
import Patches from './sub-components/Patches';

class Faq extends Component {
    constructor() {
        super();
        this.state = {
            active: "basics"
        }
    }

    onClick = link => {
        this.setState({ active: link.target.id });
    }

    render() {
        let active = this.state.active;

        if (active === "basics") {
            return (
                <Basics active={active} onClick={this.onClick} />
            );
        } else if (active === "experience") {
            return (
                <Experience active={active} onClick={this.onClick} />
            )
        } else if (active === "resistances") {
            return (
                <Resistances active={active} onClick={this.onClick} />
            )
        } else if (active === "difficulty") {
            return (
                <Difficulty active={active} onClick={this.onClick} />
            )
        } else if (active === "gambling") {
            return (
                <Gambling active={active} onClick={this.onClick} />
            )
        } else if (active === "hirelings") {
            return (
                <Hirelings active={active} onClick={this.onClick} />
            )
        } else if (active === "attributes") {
            return (
                <Attributes active={active} onClick={this.onClick} />
            )
        } else if (active === "realm") {
            return (
                <Realm active={active} onClick={this.onClick} />
            )
        } else if (active === "pvp") {
            return (
                <PVP active={active} onClick={this.onClick} />
            )
        } else if (active === "controls") {
            return (
                <Controls active={active} onClick={this.onClick} />
            )
        } else if (active === "hardcore") {
            return (
                <Hardcore active={active} onClick={this.onClick} />
            )
        } else if (active === "trading") {
            return (
                <Trading active={active} onClick={this.onClick} />
            )
        } else if (active === "ubers") {
            return (
                <Ubers active={active} onClick={this.onClick} />
            )
        } else if (active === "parties") {
            return (
                <Parties active={active} onClick={this.onClick} />
            )
        } else if (active === "d2r") {
            return (
                <D2R active={active} onClick={this.onClick} />
            )
        } else if (active === "patches") {
            return (
                <Patches active={active} onClick={this.onClick} />
            )
        } 
    }
}

export default Faq;