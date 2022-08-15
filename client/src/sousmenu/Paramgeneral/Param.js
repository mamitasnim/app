import Button from '@mui/material/Button';
import Axios from 'axios' ;
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Paramgeneral(){
    const [timbrefiscale,settimbrefiscale]=useState("");
    const [tva,settva]=useState("");

    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/addparamg', {
            timbrefiscale: timbrefiscale,
            tva:tva,
         });
         settimbrefiscale("");
         settva("");
        
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

    const [nom, setnom] = useState([]);
      useEffect(() => {   
      Axios.get("http://localhost:5000/paramgeneral").then((response) => {
    setnom(response.data); 
    console.log(response.data) ;   
  });
},[nom]);

    return(
        <div>
        <Button variant="outlined"   style={{ padding: "5px", marginRight: "800px",width:"100px"}}  onClick={handleOpen}>
           </Button>
        <Dialog open={open} onClose={handleClose}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
        <form onClick={ajouter}>
        <DialogTitle>Mise à jour des Paramètres</DialogTitle>
          <p>{msg}</p>
          <DialogContent>
          <DialogTitle style={{color:'red' }} ></DialogTitle>
           
           {nom.map((e)=>(<p>{e.id}{e.tva}{e.timbrefiscale}</p>))}

      
          </DialogContent>
          <DialogActions>
          <Button >Ajouter</Button>
          </DialogActions>
          </form>
        </Dialog>
       
      </div>
    );
          

  
};
export default Paramgeneral;