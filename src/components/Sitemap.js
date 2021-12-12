import React, { Component } from 'react';

class Sitemap extends Component {
    render() {
        return (
            <div id="sitemap">
                <a className="sitemap-link" href="/news">News</a>
                <a className="sitemap-link" href="/items">Items</a>
                <a className="sitemap-link" href="/skills">Skills</a>
                <a className="sitemap-link" href="/classes">Classes</a>
                <a className="sitemap-link" href="/monsters">Monsters</a>
                <a className="sitemap-link" href="/npcs">NPCs</a>
                <a className="sitemap-link" href="/quests">Quests</a>
                <a className="sitemap-link" href="/basics">Basics</a>
                <a className="sitemap-link" href="/cookies">Cookies</a>
                <a className="sitemap-link" href="https://github.com/MThos/d2remastered" target="_blank">Github</a>
                <a className="sitemap-link" href="/about">About</a>
                <a className="sitemap-link" href="/contact">Contact</a>
            </div>
        );
    }
}

export default Sitemap;