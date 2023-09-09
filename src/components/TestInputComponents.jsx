import { InputBase, Box, Button } from "@mui/material";
import { useState } from "react";

const TestInputComponents = ({
  setCity,
  setTime,
  time,
  city,
  handleSearchList,
}) => {
  console.log(time);

  console.log(time);
  return (
    <Box sx={{ width: "700px" }}>
      <Box
        sx={{
          backgroundColor: "lightblue",
          padding: "3rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <InputBase
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="choose city"
          sx={{
            backgroundColor: "white",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        />
        <InputBase
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="choose time"
          sx={{
            backgroundColor: "white",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        />
        <Button onClick={handleSearchList}>click</Button>
      </Box>
    </Box>
  );
};

export default TestInputComponents;
