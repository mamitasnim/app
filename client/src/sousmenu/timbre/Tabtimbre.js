import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
{ field: 'id', headerName: 'ID', width: 90 },
{
  field: 'lbelle',
  headerName: 'lbelle',
  width: 150,
  editable: true,
},
{
    field: 'montant',
    headerName: 'montant',
    width: 150,
    editable: true,
  },

];
export default function Tabtimbre() {
const [lbelle, setlbelle] = useState([]);
const [montant,setmontant]=useState([])
useEffect(() => {   
  Axios.get("http://localhost:5000/timbre").then((response) => {
    setlbelle(response.data); 
   setmontant(response.data)
    console.log("hi");
    console.log(lbelle)  ;
  
    console.log(response.data) ;   
  });
},[lbelle,montant]);
  return (
    <div>
     
     
     <Box sx={{ height: 350, width: 550 }}>
      <DataGrid
        rows={lbelle}
        columns={columns}
       
      />
    
    </Box>

    </div>
  );
}