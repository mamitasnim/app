import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import { DialogActions } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

{
  field: 'tache',
  headerName: 'Tâche',
  width: 150,
  editable: true,
},
{
    field: 'date_critique',
    headerName: 'Date critique',
    width: 150,
    editable: true,
  },
  {
    field: 'date_rappel',
    headerName: 'Date rappel',
    width: 150,
    editable: true,
  },
  {
    field: 'resolu',
    headerName: 'Résolu',
    width: 150,
    editable: true,
  },
  {
    field: 'personne_chargé',
    headerName: 'personne chargé',
    width: 150,
    editable: true,
  },
  {
    field: 'greffier',
    headerName: 'Greffier',
    width: 150,
    editable: true,
  },
  {
    field: 'course',
    headerName: 'Course',
    width: 150,
    editable: true,
  },
  {
    field: 'lieux',
    headerName: 'Lieux',
    width: 150,
    editable: true,
  },
  {
    field: 'service',
    headerName: 'Service',
    width: 150,
    editable: true,
  },
  {
    field: 'date_audience',
    headerName: "Date d'audience",
    width: 150,
    editable: true,
  },
  {
    field: 'date_echeance',
    headerName: "date d'écheance",
    width: 150,
    editable: true,
  },
];


export default function Tabtache() {
const [tache, settache] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/taches").then((response) => {
    settache(response.data); 
    console.log(response.data) ;   
  });
},[tache]);
  return (
    <div>

     <Box sx={{ height: 350, width: 1000 }}>
      <DataGrid
        rows={tache}
        columns={columns}
       
      />
    
    </Box>

    </div>
  );
}