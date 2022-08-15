import Button from '@mui/material/Button';
import Axios from 'axios' ;
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Transport(){
    const [montant,setmontant]=useState("");
    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/admontant', {
            montant:montant,
         });
        setmontant("");
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);
         }
     }
   }  
    const [open, setOpen] =useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
   /* useEffect(() => {   
        Axios.get("http://localhost:5000/photo").then((response) => {
          setprixphoto(response.data); 
          console.log("hi");
          console.log(prixphoto)  ;
          console.log(response.data) ;   
        });
      },[prixphoto]);*/
    return(
        <div>
        <Button variant="outlined"   style={{ padding: "5px", marginRight: "800px",width:"100px"}}  onClick={handleOpen}>
           </Button>
        <Dialog open={open} onClose={handleClose}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
        <form onClick={ajouter}>
        <DialogTitle>Mise a jours des Paramètres</DialogTitle>
          <p>{msg}</p>
          <DialogContent>
          <DialogTitle style={{color:'red' }} >Montant transport par jours :</DialogTitle>
            <TextField 
              autoFocus
              margin="dense"
              id="montant"
              label="montant"
              type="number"
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
          

  
};
export default Transport;