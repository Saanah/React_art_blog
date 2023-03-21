import React from 'react';
import styles from '../styles/Postview.module.css'
import Post from './Post';



function PostView(props) {
    return (
        <div className={styles.postview}>
            {props.art.map((item) => (
                <Post art={item} key={item.id}></Post>
            ))}
        </div>
    );
}

export default PostView;