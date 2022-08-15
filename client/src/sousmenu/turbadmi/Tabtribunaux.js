import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import { DialogActions } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
     
const columns = [
{ field: 'id', headerName: 'ID', width: 50 },
{
  field: 'lieux',
  headerName: 'lieux',
  width: 250,
  editable: true,
},

];
export default function Tabtribunaux() {
const [lieux, setlieux] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/gettrib").then((response) => {
    setlieux(response.data); 
  
    console.log(lieux)  ;
    console.log(response.data) ;   
  });
},[lieux]);
  return (
    <div>
       
     <Box sx={{ height: 300, width:300 }}>
      <DataGrid
        rows={lieux }
        columns={columns}
        checkboxSelection 
      />
    
    </Box>

    </div>
  );
}