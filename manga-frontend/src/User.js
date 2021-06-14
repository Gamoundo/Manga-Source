import React from 'react'

class User extends React.Component {

    state = {
        userPosts: [],
        userName: 'Joe',
        userDiscus: []
    }
    render() {
        return (
        <div className="userPage">
            <h3>{this.state.userName}'s posts and discussions</h3>
        </div>

        
            )
    }
    
}

export default User;