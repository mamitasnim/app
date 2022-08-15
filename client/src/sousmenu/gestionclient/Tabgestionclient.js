import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
{ field: 'id', headerName: 'ID', width: 90 },
{
  field: 'raison',
  headerName: 'raison',
  width: 150,
  editable: true,
},
{
    field: 'matricule',
    headerName: 'matricule',
    width: 150,
    editable: true,
  },
  {
    field: 'ville',
    headerName: 'ville',
    width: 150,
    editable: true,
  },
  {
    field: 'rue',
    headerName: 'rue',
    width: 150,
    editable: true,
  },
  {
    field: 'num',
    headerName: 'num',
    width: 150,
    editable: true,
  },
  {
    field: 'code_postale',
    headerName: 'code_postale',
    width: 150,
    editable: true,
  },
  {
    field: 'activite',
    headerName: 'activite',
    width: 150,
    editable: true,
  },
  {
    field: 'situation_fiscale',
    headerName: 'situation_fiscale',
    width: 150,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'type',
    width: 150,
    editable: true,
  },
  


];
export default function Tabgestion() {
const [raison, setraison] = useState([]);
const [matricule,setmatricule]=useState([]);
const [ville,setville]=useState([]);
const [rue,setrue]=useState([]);
const [num,setnum]=useState([]);
const [code_postale,setcode_postale]=useState([]);
const [activite,setactivite]=useState([]);
const [situation_fiscale,setsituation_fiscale]=useState([]);
const [type, settype] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/gestion").then((response) => {
    setraison(response.data); 
   setmatricule(response.data)
   setville(response.data); 
   setrue(response.data)
   setnum(response.data); 
   setcode_postale(response.data)
   setactivite(response.data); 
   setsituation_fiscale(response.data)
   settype(response.data); 

    console.log("hi");
    console.log(raison)  ;
  
    console.log(response.data) ;   
  });
},[raison]);
  return (
    <div>
     
     
     <Box sx={{ height: 350, width: 550 }}>
      <DataGrid
        rows={raison}
        columns={columns}
       
      />
    
    </Box>

    </div>
  );
}