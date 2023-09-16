import { Box } from "@mui/material";
import { useState } from "react";
import useFetch from "../useFetch";
import Navbar from "../components/Navbar";
import FormSelections from "../components/FormSelections";
import { theme } from "../theme";
import format from "date-fns/format";
import ReusableButton from "../components/ReusableButton";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import HotelListing from "../components/HotelListing";

const HotelTest = () => {
  const [data, setData] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [priceValue, setPriceValue] = useState([100, 3000]);
  const [checked, setChecked] = useState([]);
  const [sort, setSort] = useState("");
  const [next, setNext] = useState(3);

  const [searchParams, setSearchParams] = useSearchParams();

  const timeRange = useSelector((store) => store.hotel.timeRange);

  const time = format(timeRange[0].startDate, "dd-MM-yyyy");
  const selectedRegion = useSelector((store) => store.hotel.city);

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
    url = `http://localhost:3000/hotels?price_gte=${priceValue[0]}&price_lte=${priceValue[1]}&date=${time}&q=${selectedRegion}${additionalParams}`;
  } else {
    url = `http://localhost:3000/hotels?price_gte=${priceValue[0]}&price_lte=${priceValue[1]}&q=${selectedRegion}${additionalParams}`;
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
    setSort("");
    setSearchParams(searchParams);
    setNext(3);
  };

  console.log("firstData", firstData);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const sortedData = firstData.sort((a, b) => {
    if (sort === "") {
      return;
    }
    if (sort === "low") {
      return a.price - b.price;
    }
    if (sort === "high") {
      return b.price - a.price;
    }
  });

  console.log("sorted Data", sortedData);

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
      <HotelListing
        searchedList={searchedList}
        setSearchedList={setSearchedList}
        priceValue={priceValue}
        setPriceValue={setPriceValue}
        checked={checked}
        setChecked={setChecked}
        // data={firstData}
        data={sortedData}
        // data={data.length > 0 ? data : firstData}
        isLoading={isLoading}
        error={error}
        handleClearFilter={handleClearFilter}
        handleSortChange={handleSortChange}
        sort={sort}
        next={next}
        setNext={setNext}
      />
    </Box>
  );
};

export default HotelTest;
