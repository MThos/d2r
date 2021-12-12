import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div id="nav">
                <a className="nav-link" href="">news</a>
                <a className="nav-link" href="">items</a>
                <a className="nav-link" href="">skills</a>
                <a className="nav-link" href="">classes</a>
                <a className="nav-link" href="">monsters</a>
                <a className="nav-link" href="">npcs</a>
                <a className="nav-link" href="">quests</a>
                <a className="nav-link" href="">basics</a>
            </div>
        );
    }
}

export default Navbar;