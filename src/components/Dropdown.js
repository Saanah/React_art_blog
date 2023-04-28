import React, {useState} from 'react';
import styles from '../styles/Dropdown.module.css'

function Dropdown(props) {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    };

     return (
        <div className={styles.dropdown}>
            <a onClick={handleOpen} className={styles.dropdown}>ART BY YEAR</a>
            {open ? (
                <div className={styles.menu_open}>
                <ul>
                    <li className={styles.menu_items}><a className={styles.years}href='#2019'>2019</a></li>
                    <li className={styles.menu_items}><a className={styles.years}href='#2019'>2020</a></li>
                    <li className={styles.menu_items}><a className={styles.years}href='#2019'>2021</a></li>
                    <li className={styles.menu_items}><a className={styles.years}href='#2019'>2022</a></li>
                </ul>
                </div>
            ) : null}  {/*if open is true show, if not, hide*/}
        </div>
    );
}

export default Dropdown;