import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div id="title">{ this.props.name.toUpperCase() }</div>
        );
    }
}

export default Title;