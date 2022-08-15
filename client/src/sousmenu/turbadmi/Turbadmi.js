import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Axios from 'axios' ;
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tabadministration from './Tabadministration';
import { useState } from "react";
import Tabtribunaux from './Tabtribunaux';

import "./Turbadmi.css"

function Modifadmi() {
    const [open, setOpen] =useState(false);
    const[id,setid]=useState("");
    const [nom,setnom]=useState("");
       const [lundi,setlundi]=useState("");
       const [mardi,setmardi]=useState("");
       const [mercredi,setmercredi]=useState("");
       const [jeudi,setjeudi]=useState("");
       const [vendredi,setvendredi]=useState("");
       const [samedi,setsamedi]=useState("");
      
    const [msg, setMsg] = useState('');
    const modifier = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/modifadmi', {
            id:id,
           nom:nom,
           lundi:lundi,
          mardi:mardi,
          mercredi:mercredi,
          jeudi:jeudi,
          vendredi:vendredi,
          samedi:samedi,
         });
         setid("");
         setnom("");
         setlundi("");
         setmardi("");
         setmercredi("");
         setjeudi("");
         setvendredi("");
         setsamedi("");
         
        
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg); } }}
   
     const handleClickOpen = () => {
       setOpen(true); };
     const handleClose = () => {
       setOpen(false); };
   
     return (
       <div>
         <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"30px"}} onClick={handleClickOpen}>
           Modifier </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
         <form onClick={modifier}>
           <DialogTitle>Modifier une administration</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
           <TextField 
               autoFocus
               margin="dense"
               id="id"
               label="id"
               type="text"
               fullWidth
               variant="outlined"
               value={id}
               onChange={(e) => setid(e.target.value)}
             />
           <TextField 
               autoFocus
               margin="dense"
               id="nom"
               label="Nom"
               type="text"
               fullWidth
               variant="outlined"
               value={nom}
               onChange={(e) => setnom(e.target.value)}
             />
               <TextField 
               autoFocus
               margin="dense"
               id="lundi"
               label="lundi"
               type="text"
               fullWidth
               variant="outlined"
               value={lundi}
               onChange={(e) => setlundi(e.target.value)}
             />
               <TextField 
               autoFocus
               margin="dense"
               id="mardi"
               label="mardi"
               type="text"
               fullWidth
               variant="outlined"
               value={mardi}
               onChange={(e) => setmardi(e.target.value)}
             />
               <TextField 
               autoFocus
               margin="dense"
               id="mercredi"
               label="mercredo"
               type="text"
               fullWidth
               variant="outlined"
               value={mercredi}
               onChange={(e) => setmercredi(e.target.value)}
             />
               <TextField 
               autoFocus
               margin="dense"
               id="jeudi"
               label="jeudi"
               type="text"
               fullWidth
               variant="outlined"
               value={jeudi}
               onChange={(e) => setjeudi(e.target.value)}
             />
               <TextField 
               autoFocus
               margin="dense"
               id="samedi"
               label="samdi"
               type="text"
               fullWidth
               variant="outlined"
               value={samedi}
               onChange={(e) => setsamedi(e.target.value)}
             />
              
           </DialogContent>
           <DialogActions>
             <Button >Modifier</Button>
           </DialogActions>
           </form>
         </Dialog>    
       </div>);}

function Suppadmi() {
    const [open, setOpen] =useState(false);
    const [id,setid]=useState("");
    const [msg, setMsg] = useState('');
    const supprimer = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/suppadmi', {
             id:id,
         });   
         setid("");
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg); }}}
     const handleClickOpen = () => {
       setOpen(true);  };
     const handleClose = () => {
       setOpen(false); };
   
     return (
       <div>
         <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"20px"}} onClick={handleClickOpen}>
           Supprimer  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
         <form onClick={supprimer}>
           <DialogTitle>Supprimer une administration</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
             <TextField 
               autoFocus
               margin="dense"
               id="id"
               label="id"
               type="text"
               fullWidth
               variant="outlined"
               value={id}
               onChange={(e) => setid(e.target.value)}
             />
           </DialogContent>
           <DialogActions>
             <Button >Supprimer</Button>
           </DialogActions>
           </form>
         </Dialog>
        
       </div>
     );
   }

