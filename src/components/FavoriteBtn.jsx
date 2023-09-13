import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, IconButton } from "@mui/material";
import { theme } from "../theme";
import { useSelector } from "react-redux";

const FavoriteBtn = ({ favoriteClicked, onClick, id }) => {
  console.log("favoriteClicked", favoriteClicked);

  const favorites = useSelector((state) => state.favorite.favorites);
  const isClicked = favorites.find((favorite) => favorite.id === id);

  return (
    <IconButton
      onClick={onClick}
      sx={{
        width: "48px",
        height: "48px",
        borderRadius: "4px",
        border: `1px solid ${theme.palette.primary.main}`,
      }}
    >
      {isClicked?.isInFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default FavoriteBtn;
