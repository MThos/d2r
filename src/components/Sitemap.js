import React, { Component } from 'react';

class Sitemap extends Component {
    render() {
        return (
            <div id="sitemap">
                <a id="news" className="sitemap-link" onClick={e => this.props.onClick(e)}>News</a>
                <a id="items" className="sitemap-link" onClick={e => this.props.onClick(e)}>Items</a>
                <a id="skills" className="sitemap-link" onClick={e => this.props.onClick(e)}>Skills</a>
                <a id="classes" className="sitemap-link" onClick={e => this.props.onClick(e)}>Classes</a>
                <a id="monsters" className="sitemap-link" onClick={e => this.props.onClick(e)}>Monsters</a>
                <a id="npcs" className="sitemap-link" onClick={e => this.props.onClick(e)}>NPCs</a>
                <a id="quests" className="sitemap-link" onClick={e => this.props.onClick(e)}>Quests</a>
                <a id="faq" className="sitemap-link" onClick={e => this.props.onClick(e)}>FAQ</a>
                <a id="cookies" className="sitemap-link" onClick={e => this.props.onClick(e)}>Cookies</a>
                <a id="github" className="sitemap-link" href="https://github.com/MThos/d2remastered" target="_blank">Github</a>
                <a id="about" className="sitemap-link" onClick={e => this.props.onClick(e)}>About</a>
                <a id="contact" className="sitemap-link" onClick={e => this.props.onClick(e)}>Contact</a>
            </div>
        );
    }
}

export default Sitemap;