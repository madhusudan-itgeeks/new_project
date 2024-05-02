import React, { useState, useEffect } from "react";
import { Data } from "./Tabledata";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import axios from 'axios';

function Partner() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([]);
  console.log(data)
  // let token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTI3MzYzMjAsImV4cCI6MTc0NDI5MzkyMH0.QtqDtH7puliRZH8qsF9v4Qxuu4ZWcYGxozZ_X_zCRqc";
  // console.log(token);

      
      // token get in local storage

  const dataa = localStorage.getItem("currentUser")
  console.log(dataa,"dataa")

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://jellyfish-app-6kizf.ondigitalocean.app/public/admin/partner/list',
  //         {
  //           method: 'POST',
  //           mode: 'no-cors',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTI3MzYzMjAsImV4cCI6MTc0NDI5MzkyMH0.QtqDtH7puliRZH8qsF9v4Qxuu4ZWcYGxozZ_X_zCRqc'
  //           },
  //           body: JSON.stringify({
  //             "limit": 10,
  //             "offset": 0
  //           })
  //         }
  //       );
  //       const responseData = await response.json();
  //       console.log(response);
  //       console.log(responseData)
  //       setData(responseData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

 
 


  // const fetchProductData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jellyfish-app-6kizf.ondigitalocean.app/public/admin/partner/list",
  //       {
  //         method: "POST",
  //         mode:'no-cors',
  //         headerss: {
  //           "content-type": "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTI3MzYzMjAsImV4cCI6MTc0NDI5MzkyMH0.QtqDtH7puliRZH8qsF9v4Qxuu4ZWcYGxozZ_X_zCRqc",
  //         },
  //         body: JSON.stringify({
  //           limit: 10,
  //           offset: 0,
  //         }),
  //       }
  //     );
  //     console.log(response);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  
  const fetchProductData = async () => {
    try {
      const response = await fetch(
        "https://jellyfish-app-6kizf.ondigitalocean.app/public/admin/partner/list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + dataa,
          },
          body: JSON.stringify({
            limit: 10,
            offset: 0,
          }),
        }
      );
  
      if (!response.ok) {
        const errorMessage = await response.text(); // Get error message from response body
        console.log("errormessage",errorMessage)

        throw new Error(errorMessage || "Failed to fetch data"); // Throw error with response body or default message
      }
  
      const data = await response.json();
      console.log(data);
      setData(data.result);
      setLoading(false);
    } catch (error) { 

      console.error("Error fetching data:", error);
      // You can set an error state here if needed
    }
  };
  
  useEffect(() => {
    fetchProductData()
  }, []);






  return (
    <div className="main-partner">
      {/* <button onClick={fetchProductData}>fetch</button> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Shop</TableCell>
              <TableCell align="right">Shop Domain</TableCell>
              <TableCell align="right">is Admin</TableCell>
              <TableCell align="right">Current plan</TableCell>
              <TableCell align="right">Exp. Dates</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <>
                {[...Array(rowsPerPage)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              (rowsPerPage > 0
                ? data?.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.domain}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.planName}</TableCell>
                  <TableCell align="right">{row.trailDate}</TableCell>
                  <TableCell align="right">{row.phoneNumber}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  {/* <TableCell align="right">{row.subscribeId}</TableCell> */}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default Partner;
 