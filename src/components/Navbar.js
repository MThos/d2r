import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        let active = this.props.content;

        return (
            <div id="nav">
                <a id="news" className={active === 'news' ? 'nav-link active' : 'nav-link'} onClick={e => this.props.onClick(e)}>news</a>
                <a id="items" className={active === 'items' ? 'nav-link active' : 'nav-link'} onClick={e => this.props.onClick(e)}>items</a>
                <a id="skills" className={active === 'skills' ? 'nav-link active' : 'nav-link'} onClick={e => this.props.onClick(e)}>skills</a>
                <a id="classes" className={active === 'classes' ? 'nav-link active' : 'nav-link'} onClick={e => this.props.onClick(e)}>classes</a>
                <a id="monsters" className={active === 'monsters' ? 'nav-link active' : 'nav-link'} onClick={e => this.props.onClick(e)}>monsters</a>
                <a id="npcs" className={active === 'npcs' ? 'nav-link active' : 'nav-link'} onClick={e => this.props.onClick(e)}>npcs</a>
                <a id="quests" className={active === 'quests' ? 'nav-link active' : 'nav-link'} onClick={e => this.props.onClick(e)}>quests</a>
                <a id="faq" className={active === 'faq' ? 'nav-link active' : 'nav-link'} onClick={e => this.props.onClick(e)}>faq</a>
            </div>
        );
    }
}

export default Navbar;