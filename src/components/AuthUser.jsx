import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";

const AuthUser = () => {
  function navLinkStyle(isActive) {
    return {
      color: "black",
      textDecoration: "none",
    };
  }
  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
        <FavoriteIcon />
        <NavLink style={navLinkStyle} to="/seçdiklərim">
          <Typography>Favorites</Typography>
        </NavLink>
      </Box>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        // sx={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   height: "1rem",
        //   width: "1.5px",
        //   backgroundColor: "red",
        // }}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
        <Avatar />
        <UserMenu />
      </Box>
    </Stack>
  );
};

export default AuthUser;
