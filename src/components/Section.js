import React, {Component} from 'react';
import Faq from './Faq';
import Classes from './Classes';

class Section extends Component {
    render() {
        let active = this.props.active;

        if (active === "faq") {
            return (
                <Faq active="basics" />
            );
        } else if (active === "classes") {
            return (
                <Classes />
            )
        }
    }
}

export default Section;