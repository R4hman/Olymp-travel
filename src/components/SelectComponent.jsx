import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../store/slices/tourSlice";

export default function SelectComponent({ list }) {
  const [age, setAge] = React.useState("");
  const dispatch = useDispatch();

  const timeRange = useSelector((store) => store.tour.timeRange);

  const handleChange = (event) => {
    dispatch(setTime(event.target.value));
    // setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={timeRange}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
        {list.map((l, i) => (
          <MenuItem value={l} key={l + i}>
            {l}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
