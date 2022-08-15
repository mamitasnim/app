import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import StyledTableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from "react";
import Axios from "axios";
import Dialog from '@mui/material/Dialog';
import MultipleSelect from './Select';
import { Button, DialogActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { DataGridPremium } from '@mui/x-data-grid-premium'
import Checkbox from '@mui/material/Checkbox';
import Supprimer from './Recherche';
import Imprimer from './Recherche';

import { GridCellParams } from '@mui/x-data-grid-premium'
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Tabrecherche(props) {
  //const [id,setid]=useState("");
 
  const [selected, setSelected] = useState([]);

  const [dossierList, setdossierList] = useState([]);


useEffect(() => {   
  Axios.get("http://localhost:5000/getdossier").then((response) => {
    setdossierList(response.data); 

   // console.log(dossierList) ; 
   // console.log(response.data) ;  
  });
},[dossierList]);


const resultat = dossierList.find( dossier => dossier.emplacement === 'tunis');
const [users, setUsers] = useState([]); 
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [idn,setid] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getUsers();
  }, [users, keyword]);

  const getUsers = async () => {
    const response = await Axios.get(
      `http://localhost:5000/searchdossier?search_query=${keyword}`
    );
    setUsers(response.data.result);
    setRows(response.data.totalRows);
  };
  const searchData = (e) => {
    e.preventDefault();
    setMsg("");
    setKeyword(query);
  };


 const [check,setCheck] = useState(false) ;

 const handleClick = (event, name) => {
  let select=[];
  const selectedIndex = select.indexOf(name);
  let newSelected = '';

  if (selectedIndex === -1) {
    newSelected = name;
  } else if (selectedIndex === 0) {
    newSelected = '';
  }
 // setSelect(newSelected);
  setSelected(newSelected);

    setid(newSelected[0]);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;



  return (
    <TableContainer component={Paper}>
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
    </form>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        <TableRow>
            <TableCell>ID_dossier</TableCell>
            <TableCell align="center">Num_affaire</TableCell>
            <TableCell align="center">Emplacement</TableCell>
            <TableCell align="center">Client</TableCell>
            <TableCell align="center">TEL</TableCell>
            <TableCell align="center">Mission</TableCell>
            <TableCell align="center">Adversaire</TableCell>
            <TableCell align="center">Reste</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


          {users.map((dossierList,index) => { const isItemSelected = isSelected(dossierList.id);
            const labelId = `enhanced-table-checkbox-${index}`;
            return(
           
            <StyledTableRow key={dossierList.id}>


<TableRow
                      hover
                      onClick={(event) => handleClick(event, dossierList.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={dossierList.idn}
                      selected={isItemSelected}
                      setid={props.idn}
                    >

                     <TableCell   padding="checkbox">
                        <Checkbox
                          color="primary"
                     
                          onClick={(e)=> {
                            
                          }}
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell> 


              <StyledTableCell component="th" scope="row" width={10}>
                {dossierList.id}    </StyledTableCell>
            

              <StyledTableCell align="center">{dossierList.num_affaire}</StyledTableCell>
              <StyledTableCell align="center">{dossierList.emplacement}</StyledTableCell>
              <StyledTableCell align="center">{dossierList.client}</StyledTableCell>
              <StyledTableCell align="center">{dossierList.tel} </StyledTableCell>
              <StyledTableCell align="center">{dossierList.mission} </StyledTableCell>
              <StyledTableCell align="center">{dossierList.adversaire}</StyledTableCell>
              <StyledTableCell align="center">{dossierList.reste}</StyledTableCell>

                 </TableRow>      </StyledTableRow>
          )})}  
     
        </TableBody>
      </Table>
  
    </TableContainer>
   
  );
}

