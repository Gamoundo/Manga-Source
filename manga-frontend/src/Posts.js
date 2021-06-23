import React from 'react'
import Comment from './Comment'
import PostBtn from './PostBtn'

class Posts extends React.Component {

    state ={
        posts: [
            {
              userName: "Joe",
              title: "Samurai manga?",
              content: "anyone remembers a manga where a samurai is fighting a mechanical bear? Can't remember any other details.",
              responses: []
            },
            {
              userName: "Sara",
              title: "Gun fu?",
              content: "Any mangas with some great gun kata?",
              responses: []
            }
          
          ]

    }

    addPost = (post) => {
        this.setState(prevState => ({
            posts: [...prevState.posts, post]
        }))
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
        
        return (
        <div className="post">
            <h3>A place to inquire about Manga</h3>
            {this.state.posts && this.displayPosts()}
            <PostBtn addPost={this.addPost} />
        </div>

        
            )
    }
    
}

export default Posts;