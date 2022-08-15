import * as React from 'react';

import { useState,useEffect } from "react";
import Axios from "axios";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
{ field: 'id', headerName: 'ID', width: 90 },
{
  field: 'nomdossier',
  headerName: 'nom dossier',
  width: 150,
  editable: true,
},

];
export default function Tabtypedossier() {
const [nomdossier, setnomdossier] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/typedossier").then((response) => {
    setnomdossier(response.data); 
    console.log("hi");
    console.log(nomdossier)  ;
    console.log(response.data) ;   
  });
},[nomdossier]);
  return (
    <div>
     
     
     <Box sx={{ height: 350, width: 550 }}>
      <DataGrid
        rows={nomdossier}
        columns={columns}
       
      />
    
    </Box>

    </div>
  );
}