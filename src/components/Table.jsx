import {
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import React from "react";

const tableData = [
  {
    id: 1,
    Booking: "8694 Starling Parkway",
    User: "Rance Lowdes",
    date: "7/31/2023",
  },
  {
    id: 2,
    Booking: "61 Cherokee Lane",
    User: "Rosalia Tomaino",
    date: "11/10/2022",
  },
  { id: 3, Booking: "2 Vera Circle", User: "Rourke Teas", date: "3/18/2023" },
  {
    id: 4,
    Booking: "576 Sommers Plaza",
    User: "Cecil Treversh",
    date: "1/6/2023",
  },
  { id: 5, Booking: "8 Gale Circle", User: "Lorene Hyatt", date: "2/27/2023" },
];

const BookingTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple-table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Booking Name</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((table, id) => (
            <TableRow key={id}>
              <TableCell>{table.id}</TableCell>
              <TableCell>{table.Booking}</TableCell>
              <TableCell>{table.User}</TableCell>
              <TableCell>{table.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingTable;
