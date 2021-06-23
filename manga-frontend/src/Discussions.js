import React from 'react';
import Comment from "./Comment"
import DiscusBtn from './DiscusBtn';

class Discussions extends React.Component {

    state ={
        discus: [
            {
              userName: "Joe",
              title: "looking for a new manga",
              content: "Just finished reading casshern sins, can someone suggest something similar?",
              responses: []
            }
          ]
    }

    addDiscus = (post) => {
        this.setState(prevState => ({
            discus: [...prevState.discus, post]
        }))
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
              <h1> A place to talk about Manga</h1>
              {this.state.discus && this.displayDiscs()}
              <DiscusBtn addDisc={this.addDiscus}/>
            </div>
            
        )
    }
}

export default Discussions;