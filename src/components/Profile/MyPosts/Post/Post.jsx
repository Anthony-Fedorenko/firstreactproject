import React from "react";
import s from '../Post/Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1p1wjZnYh25aTDOSQFjaCfAXInFMLJjDNw&usqp=CAU'/>
            {props.message}
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>
        </div>)
}

export default Post