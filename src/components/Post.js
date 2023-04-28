import React from 'react';
import styles from '../styles/post.module.css'

function Post(props) {

    return (
        <div className={styles.post}>
            <div className={styles.postdate}>
                <p>{props.art.date}</p>
                <img src={process.env.PUBLIC_URL + "/pin.png"} className={styles.pin}></img>
            </div>
            <img src={process.env.PUBLIC_URL + props.art.image} alt={props.art.alt} className={styles.image}></img>
            <p>{props.art.text}</p>
        </div>
    );
}

export default Post;