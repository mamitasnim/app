
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Tabrecherche from './Tabrecherche';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Section from './Select' ;
  
import { useState,useEffect } from "react";
import Axios from "axios";

import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import{SelectEmp}  from './Select' ;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


 const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
    },  },  };


function ArchiverDossier() {
  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
 const[emplacement,setemplacement]=useState("");
  const [msg, setMsg] = useState('');
 

   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   const theme = useTheme();
   const [personName, setPersonName] = React.useState([]);
 
   const handleChange = (event) => {
     const {  
       target: { value },
     } = event;
     setPersonName(
       // On autofill we get a stringified value.
       typeof value === 'string' ? value.split(',') : value,
     );
   };
   const archiver= async (e) => {
    e.preventDefault();
    try {
        await Axios.post('http://localhost:5000/archive', {
            emplacement:emplacement,         
        });
        setemplacement("");
       
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  };
 
   function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

   const [empList, setempList] = useState([]);
  
   useEffect(() => {   
     Axios.get("http://localhost:5000/empdossier").then((response) => {
       setempList(response.data); 
       
     });
   },[]);

   return (
     <div>
       <Button variant="outlined" style={{color:'blue',width:"200px"}} onClick={handleClickOpen}>
       Archiver Dossier  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={archiver}>
         <DialogTitle>Archiver Dossier</DialogTitle>
         <p>{msg}</p>
         <DialogContent>
           <TextField 
             autoFocus
             margin="dense"
             id="id"
             label="code Archive"
             type="text"
             fullWidth
             variant="outlined"
             value={id}
             onChange={(e) => setid(e.target.value)}
           />
           <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Emplacement</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={emplacement}
            onChange={(e) => setemplacement(e.target.value)}
            input={<OutlinedInput label="Emplacement" />}
            MenuProps={MenuProps}
          >
            {empList.map((name) => (
              <MenuItem
                key={name.id}
                value={name.nomdossier}
                style={getStyles(name, personName, theme)}
              >
                {name.nomdossier}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
            
         </DialogContent>
         <DialogActions>
           <Button >Archiver</Button>
         </DialogActions>
         </form>
       </Dialog>
      
     </div>
   );
 }






function GenererFacture() {
  const [open, setOpen] =useState(false);
  const [num_affaire,setnum]=useState("");
  const [emplacement,setemplacement]=useState("");
  const [client,setclient]=useState("");
 /* const [tel,settel]=useState("");
  const [mission,setmission]=useState("");
  const [adversaire,setadversaire]=useState("");
  const [reste,setreste]=useState("");*/
  const [msg, setMsg] = useState('');
  const ajouter = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/adddossier', {
         num_affaire:num_affaire,
         emplacement:emplacement,
         client:client,
         
       });
      setnum("");
      setemplacement("");
      setclient("");
     /* settel("");
      setmission("");
      setadversaire("");
      setreste("");*/
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
       <Button variant="outlined" style={{color:'blue',width:"180px"}} onClick={handleClickOpen}>
       Generer Facture </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={ajouter}>
         <DialogTitle>Generer Facture</DialogTitle>
         <p>{msg}</p>
         <DialogContent>
           <TextField 
             autoFocus
             margin="dense"
             id="num_affaire"
             label="num_affaire"
             type="text"
             fullWidth
             variant="outlined"
             value={num_affaire}
             onChange={(e) => setnum(e.target.value)}
           />
            <TextField 
             autoFocus
             margin="dense"
             id="emplacement"
             label="emplacement"
             type="text"
             fullWidth
             variant="outlined"
             value={emplacement}
             onChange={(e) => setemplacement(e.target.value)}
           />
            <TextField 
             autoFocus
             margin="dense"
             id="client"
             label="client"
             type="text"
             fullWidth
             variant="outlined"
             value={client}
             onChange={(e) => setclient(e.target.value)}
           />
         </DialogContent>
         <DialogActions>
           <Button >Facture</Button>
         </DialogActions>
         </form>
       </Dialog>   
     </div>
   );}



 function GenererFactureEtat() {
  const [open, setOpen] =useState(false);
  const [num_affaire,setnum]=useState("");
  const [emplacement,setemplacement]=useState("");
  const [client,setclient]=useState("");
  const [msg, setMsg] = useState('');
  const ajouter = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/adddossier', {
         num_affaire:num_affaire,
         emplacement:emplacement,
         client:client,
           
       });
      setnum("");
      setemplacement("");
      setclient("");
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
       <Button variant="outlined" style={{color:'blue',width:"180px"}} onClick={handleClickOpen}>
       Generer Facture Etat </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={ajouter}>
         <DialogTitle>Generer Facture Etat</DialogTitle>
         <p>{msg}</p>
         <DialogContent>
           <TextField 
             autoFocus
             margin="dense"
             id="num_affaire"
             label="num_affaire"
             type="text"
             fullWidth
             variant="outlined"
             value={num_affaire}
             onChange={(e) => setnum(e.target.value)}
           />
            <TextField 
             autoFocus
             margin="dense"
             id="emplacement"
             label="emplacement"
             type="text"
             fullWidth
             variant="outlined"
             value={emplacement}
             onChange={(e) => setemplacement(e.target.value)}
           />
            <TextField 
             autoFocus
             margin="dense"
             id="client"
             label="client"
             type="text"
             fullWidth
             variant="outlined"
             value={client}
             onChange={(e) => setclient(e.target.value)}
           />
            
         </DialogContent>
         <DialogActions>
           <Button >Facture</Button>
         </DialogActions>
         </form>
       </Dialog>
   </div>
   );}




   function Adddossier() {
    const [open, setOpen] =useState(false);
      
    const [tache,settache]=useState("");
    const [date_critique,setdatecritique]=useState("");
    const [date_rappel,setdaterappel]=useState("");
    const [oui,setoui]=useState("");
    const [personne_chargé,setpersonne]=useState("");
    const [resolu,setresolu]=useState("");
    
    const [date_audience,setdateaudience]=useState("");
    const [date_echeance,setdateecheance]=useState("");
   
    const [service,setservice]=useState("");
    const [lieux,setlieux]=useState("");
    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
    try {
         await Axios.post('http://localhost:5000/addtaches', {
           tache:tache,    
         date_critique:date_critique,
        date_rappel:date_rappel,
        resolu:resolu,
        personne_chargé:personne_chargé,
      //  greffier:greffier,
        //course:course,
        lieux:lieux,
        service:service,
        date_audience:date_audience,
        date_echeance:date_echeance,   
         });
        settache("");
        setlieux("");
        setservice("");
        setdateaudience("");
        setdateecheance("");
        setpersonne("");
        setresolu("");
        setdatecritique("");
        setdaterappel("");
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
   
     const [selectedValue, setSelectedValue] = React.useState('');
     const handleChange = (event) => {
       setSelectedValue(event.target.value);
     };
     return (
       <div>
         <Button variant="outlined" style={{color:'blue',width:"180px"}} onClick={handleClickOpen}>
           Ajouter une tache  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
         <form onClick={ajouter} >                 
           <DialogTitle>Ajouter une tache :</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
           
              <table  >
                <tr>
                  <td style={{padding:"10px"}}><label>Tache:</label></td>
                  <td style={{padding:"10px"}}>      <TextField 
               autoFocus
               margin="dense"
               id="tache"        
               type="text"
               fullWidth
               variant="outlined"
               value={tache}
               onChange={(e) => settache(e.target.value)}   /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}>   <label>Date de creaction</label></td>
                  <td style={{padding:"10px"}}>     <TextField 
               autoFocus
               margin="dense"
               id="ddate_critique"        
               type="date"
               fullWidth
               variant="outlined"
               value={date_critique}
               onChange={(e) => setdatecritique(e.target.value)}   /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}><label>Date Rappel :</label></td>
                  <td style={{padding:"10px"}}>      <TextField 
               autoFocus
               margin="dense"
               id="date_rappel"
               type="date"
               fullWidth
               variant="outlined"
               value={date_rappel}
               onChange={(e) => setdaterappel(e.target.value)}  /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> <label>Resolu : </label>  </td>
                  <td style={{padding:"10px"}}> <input type="radio" id='resolu' name='oui' value={resolu}
               onChange={(e) => setresolu("oui")}  /> Oui
        <input type="radio" id='resolu' name='non' value={resolu}
               onChange={(e) => setresolu("non")} />Non</td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> <label>Personne chargée : </label> </td>
                  <td style={{padding:"10px"}}><input type="radio" id='personne_chargé' name='rad' value={personne_chargé}
               onChange={(e) => setpersonne("collaborateur")} /> Collaborateur
        <input type="radio" id='personne_chargé1s' name='rad' value={personne_chargé}
               onChange={(e) => setpersonne("greffier")}/>Greffier</td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> lieux :</td>
                  <td style={{padding:"10px"}}>   <TextField 
               autoFocus
               margin="dense"
               id="lieux"
               label="lieux"
               type="text"
               fullWidth
               variant="outlined"
               value={lieux}
               onChange={(e) => setlieux(e.target.value)}        /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}>Services:</td>
                  <td style={{padding:"10px"}}>   <TextField 
               autoFocus
               margin="dense"
               id="service"
               label="service"
               type="text"
               fullWidth
               variant="outlined"
               value={service}
               onChange={(e) => setservice(e.target.value)} /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}>Date d'audiance:</td>
                  <td style={{padding:"10px"}}> <TextField 
               autoFocus
               margin="dense"
               id="date_audience"      
               type="date"
               fullWidth
               variant="outlined"
               value={date_audience}
               onChange={(e) => setdateaudience(e.target.value)}      /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> Date d'echeance:</td>
                  <td style={{padding:"10px"}}><TextField 
               autoFocus
               margin="dense"
               id="date_echeance"        
               type="date"
               fullWidth
               variant="outlined"
               value={date_echeance}
               onChange={(e) => setdateecheance(e.target.value)}     /></td>
                </tr>
                </table>      
           </DialogContent>       
           <DialogActions>
             <Button >Ajouter</Button>
           </DialogActions>          
          </form>
         </Dialog>    
     </div>  
     );
   }





   function ReclasserDossier() {
    const [open, setOpen] =useState(false);
    const [date_effet,setdate]=useState("");
    const [emplacement,setemplacement]=useState("");
   
    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/adddossier', {
           emplacement:emplacement,
           date_effet:date_effet,
             
         });
        setdate("");
        setemplacement("");     
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
   
     const theme = useTheme();
     const [personName, setPersonName] = React.useState([]);
     function getStyles(name, personName, theme) {
      return {
        fontWeight:
          personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
      };
    }
  
     const [empList, setempList] = useState([]);
     useEffect(() => {   
       Axios.get("http://localhost:5000/empdossier").then((response) => {
         setempList(response.data); 
         
       });
     },[]);

     return (
          <div>
         <Button variant="outlined" style={{color:'blue',width:"180px"}} onClick={handleClickOpen}>
         Reclasser Dossier  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
         <form onClick={ajouter}>
           <DialogTitle>Classer Dossier</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
           
           <FormControl sx={{ m: 1, width: 300 }}>
           <table>     <tr><td><label>Emplacement :</label> </td>
         
         <td> <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={emplacement}
            onChange={(e) => setemplacement(e.target.value)}
            input={<OutlinedInput label="Emplacement" />}
            MenuProps={MenuProps}
          >
            {empList.map((name) => (
              <MenuItem
                key={name.id}
                value={name.nomdossier}
              //  style={getStyles(name, personName, theme)}
              >
                {name.nomdossier}
              </MenuItem>
            ))}
          </Select> </td></tr>
        
<tr>
<td>    <label>Date d'effet :</label></td> 
           <td>   <TextField 
               autoFocus
               margin="dense"
               id="date_effet"
               
               type="date"
               fullWidth
               variant="outlined"
               value={date_effet}
               onChange={(e) => setdate(e.target.value)}
             /></td>
</tr>  </table>            
          </FormControl> 
          
           </DialogContent>
           <DialogActions>
             <Button >Reclasser</Button>
           </DialogActions>
           </form>
         </Dialog>
        
         </div>
     );
   }




   function Imprimer() {
    const [open, setOpen] =useState(false);
    const [num_affaire,setnum]=useState("");
    const [emplacement,setemplacement]=useState("");
    const [client,setclient]=useState("");
    const [tel,settel]=useState("");
    const [mission,setmission]=useState("");
    const [adversaire,setadversaire]=useState("");
    const [reste,setreste]=useState("");
    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/adddossier', {
           num_affaire:num_affaire,
           emplacement:emplacement,   
         });
        setnum("");
        setemplacement("");
       
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
         <Button variant="outlined" style={{color:'blue',width:"180px"}} onClick={handleClickOpen}>
        Imprimer Liste  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
         <form onClick={ajouter}>
           <DialogTitle> Imprimer la Liste</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
          
             <TextField 
               autoFocus
               margin="dense"
               id="num_affaire"
               label="num_affaire"
               type="text"
               fullWidth
               variant="outlined"
               value={num_affaire}
               onChange={(e) => setnum(e.target.value)}
             />
              <TextField 
               autoFocus
               margin="dense"
               id="emplacement"
               label="emplacement"
               type="text"
               fullWidth
               variant="outlined"
               value={emplacement}
               onChange={(e) => setemplacement(e.target.value)}
             />                
           </DialogContent>
           <DialogActions>
             <Button >Imprimer</Button>
           </DialogActions>
           </form>
         </Dialog>  
         </div>
     );
   }




   function Supprimer(props) {
    const [open, setOpen] =useState(false);
    const [id,setid]=useState("");
    const [msg, setMsg] = useState('');
  
    const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/suppdossiers', {
          id:id, 
         });
      //  setid("");
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
       alert(id);
     };
   
     return (
          <div>
         <Button variant="outlined" style={{color:'blue',width:"180px"}} onClick={handleClickOpen}>
        Supprimer Dossier  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
         <form onClick={ajouter}>
           <DialogTitle> Supprimer un dossier</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
           
           <TextField 
               autoFocus
               margin="dense"
               id="emplacement"
               label="emplacement"
               type="text"
               fullWidth
               variant="outlined"
               value={props.idn}
               onChange={(e) => setid(props.idn)}
             /> 
           </DialogContent>
           <DialogActions>
             <Button  >Supprimer</Button>
           </DialogActions>
           </form>
         </Dialog>     
         </div>
     );
   }




export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
const defaut="5";
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handle = defaut ;

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Recherche
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}  style={{background:"#1f4b77"}}>
          <Toolbar>
           
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Liste des Dossiers
            </Typography>


            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
        <List>      <Tabrecherche/>   <Divider /> </List>
         
        <DialogActions style={{margin:"3px"}}>
          <Adddossier/>
          <ReclasserDossier/>
   
    <GenererFacture/>
 
    <GenererFactureEtat/>

    <ArchiverDossier/>
    <Imprimer/>
<Supprimer idn={handle}/>


   
    </DialogActions>
      </Dialog>
    </div>
  );
}


