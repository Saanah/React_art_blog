import React from 'react';
import styles from '../styles/Footer.module.css'
import {FaInstagram, FaYoutube, FaGithub} from 'react-icons/fa'

function Footer(props) {
    return (
        <div className={styles.footer}>
            <a href='https://www.instagram.com/p2programmers/' target='_blank' className={styles.socials}><FaInstagram size={30}/></a>
            <a href='https://www.youtube.com/watch?v=QH2-TGUlwu4' target='_blank' className={styles.socials}><FaYoutube className={styles.socials} size={30}/></a>
            <a href='https://github.com/Saanah' target='_blank' className={styles.socials}><FaGithub className={styles.socials} size={30}></FaGithub></a>
        </div>
    );
}

export default Footer;