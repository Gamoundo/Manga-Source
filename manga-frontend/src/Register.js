import React from 'react';
import { useHistory } from 'react-router-dom';



function Register(props) {
  
    
    
    
  const history= useHistory()
    
    
  const  handleSubmit = (event)  => {
        event.preventDefault();
        
      let  user = {
          name: event.target.name.value,
          pwd: event.target.password.value
        }
            //    console.log(this.state)
            //console.log(user)
            window.localStorage.setItem("Manga Source", JSON.stringify(user))
            props.changeUser(user)
            history.push('/')
        }
        
        
//         this.props.changeUser(this.state.name, this.state.password)
//    console.log(this.state)
//        this.props.history.push(`/home`);
       
    
    
    
    
  
    
        
        return (
      <div className="login">
      <form  onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <input type="text" name="name" />
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input type="password" name="password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Register" />
      </form>
            
      </div>
    );
  }


export default Register;