import React, {Component} from 'react';
import Faq from './Faq';

class Section extends Component {
    render() {
        let active = this.props.active;

        if (active === "faq") {
            return (
                <Faq active="basics" />
            );
        }
    }
}

export default Section;