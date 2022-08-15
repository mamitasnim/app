import * as React from 'react';
import { useState,useEffect } from "react";
import Axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
{ field: 'id', headerName: 'ID', width: 90 },
{
  field: 'libelle',
  headerName: 'Libelle',
  width: 150,
  editable: true,
},
{
    field: 'montant',
    headerName: 'Montant',
    width: 150,
    editable: true,
  },
  {
    field: 'impot',
    headerName: 'Impôt',
    width: 150,
    editable: true,
  },
  {
    field: 'mensuelle',
    headerName: 'Mensuelle',
    width: 150,
    editable: true,
  },
  

];
export default function Tabprimegreffier() {


const [nom, setnom] = useState([]);
const [libelle,setlibelle]=useState([]);
 const [montant,setmontant]=useState([]);
 const [impot,setimpot]=useState([]);
 const [mensuelle,setmensuelle]=useState([]);

useEffect(() => {   
  Axios.get("http://localhost:5000/primegreff").then((response) => {
    setlibelle(response.data); 
    setmontant(response.data);
    setimpot(response.data);
    setmensuelle(response.data);
    console.log(response.data) ;   
  });
},[libelle]);
  return (
    <div>
     <Box sx={{ height: 350, width: 550 }}>
      <DataGrid
        rows={libelle}
        columns={columns}
      />
    </Box>

    </div>
  );
}
