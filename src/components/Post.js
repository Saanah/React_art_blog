import React from 'react';
import styles from '../styles/post.module.css'
import pin from './pin.png'

function Post(props) {

    return (
        <div className={styles.post}>
            <div className={styles.postdate}>
                <p>{props.art.date}</p>
                <img src={pin} className={styles.pin}></img>
            </div>
            <img src={props.art.image} className={styles.image}></img>
            <p>{props.art.text}</p>
        </div>
    );
}

export default Post;