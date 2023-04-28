import React from 'react';
import styles from '../styles/ContactMe.module.css'
import {FaInstagram, FaYoutube, FaGithub, FaLinkedin} from 'react-icons/fa'

function ContactMe(props) {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.note}>
                <h3>YouTube</h3>
                <a href='#' target='_blank'><FaYoutube size={150}/></a>
            </div>
            <div className={styles.note}>
                <h3>GitHub</h3>
                <a href='https://github.com/Saanah' target='_blank'><FaGithub size={150}/></a>
            </div>
            <div className={styles.note}>
                <h3>Linkedin</h3>
                    <a href='https://fi.linkedin.com/in/saana-pullola-08268723b' target='_blank'><FaLinkedin size={150}/></a>
                </div>
            <div className={styles.note}>
                <h3>Instagram</h3>
                <a href='https://www.instagram.com/p2programmers/' target='_blank'><FaInstagram size={150}/></a>
            </div>
            <div className={styles.note} style={{gridColumn: 'span 2', height: '70%', width: '590px'}}>
               <h3>You can also contact me by:</h3>
               <p>Phone: 0401234567</p> 
               <p>Email: thisisafakeemail@outlook.com</p>
               <p>THANKS</p> 
            </div>
        </div>
    );
}

export default ContactMe;