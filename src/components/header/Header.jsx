import React, { Component, useContext } from 'react';
import { ThemeContext } from '../ThemesContext';
import './Header.css';

const Email = (props) => {
    return(
        <ThemeContext.Consumer>
            {value => <p>{value.color}</p>}
        </ThemeContext.Consumer>
    );
}

const LogoComponent = (props) => {
    let theme = useContext(ThemeContext);

    return (
        <div className='Logo'>
            <a href='#' style={{
                color: theme.color
            }}>
                <p style={{
                    color: theme.color
                }}>Dylan</p>
                <span>it.tinhngo@gmail.com</span>
                <Email />
            </a>
        </div>
    );
}

class Header extends Component {
    render() {
        let theme = this.context;
        return (
            <div className='Header' style={{ color: theme.color }}>
                <LogoComponent />
            </div>
        );
    }
}
Header.contextType = ThemeContext;


export default Header;