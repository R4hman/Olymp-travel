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
import { setTime, setType } from "../store/slices/tourSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import useTours from "../features/tours/useTours";
import Loader from "../components/Loader";

const Tours = ({ months, typeOfTours }) => {
  const [data, setData] = useState([]);
  const [priceValue, setPriceValue] = useState([100, 3000]);
  const [checked, setChecked] = useState([]);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [month, setMonth] = useState(null);
  const [sort, setSort] = useState("");
  const [next, setNext] = useState(3);
  const {
    isToursLoading: isLoading,
    tours: firstData,
    errorTours: error,
    refetch,
  } = useTours("http://localhost:3000/tours");
  // const { tours: firstData, isToursLoading, errorTour: error } = useTours();
  // const { tours: firstData, isHotelsLoading, errorHotels: error } = useHotels();
  const location = useLocation();
  const dispatch = useDispatch();
  const tourType = useSelector((store) => store.tour.type);
  const [searchParams, setSearchParams] = useSearchParams();
  const { tours: queryTours, isToursLoading: isFirstLoading } = useTours(
    "http://localhost:3000/tours" + location.search
  );

  console.log("queryTours", queryTours);

  console.log("react qr tours", firstData);

  if (isLoading || isFirstLoading) return <Loader />;

  // const [locationChanged, setLocationChanged] = useState(false);
  // const [time, setTime] = useState(null);
  console.log("location: " + location.search);

  console.log("sort", sort);

  let url = location.search;

  // const selectedRegion = useSelector((store) => store.tour.city);

  let additionalParams = "";

  console.log("month", month);

  const currMonth = searchParams.get("month")
    ? searchParams.get("month")
    : month;

  console.log("currMonth: " + currMonth);
  console.log("Tour type: ", tourType);

  if (checked.length > 0) {
    checked.forEach(
      (txt) =>
        (additionalParams +=
          "&" + txt?.toLowerCase()?.split(" ").join("") + "=true")
    );
    console.log("additionalParams", additionalParams);
  }

  // if (month) {
  //   url = `http://localhost:3000/tours?country=${country}&city=${city}&price_gte=${priceValue[0]}&price_lte=${priceValue[1]}&month=${currMonth}&q=${tourType}`;
  // } else {
  //   url = `http://localhost:3000/tours?country=${country}&city=${city}&price_gte=${priceValue[0]}&price_lte=${priceValue[1]}&q=${tourType}`;
  // }

  // url = `http://localhost:3000/tours?price_gte=${priceValue[0]}&price_lte=${priceValue[1]}&month=${currMonth}&q=${selectedRegion}${additionalParams}`;

  // TODO:

  // const checkOut = searchParams.get("checkOut");

  const initialCity = searchParams.get("city");

  let initialUrl =
    currMonth && tourType
      ? `http://localhost:3000/tours?month=${currMonth}&q=${
          tourType.split(" ")[0]
        }`
      : "http://localhost:3000/tours";

  // const { error, isLoading, data: firstData, refetch } = useFetch(initialUrl);

  console.log("firstData: ", firstData);
  // console.log("error: ", error);
  console.log("price 0 val", priceValue[0]);
  console.log("price 1 val", priceValue[1]);
  const searchObj = {};

  if (country) {
    searchObj.country = country;
  }
  if (city) {
    searchObj.city = city;
  }
  if (tourType) {
    searchObj.q = tourType.split(" ")[0];
  }
  if (month || currMonth) {
    searchObj.month = month || currMonth;
  }
  searchObj.price_gte = priceValue[0] && priceValue[0];
  searchObj.price_lte = priceValue[1] && priceValue[1];

  function handleSearchList() {
    setSearchParams(searchObj);
    // eger yuxarda yazdigimiz month undefined dirse onu urldden silirem

    console.log("url cari", url);
    // setLocationChanged(true);
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
    const q = searchParams.get("q");

    // date && searchParams.delete("date");
    month && searchParams.delete("month");
    country && searchParams.delete("country");
    checkOut && searchParams.delete("checkOut");
    checkIn && searchParams.delete("checkIn");
    city && searchParams.delete("city");
    minPrice && searchParams.delete("minPrice");
    maxPrice && searchParams.delete("maxPrice");
    checked && searchParams.delete("checked");
    q && searchParams.delete("q");

    toast.success("Filter təmizləndi");

    url = "http://localhost:3000/tours";
    refetch(url);
    setData([]);
    setChecked([]);
    setCountry(null);
    setCity(null);
    // setTime(false);
    dispatch(setTime(null));
    dispatch(setType(null));
    setMonth(null);
    setPriceValue([100, 3000]);
    setSearchParams(searchParams);
    setSort("");
    setNext(3);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  let sortedData = queryTours ? queryTours : firstData;
  sortedData = sortedData.sort((a, b) => {
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
  console.log("sortedData", sortedData);

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
        <Box
          sx={{
            display: {
              xs: "flex",
            },
            alignItems: "center",
            justifyContent: "center",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
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
        // data={firstData}
        data={sortedData}
        setMonth={setMonth}
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

export default Tours;
