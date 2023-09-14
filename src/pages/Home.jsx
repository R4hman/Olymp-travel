import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShowCard from "../components/ShowCard";
import Reviews from "../components/Reviews";

const Home = ({ months, typeOfTours }) => {
  return (
    <Box>
      <Header months={months} typeOfTours={typeOfTours} />
      <ShowCard />
      <Reviews />
      <Footer />
    </Box>
  );
};

export default Home;
