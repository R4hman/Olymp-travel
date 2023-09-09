import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import TourListing from "../components/TourListing";
import TestInputComponents from "../components/TestInputComponents";
import useFetch from "../useFetch";
import Navbar from "../components/Navbar";
import FormSelections from "../components/FormSelections";
import { CustomContainer, theme } from "../theme";
import format from "date-fns/format";
import ReusableButton from "../components/ReusableButton";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { setTime } from "../store/slices/tourSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const Tours = () => {
  const [data, setData] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [priceValue, setPriceValue] = useState([100, 3000]);
  const [rating, setRating] = useState(1);
  const [checked, setChecked] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const timeRange = useSelector((store) => store.tour.timeRange);

  const time = format(timeRange[0].startDate, "dd-MM-yyyy");
  const selectedRegion = useSelector((store) => store.tour.city);
  // console.log("range", format(range[0].startDate, "MM/dd/yyyy"));

  let additionalParams = "";
  let url;

  if (checked.length > 0) {
    checked.forEach(
      (txt) =>
        (additionalParams +=
          "&" + txt.toLowerCase().split(" ").join("") + "=true")
    );
    console.log("additionalParams", additionalParams);
  }

  // time varsa url-de date olacaq, yoxsa olmayacaq
  if (time !== "") {
    url = `http://localhost:3000/hotels?price_gte=${priceValue[0]}&price_lte=${priceValue[1]}&rating_gte=${rating}&date=${time}&q=${selectedRegion}${additionalParams}`;
  } else {
    url = `http://localhost:3000/hotels?price_gte=${priceValue[0]}&price_lte=${priceValue[1]}&rating_gte=${rating}&q=${selectedRegion}${additionalParams}`;
  }

  const checkIn = searchParams.get("checkIn");

  // TODO:

  const checkOut = searchParams.get("checkOut");

  const initialCity = searchParams.get("city");

  let initialUrl =
    checkIn && initialCity
      ? `http://localhost:3000/hotels?date=${checkIn}&q=${initialCity}`
      : "http://localhost:3000/hotels";

  const { error, isLoading, data: firstData, refetch } = useFetch(initialUrl);

  function handleSearchList() {
    setSearchParams({ date: time, city: selectedRegion });
    refetch(url);
  }

  const handleClearFilter = () => {
    const date = searchParams.get("date");
    const city = searchParams.get("city");
    const checkIn = searchParams.get("checkIn");
    const checkOut = searchParams.get("checkOut");

    date && searchParams.delete("date");
    checkOut && searchParams.delete("checkOut");
    checkIn && searchParams.delete("checkIn");
    city && searchParams.delete("city");
    toast.success("Filter təmizləndi");

    url = "http://localhost:3000/hotels";
    refetch(url);
    setData([]);
    setSearchParams(searchParams);
  };

  console.log("zooa0", firstData);

  return (
    <Box>
      <Navbar isHomePage={false} />

      <Box
        sx={{
          width: "85%",
          backgroundColor: "white",
          margin: "2rem auto",
          padding: "0.1rem 0 1rem",
          borderRadius: "16px",
          boxShadow: "0px 4px 16px 0px #1122110D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormSelections />
        <ReusableButton
          onClick={handleSearchList}
          bgColor={theme.palette.primary.main}
        >
          <SearchIcon />
        </ReusableButton>
      </Box>
      <TourListing
        searchedList={searchedList}
        setSearchedList={setSearchedList}
        priceValue={priceValue}
        setPriceValue={setPriceValue}
        rating={rating}
        setRating={setRating}
        checked={checked}
        setChecked={setChecked}
        data={firstData}
        // data={data.length > 0 ? data : firstData}
        isLoading={isLoading}
        error={error}
        handleClearFilter={handleClearFilter}
      />
    </Box>
  );
};

export default Tours;
