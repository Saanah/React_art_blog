import React from 'react';
import styles from '../styles/Artist.module.css'

function Artist(props) {
    return (
        <div className={styles.infoBox}>
            <h1>Hi I'm Hana!</h1>
            <div className={styles.text}>
            <p>I'm 21 years old information technology student from Finland!
               I started out with zero coding experience (as you can probably see),
               but programming has turned out to be really fun!</p>
               <p>I also like to draw in my free time. Nowadays I mostly draw digitally.
               I'm an night owl and like to work on projects at night.</p>
               <p>Other things I like to do include gaming, reading, writing and training my cat.</p>
            </div>
        </div>
    );
}

export default Artist;