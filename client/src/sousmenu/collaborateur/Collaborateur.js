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
import { useState } from "react";
import Tabcollaborateur from './Tabcollaborateur' ;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};




function Modifcollab() {
    const [open, setOpen] =useState(false);
    const [id,setid]=useState("");
    const [nom,setnom]=useState("");
    const [cin,setcin]=useState("");
    const [ville,setville]=useState("");
    const [rue,setrue]=useState("");
    const [rues,setrues]=useState("");
    const [code_postale,setcode]=useState("");
    const [activité,setactivité]=useState("");
    const [tel,settel]=useState("");
    const [fax,setfax]=useState("");
    const [email,setemail]=useState("");
    const [champ1,setchamp1]=useState("");
    const [champ2,setchamp2]=useState("");
    const [champ3,setchamp3]=useState("");
    const [msg, setMsg] = useState('');
    const modifier = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/modifcollab', {
             id:id,
             nom:nom,
             cin:cin,
             ville:ville,
             rue:rue,
             rues:rues,
             code_postale:code_postale,
             activité:activité,
             tel:tel,
             fax:fax,
             email:email,
             champ1:champ1,
             champ2:champ2,
             champ3:champ3, 
         });
        setid("");
        setnom("");
        setcin("");
        setville("");
        setrue("");
        setrues("");
        setcode("");
        setactivité("");
        settel("");
        setemail("");
        setchamp1("");
        setchamp3("");
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);   }  } }

     const handleClickOpen = () => {
       setOpen(true);  };
     const handleClose = () => {
       setOpen(false);};
   
     return (
       <div>
         <Button variant="outlined" style={{color:'blue',width:"100px"}} onClick={handleClickOpen}>
           Modifier  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
         <form onClick={modifier}>
           <DialogTitle>Modifier un collaborateur</DialogTitle>
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
            id="cin"
            label="CIN"
            type="text"
            fullWidth
            variant="outlined"
            value={cin}
            onChange={(e) => setcin(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="ville"
            label="Ville"
            type="text"
            fullWidth
            variant="outlined"
            value={ville}
            onChange={(e) => setville(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="rue"
            label="rue"
            type="text"
            fullWidth
            variant="outlined"
            value={rue}
            onChange={(e) => setrue(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="rues"
            label="rues"
            type="text"
            fullWidth
            variant="outlined"
            value={rues}
            onChange={(e) => setrues(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="code_postale"
            label="Code_Postale"
            type="text"
            fullWidth
            variant="outlined"
            value={code_postale}
            onChange={(e) => setcode(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="activité"
            label="Activité"
            type="text"
            fullWidth
            variant="outlined"
            value={activité}
            onChange={(e) => setactivité(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="tel"
            label="Tel"
            type="text"
            fullWidth
            variant="outlined"
            value={tel}
            onChange={(e) => settel(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="fax"
            label="fax"
            type="text"
            fullWidth
            variant="outlined"
            value={fax}
            onChange={(e) => setfax(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="text"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
           <TextField 
            autoFocus
            margin="dense"
            id="champ1"
            label="champ1"
            type="text"
            fullWidth
            variant="outlined"
            value={champ1}
            onChange={(e) => setchamp1(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="champ2"
            label="champ2"
            type="text"
            fullWidth
            variant="outlined"
            value={champ2}
            onChange={(e) => setchamp2(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="champ3"
            label="champ3"
            type="text"
            fullWidth
            variant="outlined"
            value={champ3}
            onChange={(e) => setchamp3(e.target.value)}
          />
           </DialogContent>
           <DialogActions>
             <Button >Modifier</Button>
           </DialogActions>
           </form>
         </Dialog>     
       </div> );  }
  





function Addcollab() {
 const [open, setOpen] =useState(false);
 const [nom,setnom]=useState("");
    const [cin,setcin]=useState("");
    const [ville,setville]=useState("");
    const [rue,setrue]=useState("");
    const [rues,setrues]=useState("");
    const [code_postale,setcode]=useState("");
    const [activité,setactivité]=useState("");
    const [tel,settel]=useState("");
    const [fax,setfax]=useState("");
    const [email,setemail]=useState("");
    const [champ1,setchamp1]=useState("");
    const [champ2,setchamp2]=useState("");
    const [champ3,setchamp3]=useState("");
 const [msg, setMsg] = useState('');
 const ajouter = async (e) => {
  e.preventDefault();
  try {
      await Axios.post('http://localhost:5000/addcollab', {
        nom:nom,
        cin:cin,
        ville:ville,
        rue:rue,
        rues:rues,
        code_postale:code_postale,
        activité:activité,
        tel:tel,
        fax:fax,
        email:email,
        champ1:champ1,
        champ2:champ2,
        champ3:champ3, 
      });
      
      setnom("");
      setcin("");
      setville("");
      setrue("");
      setrues("");
      setcode("");
      setactivité("");
      settel("");
      setemail("");
      setchamp1("");
      setchamp3("");
     
  } catch (error) {
      if (error.response) {
          setMsg(error.response.data.msg); } }}

  const handleClickOpen = () => {
    setOpen(true); };
  const handleClose = () => {
    setOpen(false); };

  return (
    <div>
      <Button variant="outlined" style={{color:'blue',width:"100px"}} onClick={handleClickOpen}>
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
            id="cin"
            label="CIN"
            type="text"
            fullWidth
            variant="outlined"
            value={cin}
            onChange={(e) => setcin(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="ville"
            label="Ville"
            type="text"
            fullWidth
            variant="outlined"
            value={ville}
            onChange={(e) => setville(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="rue"
            label="rue"
            type="text"
            fullWidth
            variant="outlined"
            value={rue}
            onChange={(e) => setrue(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="rues"
            label="rues"
            type="text"
            fullWidth
            variant="outlined"
            value={rues}
            onChange={(e) => setrues(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="code_postale"
            label="Code_Postale"
            type="text"
            fullWidth
            variant="outlined"
            value={code_postale}
            onChange={(e) => setcode(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="activité"
            label="Activité"
            type="text"
            fullWidth
            variant="outlined"
            value={activité}
            onChange={(e) => setactivité(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="tel"
            label="Tel"
            type="text"
            fullWidth
            variant="outlined"
            value={tel}
            onChange={(e) => settel(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="fax"
            label="fax"
            type="text"
            fullWidth
            variant="outlined"
            value={fax}
            onChange={(e) => setfax(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="text"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
           <TextField 
            autoFocus
            margin="dense"
            id="champ1"
            label="champ1"
            type="text"
            fullWidth
            variant="outlined"
            value={champ1}
            onChange={(e) => setchamp1(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="champ2"
            label="champ2"
            type="text"
            fullWidth
            variant="outlined"
            value={champ2}
            onChange={(e) => setchamp2(e.target.value)}
          />
            <TextField 
            autoFocus
            margin="dense"
            id="champ3"
            label="champ3"
            type="text"
            fullWidth
            variant="outlined"
            value={champ3}
            onChange={(e) => setchamp3(e.target.value)}
          />       
        </DialogContent>
        <DialogActions>
          <Button >Ajouter</Button>
        </DialogActions>
        </form>
      </Dialog>    
    </div>);}



function Suppcollab() {
  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/suppcollab', {
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
       <Button variant="outlined" style={{color:'blue',width:"100px"}} onClick={handleClickOpen}>
         Supprimer  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={supprimer}>
         <DialogTitle>Supprimer un collaborateur</DialogTitle>
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
      <Button onClick={handleOpen}>Collaborateurs</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "560px",width:"3px"}} >X</Button>
          <DialogTitle style={{color:'red' ,marginLeft:"250px"}} >Liste des collaborateurs</DialogTitle>
          <p id="parent-modal-description">
            <Tabcollaborateur/>
          </p>
       <DialogActions>
       <Addcollab/>
          <Suppcollab/>
          <Modifcollab/>
       </DialogActions>
          
        </Box>
      </Modal>
    </div>
  );
}