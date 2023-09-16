import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortByPrice({ sort, handleSortChange }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="demo-select-small-label" sx={{ ml: "1.5rem" }}>
        Seç
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sort}
        label="Sort by price"
        onChange={handleSortChange}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        <MenuItem value={"high"}>Yuxarı qiymətə</MenuItem>
        <MenuItem value={"low"}>Aşağı qiymətə</MenuItem>
      </Select>
    </FormControl>
  );
}