function Addadmi() {
    const [open, setOpen] =useState(false);
    const [nom,setnom]=useState("");
       const [lundi,setlundi]=useState("");
       const [mardi,setmardi]=useState("");
       const [mercredi,setmercredi]=useState("");
       const [jeudi,setjeudi]=useState("");
       const [vendredi,setvendredi]=useState("");
       const [samedi,setsamedi]=useState("");
       const [tribid,settribid]=useState("");

    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/addadmi', {
           nom:nom,
           lundi:lundi,
          mardi:mardi,
          mercredi:mercredi,
          jeudi:jeudi,
          vendredi:vendredi,
          samedi:samedi,
          tribid:tribid,
         });
         
         setnom("");
         setlundi("");
         setmardi("");
         setmercredi("");
         setjeudi("");
         setvendredi("");
         setsamedi("");
         settribid("");
        
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg); } }}
   
     const handleClickOpen = () => {
       setOpen(true); };
     const handleClose = () => {
       setOpen(false); };
   
     return (
       <div>
         <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"10px"}} onClick={handleClickOpen}>
           Ajouter  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
         <form onClick={ajouter}>
           <DialogTitle>Ajouter un collaborateur</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
           <TextField 
               autoFocus
               margin="dense"
               id="nom"
               label="Nom"
               type="text"
               fullWidth
               variant="outlined"
               value={nom}
               onChange={(e) => setnom(e.target.value)}
             />
               <TextField 
               autoFocus
               margin="dense"
               id="lundi"
               label="lundi"
               type="text"
               fullWidth
               variant="outlined"
               value={lundi}
               onChange={(e) => setlundi(e.target.value)}
             />
               <TextField 
               autoFocus
               margin="dense"
               id="mardi"
               label="mardi"
               type="text"
               fullWidth
               variant="outlined"
               value={mardi}
               onChange={(e) => setmardi(e.target.value)}
             />
               <TextField 
               autoFocus
               margin="dense"
               id="mercredi"
               label="mercredi"
               type="text"
               fullWidth
               variant="outlined"
               value={mercredi}
               onChange={(e) => setmercredi(e.target.value)}
             />
               <TextField 
               autoFocus
               margin="dense"
               id="jeudi"
               label="jeudi"
               type="text"
               fullWidth
               variant="outlined"
               value={jeudi}
               onChange={(e) => setjeudi(e.target.value)}
             />
              <TextField 
               autoFocus
               margin="dense"
               id="vendredi"
               label="vendredi"
               type="text"
               fullWidth
               variant="outlined"
               value={vendredi}
               onChange={(e) => setvendredi(e.target.value)}
             />
              
               <TextField 
               autoFocus
               margin="dense"
               id="samedi"
               label="samdi"
               type="text"
               fullWidth
               variant="outlined"
               value={samedi}
               onChange={(e) => setsamedi(e.target.value)}
             />
                 <TextField 
               autoFocus
               margin="dense"
               id="tribid"
               label="tribid"
               type="text"
               fullWidth
               variant="outlined"
               value={tribid}
               onChange={(e) => settribid(e.target.value)}
             />
              
           </DialogContent>
           <DialogActions>
             <Button >Ajouter</Button>
           </DialogActions>
           </form>
         </Dialog>    
       </div>);}


