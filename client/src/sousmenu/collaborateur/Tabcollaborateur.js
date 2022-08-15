import * as React from 'react';
import Dialog from '@mui/material/Dialog';
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
  field: 'cin',
  headerName: 'cin',
  width: 150,
  editable: true,
},
{
  field: 'ville',
  headerName: 'Ville',
  width: 150,
  editable: true,
},
{
  field: 'rue',
  headerName: 'Rue',
  width: 150,
  editable: true,
},
{
  field: 'rues',
  headerName: 'Rues',
  width: 150,
  editable: true,
},
{
  field: 'code_postale',
  headerName: 'Code_Postale',
  width: 150,
  editable: true,
},
{
  field: 'activité',
  headerName: 'Activité',
  width: 150,
  editable: true,
},
{
  field: 'email',
  headerName: 'Email',
  width: 150,
  editable: true,
},
{
    field: 'champ1',
    headerName: 'champ1',
    width: 150,
    editable: true,
  },
  {
    field: 'champ2',
    headerName: 'champ2',
    width: 150,
    editable: true,
  },
  {
    field: 'champ3',
    headerName: 'champ3',
    width: 150,
    editable: true,
  },

];
export default function Tabutilisateur() {
const [utilList, setutilList] = useState([]);

useEffect(() => {   
  Axios.get("http://localhost:5000/getcollab").then((response) => {
    setutilList(response.data); 

    console.log(utilList) ;
  
    console.log(response.data) ;   
  });
},[utilList]);
  return (
    
     <Box sx={{ height: 350, width: 500 }}>
      <DataGrid
        rows={utilList}
        columns={columns}     />
    
    </Box>
  );
}