import * as React from 'react';
import { useState,useEffect } from "react";
import Axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, DialogActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const columns = [
{ field: 'id', headerName: 'ID', width: 90 },
{
  field: 'num_affaire',
  headerName: 'Num affaire',
  width: 150,
  editable: true,
},
{
    field: 'emplacement',
    headerName: 'Emplacement',
    width: 150,
    editable: true,
  },
  {
    field: 'client',
    headerName: 'Client',
    width: 150,
    editable: true,
  },
  {
    field: 'tel',
    headerName: 'TEL',
    width: 150,
    editable: true,
  },
  {
    field: 'mission',
    headerName: 'Mission',
    width: 150,
    editable: true,
  },
  {
    field: 'adversaire',
    headerName: 'Adversaire',
    width: 150,
    editable: true,
  },
  {
    field: 'reste',
    headerName: 'Reste',
    width: 150,
    editable: true,
  },


];
export default function TabempDoss() {


const [numaffaire, setnumaffaire] = useState([]);
const [emplacement, setemplacement] = useState([]);
const [client, setclient] = useState([]);
const [mission, setmission] = useState([]);
const [tel, settel] = useState([]);
const [adversaire, setadversaire] = useState([]);

  const [users, setUsers] = useState([]); 
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getUsers();
  }, [users, keyword]);

  const getUsers = async () => {
    const response = await Axios.get(
      `http://localhost:5000/searchdossier?search_query=${keyword}`
    );
    console.log(response);
    setUsers(response.data.result);
    setRows(response.data.totalRows);
  };
  const searchData = (e) => {
    e.preventDefault();
    setMsg("");
    setKeyword(query);
  };



  return (
    <div>
      <form onSubmit={searchData} >
     <TextField 
            autoFocus
            margin="dense"
            id="recherche"
            label="Mots clés"
            type="text"
            fullWidth
            variant="outlined"
            size='small'
            sx={{ m:0.5, width: 300 }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
     <Button type="submit" style={{width:"20px" }}> <SearchIcon  /></Button>
     <Box sx={{ height: 350, width: 550 }}>
      <DataGrid
        rows={users}
        columns={columns}
      />
    </Box>
    </form>
    </div>
  );
}
