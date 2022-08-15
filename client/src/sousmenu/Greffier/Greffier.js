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
import Tabgreffier from './Tabgreffier';
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


function Addgreffier() {
 const [open, setOpen] =useState(false);
 const [nom,setnom]=useState("");
 const [prenom,setprenom]=useState("");
 const [adresse,setadresse]=useState("");
 const [cin,setcin]=useState("");
 const [tel,settel]=useState("");
 const [msg, setMsg] = useState('');
 const ajouter = async (e) => {
  e.preventDefault();
  try {
      await Axios.post('http://localhost:5000/addgreffier', {
          nom:nom,
          prenom:prenom, adresse:adresse, cin:cin, tel:tel
      });
      setnom("");
      setprenom("");
      setadresse("");
      setcin("");
      settel("");
     
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
        <DialogTitle>Ajouter un greffier</DialogTitle>
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
            id="prenom"
            label="Prénom"
            type="text"
            fullWidth
            variant="outlined"
            value={prenom}
            onChange={(e) => setprenom(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="adresse"
            label="Adresse"
            type="text"
            fullWidth
            variant="outlined"
            value={adresse}
            onChange={(e) => setadresse(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="cin"
            label="CIN"
            type="number"
            fullWidth
            variant="outlined"
            value={cin}
            onChange={(e) => setcin(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="tel"
            label="TEL"
            type="number"
            fullWidth
            variant="outlined"
            value={tel}
            onChange={(e) => settel(e.target.value)}
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


function Suppgreffier() {
    const [open, setOpen] =useState(false);
    const [id,setid]=useState("");
    const [msg, setMsg] = useState('');
    const supprimer = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/suppgreffier', {
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
           <DialogTitle>Supprimer un greffier</DialogTitle>
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

   function Modifgreffier() {
    const [open, setOpen] =useState(false);
    const [id,setid]=useState("");
    const [nom,setnom]=useState("");
    const [prenom,setprenom]=useState("");
    const [adresse,setadresse]=useState("");
    const [cin,setcin]=useState("");
    const [tel,settel]=useState("");
    const [msg, setMsg] = useState('');
    const modifier= async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/modifgreffier', {
            id:id,
            nom:nom,
          prenom:prenom, adresse:adresse, cin:cin, tel:tel
         });
         setid("");
         setnom("");
      setprenom("");
      setadresse("");
      setcin("");
      settel("");
        
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
            id="prenom"
            label="Prénom"
            type="text"
            fullWidth
            variant="outlined"
            value={prenom}
            onChange={(e) => setprenom(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="adresse"
            label="Adresse"
            type="text"
            fullWidth
            variant="outlined"
            value={adresse}
            onChange={(e) => setadresse(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="cin"
            label="CIN"
            type="number"
            fullWidth
            variant="outlined"
            value={cin}
            onChange={(e) => setcin(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="tel"
            label="TEL"
            type="number"
            fullWidth
            variant="outlined"
            value={tel}
            onChange={(e) => settel(e.target.value)}
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
          <h2 id="parent-modal-title">Liste des greffiers</h2>
          <p id="parent-modal-description">
            <Tabgreffier/>
          </p>
          <DialogActions>
             <Addgreffier/>
             <Modifgreffier/>
             <Suppgreffier/>
          </DialogActions>
        </Box>
      </Modal>
    </div>
  );
}