import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import TourListing from "../components/TourListing";
import TestInputComponents from "../components/TestInputComponents";
import useFetch from "../useFetch";
import Navbar from "../components/Navbar";
import FormSelections from "../components/FormSelections";
import { CustomContainer, theme } from "../theme";
import ReusableButton from "../components/ReusableButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../store/slices/tourSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const Tours = ({ months, typeOfTours }) => {
  const [data, setData] = useState([]);
  const [priceValue, setPriceValue] = useState([100, 3000]);
  const [checked, setChecked] = useState([]);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [month, setMonth] = useState(null);
  // const [time, setTime] = useState(null);

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedRegion = useSelector((store) => store.tour.city);

  let additionalParams = "";
  let url;

  const currMonth = searchParams.get("month") || month;

  if (checked.length > 0) {
    checked.forEach(
      (txt) =>
        (additionalParams +=
          "&" + txt?.toLowerCase()?.split(" ").join("") + "=true")
    );
    console.log("additionalParams", additionalParams);
  }

  url = `http://localhost:3000/tours?price_gte=${priceValue[0]}&price_lte=${priceValue[1]}&month=${currMonth}&q=${selectedRegion}${additionalParams}`;

  // TODO:

  // const checkOut = searchParams.get("checkOut");

  const initialCity = searchParams.get("city");

  let initialUrl =
    currMonth && initialCity
      ? `http://localhost:3000/tours?month=${currMonth}&q=${initialCity}`
      : "http://localhost:3000/tours";

  const { error, isLoading, data: firstData, refetch } = useFetch(initialUrl);

  function handleSearchList() {
    setSearchParams({
      // date: time,
      month: currMonth && currMonth,
      country: country && country,
      city: selectedRegion && selectedRegion,
      minPrice: priceValue[0] && priceValue[0],
      maxPrice: priceValue[1] && priceValue[1],
      // checked: additionalParams && additionalParams,
    });
    refetch(url);
  }

  const handleClearFilter = () => {
    // const date = searchParams.get("date");
    const month = searchParams.get("month");
    const city = searchParams.get("city");
    const country = searchParams.get("country");
    const checkIn = searchParams.get("checkIn");
    const checkOut = searchParams.get("checkOut");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const checked = searchParams.get("checked");

    // date && searchParams.delete("date");
    month && searchParams.delete("month");
    country && searchParams.delete("country");
    checkOut && searchParams.delete("checkOut");
    checkIn && searchParams.delete("checkIn");
    city && searchParams.delete("city");
    minPrice && searchParams.delete("minPrice");
    maxPrice && searchParams.delete("maxPrice");
    checked && searchParams.delete("checked");

    toast.success("Filter təmizləndi");

    url = "http://localhost:3000/tours";
    refetch(url);
    setData([]);
    setChecked([]);
    setCountry(null);
    // setTime(false);
    dispatch(setTime(null));
    setMonth(null);
    setPriceValue([100, 3000]);
    setSearchParams(searchParams);
  };

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
        <FormSelections
          months={months}
          forType="tour"
          typeOfTours={typeOfTours}
        />
        <ReusableButton
          onClick={handleSearchList}
          bgColor={theme.palette.primary.main}
        >
          <SearchIcon />
        </ReusableButton>
      </Box>
      <TourListing
        months={months}
        priceValue={priceValue}
        setPriceValue={setPriceValue}
        checked={checked}
        setChecked={setChecked}
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
        data={firstData}
        setMonth={setMonth}
        // data={data.length > 0 ? data : firstData}
        isLoading={isLoading}
        error={error}
        handleClearFilter={handleClearFilter}
      />
    </Box>
  );
};

export default Tours;
