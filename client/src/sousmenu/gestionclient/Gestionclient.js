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
import Tabgestion from './Tabgestionclient';



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




function Adddossier() {
 const [open, setOpen] =useState(false);
 const [raison, setraison] = useState("");
const [matricule,setmatricule]=useState("");
const [ville,setville]=useState("");
const [rue,setrue]=useState("");
const [num,setnum]=useState("");
const [code_postale,setcode_postale]=useState("");
const [activite,setactivite]=useState("");
const [situation_fiscale,setsituation_fiscale]=useState("");
const [type, settype] = useState("");
 const [msg, setMsg] = useState('');
 const ajouter = async (e) => {
  e.preventDefault();
  try {
      await Axios.post('http://localhost:5000/adgestion', {
        raison:raison,
        matricule:matricule,
        ville:ville,
        rue:rue,
        num:num,
        code_postale:code_postale,
        activite:activite,
        situation_fiscale:situation_fiscale,
        type:type,
      });
     setraison("");
     setmatricule("");
     setville("");
     setrue("");
     setnum("");
     setcode_postale("");
     setactivite("");
     settype("");
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
      <Button variant="outlined" style={{color:'blue',width:"100px"}} onClick={handleClickOpen}>
        Ajouter  </Button>
      <Dialog open={open} onClose={handleClose}>
      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
      <form onClick={ajouter}>
        <DialogTitle style={{color:'red' ,marginRight:"200px"}} >Ajouter Client</DialogTitle>
        <p>{msg}</p>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            id="raison"
            label="raison"
            type="text"
            fullWidth
            variant="outlined"
            value={raison}
            onChange={(e) => setraison(e.target.value)}
          />
           <TextField 
            autoFocus
            margin="dense"
            id="matricule"
            label="matricule"
            type="text"
            fullWidth
            variant="outlined"
            value={matricule}
            onChange={(e) => setmatricule(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="ville"
            label="ville"
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
            id="num"
            label="num"
            type="text"
            fullWidth
            variant="outlined"
            value={num}
            onChange={(e) => setnum(e.target.value)}
          /><TextField 
          autoFocus
          margin="dense"
          id="code_postale"
          label="code_postale"
          type="text"
          fullWidth
          variant="outlined"
          value={code_postale}
          onChange={(e) => setcode_postale(e.target.value)}
        /><TextField 
        autoFocus
        margin="dense"
        id="activite"
        label="activite"
        type="text"
        fullWidth
        variant="outlined"
        value={activite}
        onChange={(e) => setactivite(e.target.value)}
      />
      <TextField 
            autoFocus
            margin="dense"
            id="situation_fiscale"
            label="situation_fiscale"
            type="text"
            fullWidth
            variant="outlined"
            value={situation_fiscale}
            onChange={(e) => setsituation_fiscale(e.target.value)}
          />

         <TextField 
            autoFocus
            margin="dense"
            id="type"
            label="type"
            type="text"
            fullWidth
            variant="outlined"
            value={type}
            onChange={(e) => settype(e.target.value)}
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
function Suppossier() {
  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/supgestion', {
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
       <Button variant="outlined" style={{color:'blue',width:"100px"}} onClick={handleClickOpen}>
         Supprimer  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={supprimer}>
         <DialogTitle>Supprimer un Client</DialogTitle>
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
      <Button onClick={handleOpen}></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "560px",width:"3px"}} >X</Button>
          <DialogTitle style={{color:'red' ,marginLeft:"250px"}} >Liste des clients</DialogTitle>
          <p id="parent-modal-description">
            <Tabgestion/>
          </p>
       <DialogActions>
          <Adddossier/>
          <Suppossier/>
       </DialogActions>
          
        </Box>
      </Modal>
    </div>
  );
}
