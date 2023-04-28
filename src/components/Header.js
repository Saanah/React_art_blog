import React from 'react';
import styles from '../styles/Header.module.css'
import Dropdown from './Dropdown';

function Header(props) {
    return (
        <div className={styles.header}>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="artist">ARTIST</a></li>
                <li><a href="tools">SOFTWARE AND BRUSHES</a></li>
                <li><a href="contact">CONTACT ME!</a></li>
                <li><Dropdown/></li>
            </ul>
        </div>
    );
}

export default Header;
