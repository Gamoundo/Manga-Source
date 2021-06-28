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


let currentUser = {
  name: "",
  pwd: ""
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
      <Route exact path= '/user'  component={User} />
      <Route exact path= '/register'  component={Register} />
    </div>
    </Router>
    
  );
}

export default App;
