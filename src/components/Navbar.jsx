import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import { CustomContainer } from "../theme";
import AuthUser from "./AuthUser";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ isHomePage }) => {
  const isAuth = true;
  const isMobile = useMediaQuery("(max-width: 600px)");

  function navLinkStyle(isActive) {
    return {
      color: isHomePage ? "white" : "black",
      textDecoration: "none",
    };
  }

  return (
    <Box
      sx={{
        position: isHomePage ? "absolute" : "static",
        top: isHomePage ? "0" : "null",
        left: isHomePage ? "0" : "null",
        right: isHomePage ? "0" : "null",
        // margin: "20px",
        borderRadius: "10px",
        // padding: "10px",
        backgroundColor: isHomePage ? "null" : "white",
        boxShadow: isHomePage ? "0" : " 0px 4px 16px 0px #1122110D",
      }}
    >
      <CustomContainer
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            color: "white",
          }}
        >
          <NavLink to="/turlar" style={navLinkStyle}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
              <FlightIcon />
              <Typography variant="subtitle1">Turlar</Typography>
            </Box>
          </NavLink>
          <NavLink to="/" style={navLinkStyle}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
              <HotelIcon />
              <Typography variant="subtitle1">Otellər</Typography>
            </Box>
          </NavLink>
        </Box>
        {/* <Box>Logo</Box> */}
        <NavLink to="/" style={navLinkStyle}>
          Logo
        </NavLink>
        {isMobile && <MenuIcon />}
        {!isMobile && (
          <Box>
            {isAuth ? (
              <AuthUser />
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: isHomePage ? "white" : "black" }}
                >
                  Login
                </Typography>

                <Typography
                  sx={{
                    padding: "1rem 2rem",
                    borderRadius: "10px",
                    backgroundColor: isHomePage ? "white" : "black",
                    color: isHomePage ? "black" : "white",

                    textAlign: "center",
                  }}
                >
                  SignUp
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </CustomContainer>
    </Box>
  );
};

export default Navbar;
