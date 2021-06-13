import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'red',
    textDecoration: 'none',
    color: 'pink',
  }

function Navbar() {
    return (
        <div>
            <NavLink
          to="/"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Home</NavLink>
          <NavLink
          to="/Manga"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Manga</NavLink>
          <NavLink
          to="/posts"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Posts</NavLink>
          <NavLink
          to="/discussions"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Discussions</NavLink>
        </div>
    )

}

export default Navbar;