import React from 'react';
import styles from '../styles/Tools.module.css'

function Tools(props) {
    return (
        <div className={styles.infoBox}>
            <div className={styles.text}>
            <h1>The tools I use:</h1>
            <ul>
                <li>Software: Krita</li>
                <li>Tablet: Wacom Intuos</li>
                <li>Brushes: <a href='https://www.davidrevoy.com/article854/krita-brushes-2021-bundle' target={"_blank"}>This bundle!</a></li>
            </ul>
            </div>
        </div>
    );
}

export default Tools;