import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
{ field: 'id', headerName: 'ID', width: 90 },
{
  field: 'email',
  headerName: 'Email',
  width: 150,
  editable: true,
},
{
    field: 'password',
    headerName: 'Password',
    width: 150,
    editable: true,
  },
  {
    field: 'domaine',
    headerName: 'Domaine',
    width: 150,
    editable: true,
  },

];
export default function Tabutilisateur() {
const [utilList, setutilList] = useState([]);

useEffect(() => {   
  Axios.get("http://localhost:5000/getutil").then((response) => {
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