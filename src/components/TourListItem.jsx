import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FlexBetween, RatingComponent, theme } from "../theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBtn from "./FavoriteBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFavorites,
  setFavorites,
  setIsClicked,
  // setIsClicked,
} from "../store/slices/favoritesSlice";
import { toast } from "react-hot-toast";

const TourListItem = ({ item }) => {
  // eger isWishlist varsa demeli tourListItem wishlist sehifesindedir ve click ile wishliste salinib evvelceden
  // const [favoriteClicked, setFavoriteClicked] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorite.favorites);

  // console.log("favoriteClicked", favoriteClicked);

  function handleFavoriteClick() {
    // setFavoriteClicked((curr) => !curr);
    // console.log(item.isInFavorite);

    // item.isInFavorite = item.isInFavorite === true ? false : true;
    // console.log(item.isInFavorite);

    console.log("egageaeae", item.id);

    const existEl = favorites.find((el) => el.id === item.id);
    if (existEl) {
      dispatch(deleteFavorites(item.id));
      toast.success("İstək siyahısından çıxarıldı");
    } else {
      dispatch(setFavorites(item));
      toast.success("İstək siyahısına əlavə edildi");
    }
    dispatch(setIsClicked(item.id));

    // dispatch(setIsClicked(item.id));
  }

  return (
    // <Link to={`${item.id}`}>
    <Card
      sx={{
        display: "flex",
        borderRadius: "12px",
        mb: "1.5rem",
        "& :hover": {
          boxShadow:
            "box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 300, height: 298.5 }}
        image={item.pictureURL[0]}
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          width: "100%",
          margin: "1.5rem",
        }}
      >
        <CardContent sx={{ width: "100%" }}>
          <FlexBetween direction="row">
            <Typography component="div" variant="h5">
              {item.hotelsName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              $ {item.price}
            </Typography>
          </FlexBetween>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.date}
          </Typography>
          {/* <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{
              width: "40px",
              height: "32px",
              borderRadius: "4px",
              border: `1px solid ${theme.palette.primary.main}`,
              textAlign: "center",
            }}
          >
            {item.rating}
          </Typography> */}
          <RatingComponent>{item.rating}</RatingComponent>
        </CardContent>
        <Divider
          sx={{
            backgroundColor: theme.palette.divider,
            borderBottomWidth: "0.5px",
            marginTop: "1rem",
          }}
        />

        <Stack direction="row" spacing={2}>
          {/* <IconButton
            onClick={handleFavoriteClick}
            sx={{
              width: "48px",
              height: "48px",
              borderRadius: "4px",
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            {favoriteClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton> */}
          <FavoriteBtn
            onClick={handleFavoriteClick}
            // favoriteClicked={item.isInFavorite}
            // favoriteClicked={favoriteClicked}
            id={item.id}
          />
          <Button
            href={`turlar/${item.id}`}
            sx={{
              backgroundColor: `${theme.palette.primary.main}`,
              borderRadius: "4px",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "17px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "black",
              textTransform: "capitalize",
              width: "100%",

              "&:hover": { backgroundColor: `${theme.palette.primary.main}` },
            }}
          >
            Ətraflı
          </Button>
        </Stack>
      </Box>
    </Card>
    // </Link>
  );
};

export default TourListItem;
