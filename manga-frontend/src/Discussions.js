import React from 'react';
import Comment from "./Comment"

class Discussions extends React.Component {

    state ={
        discus: this.props.disc
    }


    displayDiscs = () => {
        
        return(this.state.discus.map((post) => {
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
            <div>
              <h1> A place to talk anout Manga</h1>
              {this.state.discus && this.displayDiscs()}
              <button> New Discussion</button>
            </div>
            
        )
    }
}

export default Discussions;