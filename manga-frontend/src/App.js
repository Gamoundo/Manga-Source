import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import Manga from './Manga';
import Discussions from './Discussions';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">   
      <h1>Manga Seeker</h1>
      <Navbar />

      <Route exact path= '/' />
      <Route exact path= '/posts' component ={Posts}/>
      <Route exact path= '/discussions' component ={Discussions}/>
      <Route exact path= '/manga' component ={Manga}/>
      
    </div>
    </Router>
    
  );
}

export default App;
