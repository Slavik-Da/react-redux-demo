import React from "react";
import styles from './Post.module.css';

const Post = (props) => {

  return (
    <div className={styles.item}>
      <img src={props.imgSrc}/>
      {props.message}
      <div>
        <span> likes :</span>{props.likes}
      </div>
    </div>

  )
}

export default Post;
