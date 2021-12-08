import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getUserList from './service';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteIcon from '@mui/icons-material/Delete';




export default function Home() {
    
    const [rows ,setRows] = useState([]);
    const createData = (id,email,firstName,lastName,avatar) => {
      return { id,email,firstName,lastName,avatar };
    }

    const createRows = (data) => {
        let tempRow = [];
        console.log(data);
        for(let i of Object.keys(data)){
            console.log("loop",data[i],data[i].email);
            tempRow.push(createData(data[i].id,data[i].email,data[i].first_name,data[i].last_name,data[i].avatar));
        }
        console.log("I am " ,tempRow);
        setRows([...tempRow]);
    }

    useEffect(()=>{
        getUserList().then((res)=>{
            console.log("resssss",typeof(res),res[0].email,typeof(res[0]));
            createRows(res);
        });
    },[]);
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">FirstName</TableCell>
            <TableCell align="right">lastName</TableCell>
            <TableCell align="right">Avatar</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.avatar}</TableCell>
              <TableCell align="right"><BorderColorOutlinedIcon/></TableCell>
              <TableCell align="right"><DeleteIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}