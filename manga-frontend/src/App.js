import React from 'react';

import './App.css';
import Posts from './Posts';
import Manga from './Manga';
import Discussions from './Discussions';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from './User';
import Register from './Register';


function App() {

let users = [
  {
    name: "joe",
    pwd: "fish"
  },
  {
    name: "sara",
    pwd: "bellum"
  }
]

const storedUser= window.localStorage.getItem("Manga Source");
let currentUser = {
  name: storedUser ? JSON.parse(storedUser).name : "",
  pwd: storedUser ? JSON.parse(storedUser).pwd : ""
}

const updateUser = (user) => {
  currentUser.name = user.name
  currentUser.pwd = user.pwd
}








  return (
    <Router>
    <div className="App">   
      <h1>Manga Seeker</h1>
      <Navbar />

      <Route exact path= '/' />
      <Route exact path= '/posts'  component={Posts} />
      <Route exact path= '/discussions' component={Discussions}/>
      <Route exact path= '/manga' component ={Manga} />
      <Route exact path= '/user'  render={ routerProps => <User {...routerProps} name={currentUser.name}/>}>
      </Route> 
      <Route exact path= '/register'  render={ routerProps => <Register {...routerProps} changeUser={updateUser}/>}>
      </Route> 
    </div>
    </Router>
    
  );
}

export default App;
