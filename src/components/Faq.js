import React, { Component } from 'react';
import Basics from './sub-components/faq/Basics';
import Experience from './sub-components/faq/Experience';
import Resistances from './sub-components/faq/Resistances';
import Difficulty from './sub-components/faq/Difficulty';
import Gambling from './sub-components/faq/Gambling';
import Hirelings from './sub-components/faq/Hirelings';
import Attributes from './sub-components/faq/Attributes';
import Realm from './sub-components/faq/Realm'; 
import PVP from './sub-components/faq/PVP';
import Controls from './sub-components/faq/Controls';
import Hardcore from './sub-components/faq/Hardcore';
import Trading from './sub-components/faq/Trading';
import Ubers from './sub-components/faq/Ubers';
import Parties from './sub-components/faq/Parties';
import D2R from './sub-components/faq/D2R';
import Patches from './sub-components/faq/Patches';

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