import React from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import Menu from "./components/Menu";


import{Routes,Route, Link} from 'react-router-dom';
function App() {
 
   return(
<div>
   
        <Routes>
        <Route path='/menu' exact element={<Menu/>} ></Route>
        <Route path='/login' exact element={<Login/>}></Route>
        <Route path='/home' exact element={<Home/>} ></Route>
        <Route path='/home:id' exact element={<Home/>} ></Route>
        <Route path='/' exact element={<Login/>} ></Route> 
       
    
        
        
        </Routes>

</div>
  
  );
}

export default App;
