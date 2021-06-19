import React from 'react'
import Comment from './Comment'

class Posts extends React.Component {

    state ={
        posts: this.props.allPosts || []

    }

    displayPosts = () => {
        
        return(this.state.posts.map((post) => {
            console.log(post)
            return(
               <Comment 
                 key={post.id}
                 userName={post.userName}
                 title={post.title}
                 content={post.content}
                 responses={post.responses}
               
               
               
               />

            )
        }))
    }
    render() {
        console.log(this.props.allPosts)
        return (
        <div className="post">
            <h3>hi</h3>
            {this.state.posts && this.displayPosts()}
            <button> New Post</button>
        </div>

        
            )
    }
    
}

export default Posts;