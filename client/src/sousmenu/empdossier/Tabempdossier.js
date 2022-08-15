import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import { DialogActions } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
{ field: 'id', headerName: 'ID', width: 90 },
{
  field: 'nomdossier',
  headerName: 'Libelle',
  width: 90,
  editable: true,
},

];
export default function Tabemdossier() {


  


const [nomdossier, setnomdossier] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/empdossier").then((response) => {
    setnomdossier(response.data); 
    console.log("hi");
    console.log(nomdossier)  ;
    console.log(response.data) ;   
  });
},[nomdossier]);
  return (
    <div>
     
     
     <Box sx={{ height: 350, width: 300, marginLeft:15}}>
      <DataGrid
        rows={nomdossier}
        columns={columns}
       
      />
    
    </Box>

    </div>
  );
}