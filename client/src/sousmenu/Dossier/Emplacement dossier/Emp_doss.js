import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import './Emp_doss.css';
import TabempDoss from './Tab_empdoss';
import MultipleSelect from './Select_emp';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}></Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar style={{background:"#1f4b77"}} sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              /*edge="start"*/
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 15, flex: 1 }} variant="h6" component="div">
               Mettre à jour emplacement dossier
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className='corps_emp'>
            <div className='left_emp'>
                
                <MultipleSelect/> <br/>
                <div className='tab1'>
                    <span>
                     <TabempDoss/>
                     <br/><br/>
                    <button className='btn'>Libérer</button> 
                    <button className='btn'>Transférer</button> 
                    <button className='btn'>Ajouter</button> 
                    <button className='btn'>Confirmer</button> <br/>
                    </span>
                </div>
            </div>

        </div>
      </Dialog>
    </div>
  );
}
