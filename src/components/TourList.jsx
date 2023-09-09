import { Box, Typography } from "@mui/material";
import React from "react";
import TourListItem from "./TourListItem";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { FlexBetween } from "../theme";
import ReusableButton from "./ReusableButton";
import SortByPrice from "./SortByPrice";

const TourList = ({ data, isLoading, error, length, handleClearFilter }) => {
  console.log("data is", data);
  return (
    <Box sx={{ width: "800px", height: "auto" }}>
      <FlexBetween sx={{ mb: "1rem" }}>
        <Typography variant="subtitle1">
          Axtarışa uyğun {length} tur tapıldı
        </Typography>
        <ReusableButton onClick={handleClearFilter}>
          Filtrləri təmizlə
        </ReusableButton>
        <SortByPrice />
      </FlexBetween>
      <Box>
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {!isLoading &&
          !error &&
          data.length > 0 &&
          data.map((item) => <TourListItem key={item.id} item={item} />)}
        {data.length === 0 && "No Tour has found"}
      </Box>
    </Box>
  );
};

export default TourList;
