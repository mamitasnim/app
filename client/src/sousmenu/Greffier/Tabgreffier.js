import * as React from 'react';
import { useState,useEffect } from "react";
import Axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
{ field: 'id', headerName: 'ID', width: 90 },
{
  field: 'nom',
  headerName: 'Nom',
  width: 150,
  editable: true,
},
{
    field: 'prenom',
    headerName: 'Prénom',
    width: 150,
    editable: true,
  },
  {
    field: 'adresse',
    headerName: 'Adresse',
    width: 150,
    editable: true,
  },
  {
    field: 'cin',
    headerName: 'CIN',
    width: 150,
    editable: true,
  },
  {
    field: 'tel',
    headerName: 'TEL',
    width: 150,
    editable: true,
  },

];
export default function Tabgreffier() {


const [nom, setnom] = useState([]);
const [prenom, setprenom] = useState([]);
const [adresse, setadresse] = useState([]);
const [cin, setcin] = useState([]);
const [tel, settel] = useState([]);

useEffect(() => {   
  Axios.get("http://localhost:5000/greffier").then((response) => {
    setnom(response.data); 
    setprenom(response.data);
    setadresse(response.data);
    setcin(response.data);
    settel(response.data);
    console.log(response.data) ;   
  });
},[nom]);
  return (
    <div>
     <Box sx={{ height: 350, width: 550 }}>
      <DataGrid
        rows={nom}
        columns={columns}
      />
    </Box>

    </div>
  );
}
