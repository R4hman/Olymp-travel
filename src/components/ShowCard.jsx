import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ReusableButton from "./ReusableButton";
import { theme } from "../theme";

const data = [
  {
    id: 77,
    img: "/public/assets/flight.png",
    subtitle: "Search Flights & Places Hire to our most popular destinations",
    btnAction: "Show Flights",
    title: "Flights",
  },
  {
    id: 99,
    img: "/public/assets/hotel.png",
    subtitle: "Search Flights & Places Hire to our most popular destinations",
    btnAction: "Show Hotels",
    title: "Hotels",
  },
];

const ShowCard = () => {
  return (
    <Grid
      container
      sx={{
        padding: "12rem 0",
        justifyContent: "center",
      }}
      spacing={6}
      columns={16}
    >
      {data.map((card, i) => (
        <Grid key={card.id} item>
          <Card
            sx={{
              position: "relative",
              width: {
                xs: "350px",
                sm: "575px",
              },
              textAlign: "center",
              height: "559px",
            }}
          >
            <CardMedia
              sx={{ position: "absolute", inset: 0 }}
              component="img"
              image={card.img}
              // width="100"
              height="559px"
              alt="flight image"
            ></CardMedia>

            <CardContent
              sx={{
                zIndex: 1,
                padding: "0 4rem",
                position: "absolute",
                bottom: 0,
              }}
            >
              <Typography
                // sx={{ color: "red", zIndex: "fab" }}
                color="white"
                variant="h4"
                bottom="0"
                gutterBottom
                fontWeight="bold"
              >
                {card.title}
              </Typography>
              <Typography
                // sx={{ color: "red", zIndex: "fab" }}
                color="white"
                variant="h6"
                bottom="0"
                gutterBottom
              >
                {card.subtitle}
              </Typography>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ReusableButton
                  width={144}
                  height={48}
                  bgColor={theme.palette.primary.main}
                >
                  {card.btnAction}
                </ReusableButton>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ShowCard;
