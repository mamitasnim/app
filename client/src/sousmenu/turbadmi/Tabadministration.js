import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
{ field: 'id', headerName: 'ID', width: 50 },
{
  field: 'nom',
  headerName: 'Nom',
  width: 100,
  editable: true,
},
{
  field: 'lundi',
  headerName: 'lundi',
  width: 100,
  editable: true,
},
{
  field: 'mardi',
  headerName: 'mardi',
  width: 100,
  editable: true,
},
{
  field: 'mercredi',
  headerName: 'mercredi',
  width: 100,
  editable: true,
},
{
  field: 'jeudi',
  headerName: 'jeudi',
  width: 100,
  editable: true,
},
{
  field: 'vendredi',
  headerName: 'vendredi',
  width: 100,
  editable: true,
},

{
  field: 'samedi',
  headerName: 'samedi',
  width: 100,
  editable: true,
},
{
  field: 'tribid',
  headerName: 'tribid',
  width: 100,
  editable: true,
},

];
export default function Tabadministration() {
const [utilList, setutilList] = useState([]);

useEffect(() => {   
  Axios.get("http://localhost:5000/getadmi").then((response) => {
    setutilList(response.data); 

    console.log(utilList) ;
  
    console.log(response.data) ;   
  });
},[utilList]);
  return (
    
     <Box sx={{ height: 300, width: 730 }}>
      <DataGrid
        rows={utilList}
        columns={columns}     />
    
    </Box>
  );
}