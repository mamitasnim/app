import React from "react";
import Axios from 'axios';
import {useState , useEffect} from "react";
import{BrowserRouter as Router,Switch, Route,Routes,Link,useNavigate} from "react-router-dom";
import Home from './Home';

import{useParams} from 'react-router-dom';

function Login(){
  
    const {id}=useParams();
   
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [msg, setMsg] = useState('');
    const Navigate = useNavigate();
  
    const inscrire= async (e) => {
      e.preventDefault();
      try {
          await Axios.post('http://localhost:5000/connecter', {
             
              email: email,
              password: password,
             
          });
          Navigate("/menu");
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }
    
      
    return(
        
        <div className="App">
             <form onSubmit={inscrire}>
        <div className='form'>
          <h1>Bienvenue </h1> 
          <p >{msg}</p> 
        <input type ="email" name="login" required ="required" value={email}   placeholder=" Email"onChange={(e) =>{
          setemail( e.target.value);}}/>
          <input type ="password" name="password" required="required"value={password}  placeholder=" Mot de passe"onChange={(e) =>{
            setpassword(e.target.value)
          }}
          />
          <div id ="connecter">
        
          <button  > se connecter
         
          </button>
          </div>
          <h3>Vous n'avez pas un compte ? <Link to='/home' >s'inscrire</Link> 
     <Routes><Route path='/home' exact element={<Home/>} ></Route></Routes> </h3>
      
          </div>
          </form>
          </div>
       );    
}
export default Login;
