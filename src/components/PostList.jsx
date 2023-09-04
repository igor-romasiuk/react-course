import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Post list</h1>
            
            {props.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostList;
