import React from 'react'

class User extends React.Component {

    state = {
        userPosts: this.props.userPosts || "nothing to see here.",
        userName: 'Joe',
        userDiscus: []
    }
    render() {
        console.log(this.props)
        return (
        <div className="userPage">
            <h3>{this.state.userName}'s posts and discussions</h3>
            <h2>{this.state.userPosts}</h2>
        </div>

        
            )
    }
    
}

export default User;