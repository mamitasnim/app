import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

{
  field: 'montant',
  headerName: 'montant',
  width: 150,
  editable: true,
},
{
    field: 'type',
    headerName: 'type',
    width: 150,
    editable: true,
  },
  {
    field: 'baré',
    headerName: 'baré',
    width: 150,
    editable: true,
  },
  {
    field: 'N°opertion',
    headerName: 'N°opertion',
    width: 150,
    editable: true,
  },
  {
    field: 'banque',
    headerName: 'banque',
    width: 150,
    editable: true,
  },
  {
    field: 'porteur',
    headerName: 'Echeance',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'email',
    width: 150,
    editable: true,
  },
];
export default function Tabreglement() {
const [nomdossier, setnomdossier] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/").then((response) => {
    setnomdossier(response.data); 
    console.log("hi");
    console.log(nomdossier)  ;
    console.log(response.data) ;   
  });
},[nomdossier]);
  return (
    <div>
     
     
     <Box sx={{ height: 350, width: 1000 }}>
      <DataGrid
        rows={nomdossier}
        columns={columns}
       
      />
    
    </Box>

    </div>
  );
}