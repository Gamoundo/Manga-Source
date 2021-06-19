import React from 'react';

function Comment(props) {

    return(
        <div className="manga">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <h3>{props.userName}</h3>
        </div>
    )
}

export default Comment;