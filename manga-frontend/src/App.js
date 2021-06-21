import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import Manga from './Manga';
import Discussions from './Discussions';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from './User';

function App() {

const posts = [
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

let discussions = [
  {
    userName: "Joe",
    title: "looking for a new manga",
    content: "Just finished reading casshern sins, can someone suggest something similar?",
    responses: []
  }
]

let uP = []
let uD = []
uP.push(posts.filter(post => post.userName === "Joe"))
uD.push(discussions.filter(discus => discus.userName === "Joe"))

console.log(uP)



  return (
    <Router>
    <div className="App">   
      <h1>Manga Seeker</h1>
      <Navbar />

      <Route exact path= '/' />
      <Route exact path= '/posts'  render={routeProps => (
        <Posts 
        {...routeProps}
        allPosts={posts}
        
        />
        )}
        />
      <Route exact path= '/discussions'  render={routeProps => (
        <Discussions 
        {...routeProps}
        
        disc={discussions}
        />
        )}
        />
      <Route exact path= '/manga' component ={Manga}/>
      <Route exact path= '/user'  render={routeProps => (
        <User 
        {...routeProps}
        userPosts={uP}
        userDisc={uD}
        />
        )}
        />
    </div>
    </Router>
    
  );
}

export default App;
