import {
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Box,
  Stack,
  Button,
} from "@mui/material";
import Loader from "./Loader";
import useDeleteHotel from "../features/hotels/useDeleteHotel";
import useHotels from "../features/hotels/useHotels";
import FormInput from "./FormInput";
import { useState } from "react";

// const tableData = [
//   {
//     id: 1,
//     Booking: "8694 Starling Parkway",
//     User: "Rance Lowdes",
//     date: "7/31/2023",
//   },
//   {
//     id: 2,
//     Booking: "61 Cherokee Lane",
//     User: "Rosalia Tomaino",
//     date: "11/10/2022",
//   },
//   { id: 3, Booking: "2 Vera Circle", User: "Rourke Teas", date: "3/18/2023" },
//   {
//     id: 4,
//     Booking: "576 Sommers Plaza",
//     User: "Cecil Treversh",
//     date: "1/6/2023",
//   },
//   { id: 5, Booking: "8 Gale Circle", User: "Lorene Hyatt", date: "2/27/2023" },
// ];

const BookingTable = () => {
  const [showInput, setShowInput] = useState(false);
  const { hotelDeleteLoading, deleteHotel } = useDeleteHotel();
  const { isHotelsLoading, hotels } = useHotels();
  //get tours funksiyasi

  // delete tour funksiyasi

  // turlarin fetch olunmasi

  //turun delete olunmasi

  if (isHotelsLoading) return <Loader />;

  return (
    <>
      <Button onClick={() => setShowInput((curr) => !curr)}>
        Create New Hotel
      </Button>
      {showInput && <FormInput setShowInput={setShowInput} />}
      <TableContainer component={Paper}>
        <Table aria-label="simple-table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Hotel Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hotels.map((table, id) => (
              <TableRow key={id}>
                <TableCell>{table.id}</TableCell>
                <TableCell>
                  <Box sx={{ width: "100px", height: "100px" }}>
                    <img
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }}
                      src={table.pictureURL[0]}
                      alt="hotel picture"
                    />
                  </Box>
                </TableCell>
                <TableCell>{table.hotelsName}</TableCell>
                <TableCell>{table.price}</TableCell>
                <TableCell>{table.date}</TableCell>
                <TableCell>
                  <Stack direction="vertical">
                    <Button>Edit</Button>
                    <Button onClick={() => deleteHotel(table.id)}>
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BookingTable;
