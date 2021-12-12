import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer-details">
                <span>Copyright &copy; {new Date().getFullYear()}</span>
                <span>d2remastered.com</span>
                <span>All Rights Reserved</span>
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
        );
    }
}

export default Footer;