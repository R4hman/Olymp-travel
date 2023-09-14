import {
  Box,
  Stack,
  Typography,
  CssBaseline,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import { useEffect, useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useNavigate } from "react-router-dom";

import { State } from "country-state-city";
import DateRangePicker from "./DateRangePicker";

import { CustomContainer, FlexBetween, theme } from "../theme";
import ReusableButton from "./ReusableButton";
import { Link, NavLink, useSearchParams, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import FormSelections from "./FormSelections";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const linkStyle = (isActive) => {
  return {
    color: "black",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };
};

const Header = ({ months, typeOfTours }) => {
  const navigate = useNavigate();
  const [params, setSearchParams] = useSearchParams();
  const location = useLocation();

  const timeRange = useSelector((store) => store.tour.timeRange);
  const selectedTourType = useSelector((store) => store.tour.type);

  // const checkIn = format(timeRange[0].startDate, "dd-MM-yyyy");
  // const checkOut = format(timeRange[0].endDate, "dd-MM-yyyy");
  const month = timeRange;
  console.log("select tour type", selectedTourType);

  const handleNavigate = () => {
    console.log("cliclendi");
    if (selectedTourType) {
      setSearchParams({
        // city: selectedTourType?.split(" ")[0],
        type: selectedTourType,
        month,
      });
      navigate(`/turlar?type=${selectedTourType}&month=${month}`);
    }
  };

  return (
    <Stack sx={{ position: "relative", margin: "15px", height: "500px" }}>
      <CssBaseline />
      <img
        src="/public/assets/main-img.png"
        alt="main-img"
        width="100%"
        height="100%"
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <Navbar isHomePage />
      <Box
        sx={{
          textAlign: "center",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: {
              xs: "16px",
              sm: "18px",
              md: "25px",
              lg: "30px",
              xl: "35px",
            },
          }}
        >
          Helping others
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "30px",
              sm: "35px",
              md: "60px",
              lg: "80px",
              xl: "100px",
            },
          }}
        >
          LIVE & TRAVEL
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: "20px",
              sm: "28px",
              md: "35px",
              lg: "40",
              xl: "50px",
            },
          }}
        >
          Special offers to suit your plan
        </Typography>
      </Box>
      <CustomContainer
        sx={{
          borderRadius: "20px",
          height: "250px",
          position: "absolute",
          bottom: "-125px",
          left: "50%",
          top: "500px",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px" + "!important",
          zIndex: 100,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              borderRight: "1px solid grey",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              width: "100px",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "20px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            <NavLink style={linkStyle} to="/turlar">
              <FlightIcon />
              <Typography variant="subtitle1">Turlar</Typography>
            </NavLink>
          </Box>
          <Box
            sx={{
              marginLeft: "1.8rem",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              width: "100px",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "20px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            <NavLink style={linkStyle} to="/otellər">
              <HotelIcon />
              <Typography variant="subtitle1">Otellər</Typography>
            </NavLink>
          </Box>
        </Box>

        <FormSelections
          months={months}
          forType="tour"
          typeOfTours={typeOfTours}
          showSelectComponent
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "2rem" }}>
          <ReusableButton
            bgColor={theme.palette.primary.main}
            width={144}
            height={48}
            onClick={handleNavigate}
          >
            <TelegramIcon sx={{ marginRight: "0.2rem" }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "17px",
                letterSpacing: "0em",
                textAlign: "left",
                textTransform: "capitalize",
              }}
            >
              Show Flights
            </Typography>
          </ReusableButton>
        </Box>
      </CustomContainer>
    </Stack>
  );
};

export default Header;
