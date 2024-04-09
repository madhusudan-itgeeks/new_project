import React, { useState } from 'react'
import { Data } from './Tabledata'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Partner() {
    const[item,setitem]=useState([])
    // const style={width:calculateNewValue(100vh-100px)}
  return (

    <div className='main-partner'>
          <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Shop</TableCell>
            <TableCell align="right">Shop Domain</TableCell>
            <TableCell align="right">is Admin</TableCell>
            <TableCell align="right">Current plan</TableCell>
            <TableCell align="right">Exp. Dates</TableCell>
            <TableCell align="right">App Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.shop}
              </TableCell>
              <TableCell align="right">{row.domain}</TableCell>
              <TableCell align="right">{row.admin}</TableCell>
              <TableCell align="right">{row.plan}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      
    </div>
  
  )
}

export default Partner