function Addtrib() {
 const [open, setOpen] =useState(false);
 const [lieux,setlieux]=useState("");
 const [msg, setMsg] = useState('');
 const ajouter = async (e) => {
  e.preventDefault();
  try {
      await Axios.post('http://localhost:5000/adtrib', {
      
          lieux:lieux,
      });
      setlieux("");
     
  } catch (error) {
      if (error.response) {
          setMsg(error.response.data.msg);
      }
  }
}
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"5px"}}
       onClick={handleClickOpen}>
        Ajouter  </Button>
      <Dialog open={open} onClose={handleClose}>
      <Button onClick={handleClose} style={{padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
      <form onClick={ajouter}>
        <DialogTitle>Ajouter un Tribunaux</DialogTitle>
        <p>{msg}</p>
        <DialogContent>
        
          <TextField 
            autoFocus
            margin="dense"
            id="lieux"
            label="lieux"
            type="text"
            fullWidth
            variant="outlined"
            value={lieux}
            onChange={(e) => setlieux(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button >Ajouter</Button>
        </DialogActions>
        </form>
      </Dialog>
     
    </div>
  );
}
function Supptrib() {
  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/suptrib', {
           id:id,
       });
       setid("");
      
   } catch (error) {
       if (error.response) {
           setMsg(error.response.data.msg);
       }
   }
 }
   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <div>
       <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"15px"}}
        onClick={handleClickOpen}>
         Supprimer  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={supprimer}>
         <DialogTitle>Supprimer un Tribunaux</DialogTitle>
         <p>{msg}</p>
         <DialogContent>
           <TextField 
             autoFocus
             margin="dense"
             id="id"
             label="id"
             type="text"
             fullWidth
             variant="outlined"
             value={id}
             onChange={(e) => setid(e.target.value)}
           />
         </DialogContent>
         <DialogActions>
           <Button >Supprimer</Button>
         </DialogActions>
         </form>
       </Dialog>
      
     </div>
   );
 }
 function Modiftirb() {
  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
  const [lieux,setlieux]=useState("");
  const [msg, setMsg] = useState('');
  const modifier= async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/modiftrib', {
           id:id,
           lieux:lieux,
       });
       setid("");
       setlieux("");
      
   } catch (error) {
       if (error.response) {
           setMsg(error.response.data.msg);
       }
   }
 }
   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <div>
       <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"25px"}} onClick={handleClickOpen}>
         Modifier  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={modifier}>
         <DialogTitle>Modifier un Tribunaux</DialogTitle>
         <p>{msg}</p>
         <DialogContent>
           <TextField 
             autoFocus
             margin="dense"
             id="id"
             label="id"
             type="text"
             fullWidth
             variant="outlined"
             value={id}
             onChange={(e) => setid(e.target.value)}
           />
            <TextField 
             autoFocus
             margin="dense"
             id="lieux"
             label="lieux"
             type="text"
             fullWidth
             variant="outlined"
             value={lieux}
             onChange={(e) => setlieux(e.target.value)}
           />
         </DialogContent>
         <DialogActions>
           <Button >Modifier</Button>
         </DialogActions>
         </form>
       </Dialog>
      
     </div>
   );
 }

export default function NestedModal() {
  const [open, setOpen] =useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}></Button>
        <Dialog fullScreen open={open} onClose={handleClose} maxWidth="lg">
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1290px",width:"3px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
          <DialogTitle style={{color:'#6e5244' , marginLeft:"370px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"35px"}} >
            Liste des Tribunaux et administration
            </DialogTitle>
      <table style={{marginLeft:"100px"}}>
        <tr >
          <td style={{alignItems:"center"}}>
          <p id="parent-modal-description"></p>
       <DialogTitle style={{color:'#1f4b77', fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"25px"}} >Liste  Tribunaux </DialogTitle>
          </td>
          <td>
          <p id="parent-modal-description"> </p>
        <DialogTitle style={{color:'#1f4b77', fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"25px"}} >Liste Services</DialogTitle>
          </td>
       </tr>
       <tr>
        <td>
        <Tabtribunaux/>
        </td>
        <td>
        <Tabadministration/>
        </td>
          
       </tr>
            <tr>
                <td><Button style={{width:"100px"}}> <Addtrib/></Button> 
                 <Button style={{width:"100px"}} ><Supptrib/>  </Button>
                <Button style={{width:"100px"}} ><Modiftirb/> </Button></td> 
                <td> <Button style={{width:"100px"}}><Addadmi/></Button> 
                 <Button style={{width:"100px"}} ><Suppadmi/>  </Button>
                 <Button style={{width:"100px"}} ><Modifadmi/> </Button></td>
            </tr>
      </table>
       </Dialog>
    </div>
    
  );
}
