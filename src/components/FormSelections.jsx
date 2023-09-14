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
import { setType } from "../store/slices/tourSlice";
import { setCity as HotelCity } from "../store/slices/hotelSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import SelectComponent from "./SelectComponent";

const FormSelections = ({
  forType,
  months,
  showSelectComponent,
  typeOfTours,
}) => {
  const [params, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const selected = useSelector((store) => {
    return forType === "tour" ? store.tour.type : store.hotel.city;
  });

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
      {/* {forType !== "tour" && <DateRangePicker />} */}
      {showSelectComponent && <SelectComponent list={months} />}

      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          value={selected}
          onChange={(e) =>
            dispatch(
              forType === "tour"
                ? setType(e.target.value)
                : HotelCity(e.target.value)
            )
          }
        >
          {!typeOfTours &&
            State.getStatesOfCountry("AZ").map((state, idx) => (
              <MenuItem value={state.name} key={idx}>
                {state.name}
              </MenuItem>
            ))}
          {typeOfTours &&
            typeOfTours.map((state, idx) => (
              <MenuItem value={state} key={idx}>
                {state}
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
