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
import Tabprimegreffier from './Tabprimegreff';
import { useState } from "react";



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


function Addprimegreffier() {
 const [open, setOpen] =useState(false);
 const [msg,setMsg]=useState("");
 const [libelle,setlibelle]=useState("");
 const [montant,setmontant]=useState("");
 const [impot,setimpot]=useState("");
 const [mensuelle,setmensuelle]=useState("");
 const ajouter = async (e) => {
  e.preventDefault();
  try {
      await Axios.post('http://localhost:5000/addprimegreff', {
        libelle: libelle,
        montant: montant, impot: impot, mensuelle:mensuelle,
      });
      setlibelle("");
      setmontant("");
      setimpot("");
      setmensuelle("");
     
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
      <Button variant="outlined" style={{color:'blue',width:'200px'}} onClick={handleClickOpen} >
        Ajouter </Button>
      <Dialog open={open} onClose={handleClose}>
      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
      <form onClick={ajouter}>
        <DialogTitle>Ajouter un prime greffier</DialogTitle>
        <p>{msg}</p>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            id="libelle"
            label="Libelle"
            type="text"
            fullWidth
            variant="outlined"
            value={libelle}
            onChange={(e) => setlibelle(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="monatnt"
            label="Montant"
            type="number"
            fullWidth
            variant="outlined"
            value={montant}
            onChange={(e) => setmontant(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="impot"
            label="Impôt"
            type="number"
            fullWidth
            variant="outlined"
            value={impot}
            onChange={(e) => setimpot(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="mensuelle"
            label="Mensuelle"
            type="text"
            fullWidth
            variant="outlined"
            value={mensuelle}
            onChange={(e) => setmensuelle(e.target.value)}
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


function Suppprimegreffier() {
    const [open, setOpen] =useState(false);
    const [id,setid]=useState("");
    const [msg, setMsg] = useState('');
    const supprimer = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/suppprimegreff', {
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
           <DialogTitle>Supprimer un prime greffier</DialogTitle>
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

   function Modifprimegreffier() {
    const [open, setOpen] =useState(false);
    const [id,setid]=useState("");
    const [libelle,setlibelle]=useState("");
    const [montant,setmontant]=useState("");
    const [impot,setimpot]=useState("");
    const [mensuelle,setmensuelle]=useState("");
    const [msg, setMsg] = useState('');
    const modifier= async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/modifprimegreff', {
            id:id,
            libelle: libelle,
        montant: montant, impot: impot, mensuelle:mensuelle,
         });
         setid("");
         setlibelle("");
         setmontant("");
         setimpot("");
         setmensuelle("");
        
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
           <DialogTitle>Modifier un greffier</DialogTitle>
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
            id="libelle"
            label="Libelle"
            type="text"
            fullWidth
            variant="outlined"
            value={libelle}
            onChange={(e) => setlibelle(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="monatnt"
            label="Montant"
            type="number"
            fullWidth
            variant="outlined"
            value={montant}
            onChange={(e) => setmontant(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="impot"
            label="Impôt"
            type="number"
            fullWidth
            variant="outlined"
            value={impot}
            onChange={(e) => setimpot(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="mensuelle"
            label="Mensuelle"
            type="text"
            fullWidth
            variant="outlined"
            value={mensuelle}
            onChange={(e) => setmensuelle(e.target.value)}
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
          <h2 id="parent-modal-title">Liste des primes des greffiers</h2>
          <p id="parent-modal-description">
            <Tabprimegreffier/>
          </p>
          <DialogActions>
             <Addprimegreffier/>
             <Modifprimegreffier/>
             <Suppprimegreffier/>
          </DialogActions>
        </Box>
      </Modal>
    </div>
  );
}