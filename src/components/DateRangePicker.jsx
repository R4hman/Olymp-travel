import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Box, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../store/slices/hotelSlice";

const DateRangePicker = () => {
  const dispatch = useDispatch();

  const timeRange = useSelector((store) => store.hotel.timeRange);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <Box
      sx={{
        display: "inline-block",
        position: "relative",
        width: {
          xs: "360px",
          sm: "460px",
        },
      }}
    >
      <Input
        readOnly
        sx={{
          fontSize: "16px",
          padding: "11px 80px 11px 150px",
          borderRadius: "3px",
          border: "1px solid #D3D3D3",
          color: "#666666",
          width: "100%",
          textAlign: "center",
        }}
        onClick={() => setOpen((open) => !open)}
      />

      <Box
        ref={refOne}
        sx={{
          position: "absolute",
          left: {
            xs: "55%",
            sm: "65%",
          },
          transform: "translateX(-50%)",
          top: "70px",
          // border: "1px solid #ccc",
          zIndex: "999",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {open && (
          <DateRange
            onChange={(e) => dispatch(setTime([e.selection]))}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={timeRange}
            months={1}
            direction="horizontal"
            sx={{
              position: "absolute",
              left: "30%",
              transform: "translateX(-50%)",
              top: "40px",
              border: "1px solid #ccc",
              zIndex: "999",
              overflow: "hidden",
              width: "100%",
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default DateRangePicker;
