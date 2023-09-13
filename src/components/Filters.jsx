import {
  Box,
  Divider,
  Typography,
  Button,
  Slider,
  Stack,
  ButtonGroup,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FlexBetween } from "../theme";

const Filters = ({ priceValue, setPriceValue }) => {
  const handleChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          mb: "0.5rem",

          fontFamily: "Montserrat",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "24px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        Filters
      </Typography>
      <Stack>
        <FlexBetween>
          <Typography variant="subtitle1">Price</Typography>
          <KeyboardArrowDownIcon />
        </FlexBetween>
        <Box>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={priceValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            //   getAriaValueText={valuetext}
            min={100}
            max={3000}
          />
          <FlexBetween>
            <Typography variant="subtitle2">$ {priceValue[0]}</Typography>
            <Typography variant="subtitle2">$ {priceValue[1]}</Typography>
          </FlexBetween>
        </Box>
      </Stack>
      <Divider sx={{ padding: "0.5rem" }} />
    </Box>
  );
};

export default Filters;
