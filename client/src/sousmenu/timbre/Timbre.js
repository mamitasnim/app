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
import Tabtimbre from './Tabtimbre';



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
 const [lbelle,setlbelle]=useState("");
 const [montant,setmontant]=useState("");
 const [msg, setMsg] = useState('');
 const ajouter = async (e) => {
  e.preventDefault();
  try {
      await Axios.post('http://localhost:5000/adtimbre', {
          lbelle:lbelle,
          montant:montant,
      });
     setlbelle("");
     setmontant("");
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
      <Button variant="outlined" style={{color:'blue',width:"200px"}} onClick={handleClickOpen}>
        Ajouter  </Button>
      <Dialog open={open} onClose={handleClose}>
      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
      <form onClick={ajouter}>
        <DialogTitle>Ajouter un Timbre</DialogTitle>
        <p>{msg}</p>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            id="lbelle"
            label="lbelle"
            type="text"
            fullWidth
            variant="outlined"
            value={lbelle}
            onChange={(e) => setlbelle(e.target.value)}
          />
           <TextField 
            autoFocus
            margin="dense"
            id="montant"
            label="montant"
            type="text"
            fullWidth
            variant="outlined"
            value={montant}
            onChange={(e) => setmontant(e.target.value)}
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
       await Axios.post('http://localhost:5000/suptimbre', {
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
       <Button variant="outlined" style={{color:'blue',width:"200px"}} onClick={handleClickOpen}>
         Supprimer  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={supprimer}>
         <DialogTitle>Supprimer un timbre</DialogTitle>
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


function Modifdossier() {
  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
  const [lbelle,setlbelle]=useState("");
  const[ montant,setmontant]=useState("");
  const [msg, setMsg] = useState('');
  const modifier= async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/modiftimbre', {
           id:id,
         lbelle:lbelle,
         montant:montant,
       });
       setid("");
       setlbelle("");
     setmontant("");
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
       <Button variant="outlined" style={{color:'blue',width:"200px"}} onClick={handleClickOpen}>
         Modifier  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={modifier}>
         <DialogTitle>Modifier un dossier</DialogTitle>
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
             id="lbelle"
             label="lbelle"
             type="text"
             fullWidth
             variant="outlined"
             value={lbelle}
             onChange={(e) => setlbelle(e.target.value)}
           />
            <TextField 
             autoFocus
             margin="dense"
             id="montant"
             label="montant"
             type="text"
             fullWidth
             variant="outlined"
             value={montant}
             onChange={(e) => setmontant(e.target.value)}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "560px",width:"3px"}} >X</Button>
          <DialogTitle style={{color:'red' ,marginLeft:"250px"}} >Timbre</DialogTitle>
          <p id="parent-modal-description">
            <Tabtimbre/>
          </p>
       <DialogActions>
       <Adddossier/>
          <Suppossier/>
          <Modifdossier/>
       </DialogActions>
          
        </Box>
      </Modal>
    </div>
  );
}
