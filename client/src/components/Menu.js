import React from 'react';
import '../index.css';
import { useState, useEffect, useRef } from 'react';
import {CSSTransition} from 'react-transition-group';
import axios from 'axios';
import Empdossier from '../sousmenu/empdossier/Empdossier';
import Timbre from '../sousmenu/timbre/Timbre'
import Utilisateur from '../sousmenu/utilisateur/Utilisateur';
import Typedossier from '../sousmenu/typedossier/Typedossier';
import Recettefinance from '../sousmenu/recettefinance/Recettefinance';
import Photocopie from '../sousmenu/photocopie/Photocopie';
import Paramgeneral from '../sousmenu/Paramgeneral/Param';
import Greffier from '../sousmenu/Greffier/Greffier';
import { useNavigate } from 'react-router';
import Collaborateur from '../sousmenu/collaborateur/Collaborateur';
import Gestionclient from '../sousmenu/gestionclient/Gestionclient';
import Transport from '../sousmenu/transport/Transport';
import Turbadmi from '../sousmenu/turbadmi/Turbadmi';
import Primegreffier from '../sousmenu/Primegreffier/Primegreff';
import Honoexra from '../sousmenu/honoextra/Honoexra'
import Creation from '../sousmenu/creationdossier/Creation'
import EmpDoss from '../sousmenu/Dossier/Emplacement dossier/Emp_doss';
import Recherche from '../sousmenu/Dossiers/Recherche.js'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';



function Menu() {

  const navigate = useNavigate();

  const Logout = async () => {
      try {
          await axios.delete('http://localhost:5000/logout');
          navigate("/login");
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <Navbar>
      <NavItems icon='Paramètres'>
        <DropDownParam/>
      </NavItems>
      <NavItems icon='Client'>
        <Client/>
      </NavItems>
      <NavItems icon='Dossier'> 
          <Dossier/>   
      </NavItems>
      <NavItems icon='Rappel'></NavItems>
      <NavItems icon='Règlement'></NavItems>
      <NavItems icon='Etat huissier'></NavItems>
      <button onClick={Logout} style={{width:"80px",marginTop:"12px",marginRight:"20px",} } > deconnexion</button>
      
    </Navbar>
 
  );
}

function Navbar(props){
  return(
    <nav className='navbar'>
      <ul className='navbar-nav'>
        {props.children}
      </ul>

    </nav>
  );
}

function NavItems(props){
  const[open, setopen]=useState(false);

  return(
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={()=>setopen(!open)}>
        {props.icon}
      </a>

    {open && props.children}
    </li>
  );
}

//icon
/*function ArrowForwardIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}*/


function DropDownParam(){

  const [activeMenu, setActiveMenu]= useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  function DropDownItem(props){
    return(
    <a className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
      {props.children}
    </a>
    );
  }

 
  return(
    
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="parametres"
      onEnter={calcHeight}>
        <div className='menu'>
          <DropDownItem>
            Paramètres global
            <Paramgeneral/>
          </DropDownItem>
          <DropDownItem>
            Honoraire en extra
            <Honoexra/>
          </DropDownItem>
          <DropDownItem goToMenu="debours" /*icon={ArrowForwardIcon}*/>
            Debours  <pre> <KeyboardDoubleArrowRightIcon sx={{ color:"white", fontSize: 22}}/></pre>
          </DropDownItem>
          <DropDownItem>
            Emplacement dossier
            <Empdossier/>
          </DropDownItem>
          <DropDownItem>
            Tribunaux et administration
            <Turbadmi/>
          </DropDownItem>
          <DropDownItem>
            Type Dossier
             <Typedossier/>
          </DropDownItem>
          <DropDownItem>
            Utilisateur
            <Utilisateur/>
          </DropDownItem>
          <DropDownItem>
            Huissier
          </DropDownItem>
          <DropDownItem>
            Collaborateurs
            <Collaborateur/>
          </DropDownItem>
          <DropDownItem>
            Greffier
            <Greffier/>
          </DropDownItem>
          <DropDownItem>
            Prime Greffier
            <Primegreffier/>
          </DropDownItem>
          
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'debours'}
        timeout={500}
        classNames="parametres-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropDownItem goToMenu="main">
          <pre><KeyboardDoubleArrowLeftIcon sx={{ color:"white", fontSize: 22}}/> </pre> Debours
          </DropDownItem>
          <DropDownItem>
            Timbre
            <Timbre/>
          </DropDownItem>
          <DropDownItem>Photocopie
            <Photocopie/>
          </DropDownItem>
          <DropDownItem>Transport
            <Transport/>
          </DropDownItem>
          <DropDownItem>
            Recette du finance
           <Recettefinance/>
          </DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}



function Client(){

  const [activeMenu, setActiveMenu]= useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  function DropDownItem(props){
    return(
    <a className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
      {props.children}
    </a>
    );
  }

 
  return(
    
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="parametres"
      onEnter={calcHeight}>
        <div className='menu'>      
          <DropDownItem>
            Gestion Client
           <Gestionclient/> 
          </DropDownItem>
          <DropDownItem>
            Fiche Signalitique
          </DropDownItem>
         
          
        </div>
      </CSSTransition>

      
    </div>
  );
}
function Dossier(){

  const [activeMenu, setActiveMenu]= useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  function DropDownItem(props){
    return(
    <a className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
      {props.children}
    </a>
    );
  }

 
  return(
    
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="parametres"
      onEnter={calcHeight}>
        <div className='menu'>
          <DropDownItem>
            Recherche 
            <Recherche/>
          </DropDownItem>
          <DropDownItem>
            Emplacement dossier
            <EmpDoss/>
          </DropDownItem>
          <DropDownItem>
            Création dossier
            <Creation/>
          </DropDownItem>
          <DropDownItem>
             Gestion Archive
          </DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

/*function DropDownMenu(){

  const [activeMenu, setActiveMenu]= useState('client');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props){
    return(
    <a href='#' className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
      {props.children}
    </a>
    );
  }

  return(
    
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition in={activeMenu === 'client'} unmountOnExit timeout={500} classNames="parametres">
        <div className='menu'>
        <DropDownItem>
            Gestion client
                                    < Gestionclient/>
        </DropDownItem>
        <DropDownItem>
          Fiche Signalitique
        </DropDownItem>
        </div>
      </CSSTransition>
    </div>
    
   
  );
}*/


export default Menu;