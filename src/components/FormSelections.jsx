import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

import DateRangePicker from "./DateRangePicker";
import { State } from "country-state-city";
import { setCity } from "../store/slices/tourSlice";
import { setCity as HotelCity } from "../store/slices/hotelSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";

const FormSelections = ({ forType }) => {
  const [params, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const selectedRegion = useSelector((store) =>
    forType === "tour" ? store.tour.city : store.hotel.city
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        gap: {
          sm: "2rem",
          md: "0",
        },
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
        },
      }}
    >
      {forType !== "tour" && <DateRangePicker />}

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selectedRegion}
          onChange={(e) =>
            dispatch(
              forType === "tour"
                ? setCity(e.target.value)
                : HotelCity(e.target.value)
            )
          }
          input={<OutlinedInput label="Name" />}
        >
          {State.getStatesOfCountry("AZ").map((state, idx) => (
            <MenuItem value={state.name} key={idx}>
              {state.name}
            </MenuItem>
          ))}
        </Select>
        {/* <Box sx={{ backgroundColor: "red" }}>
          {timeRange[0].startDate.toDateString()}
          {timeRange[0].endDate.toDateString()}
        </Box> */}
      </FormControl>
    </Box>
  );
};

export default FormSelections;
