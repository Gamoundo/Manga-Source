import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '50px',
    padding: '4px',
    margin: '0 6px 6px',

    textDecoration: 'none',
    color: 'pink',
  }

function Navbar() {
    return (
        <div className="nav">
            <NavLink
          to="/"
          
          exact
          
          style={link}
          
          activeStyle={{
            color: 'green'
          }}
          >Home</NavLink>
          <NavLink
          to="/Manga"
          
          exact
          
          style={link}
          
          activeStyle={{
            color: 'green'
          }}
          >Manga</NavLink>
          <NavLink
          to="/posts"
          
          exact
          
          style={link}
          
          activeStyle={{
            color: 'green'
          }}
          >Posts</NavLink>
          <NavLink
          to="/discussions"
          
          exact
          
          style={link}
          
          activeStyle={{
            color: 'green'
          }}
          >Discussions</NavLink>
        </div>
    )

}

export default Navbar;