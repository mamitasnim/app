import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

{
  field: 'nom',
  headerName: 'nom ',
  width: 100,
  editable: true,
},
{
    field: 'registre',
    headerName: 'Registre de commerce',
    width: 170,
    editable: true,
  },
  {
    field: 'adresse',
    headerName: 'Adresse',
    width: 150,
    editable: true,
  },
  {
    field: 'adresse_designé',
    headerName: 'Adresse designé',
    width: 150,
    editable: true,
  },
  {
    field: 'avocat',
    headerName: 'Avocat',
    width: 150,
    editable: true,
  },
  {
    field: 'adresse_avocat',
    headerName: 'Adresse avocat',
    width: 150,
    editable: true,
  },
];
export default function Tabdonneé() {
const [nom, setnom] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/adversaire").then((response) => {
    setnom(response.data); 
    console.log(response.data) ;   
  });
},[nom]);
  return (
    <div>
     <Box sx={{ height: 350, width: 1000 }}>
      <DataGrid
        rows={nom}
        columns={columns}
      />
    </Box>
    </div>
  );
}