import { Grid, Typography, Stack, Divider, Box } from "@mui/material";
import Filters from "./Filters";
import CheckListHotel from "./CheckListHotel";
import { CustomContainer, FlexBetween } from "../theme";
import { KeyboardArrowDown } from "@mui/icons-material";
import TourList from "./TourList";
import { useTheme } from "@mui/material/styles";
import ReusableButton from "./ReusableButton";
import { useState } from "react";
import CheckListHotelTest from "./CheckListHotelTest";

const freebies = [
  "Free breakfast",
  "Free parking",
  "Free internet",
  "Free Airport shuttle",
  "Free coencillation",
];

const amenities = ["24hr front desk", "Air condition", "fitness", "pool"];

const postsPerPage = 3;
let arrayForHoldingPosts = [];

const HotelListing = ({
  searchedList,
  setSearchedList,
  priceValue,
  setPriceValue,
  rating,
  setRating,
  setChecked,
  checked,
  data,
  isLoading,
  error,
  handleClearFilter,
}) => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const theme = useTheme();

  const loopWithSlice = (start, end) => {
    console.log("start: " + start);
    console.log("end: " + end);
    const slicedPosts = data.slice(start, end);
    console.log("slicedPost", slicedPosts);
    // arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    // setPostsToShow(arrayForHoldingPosts);
    setPostsToShow(slicedPosts);
  };

  console.log("post to show", postsToShow);

  // useEffect(() => {
  //   loopWithSlice(0, postsPerPage);
  //   // setPostsToShow(data.slice(0, 3));
  // }, []);

  // useLayoutEffect(() => {
  //   setPostsToShow(data);
  // }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return (
    <CustomContainer>
      <Grid container columns={12} spacing={2}>
        <Grid item xs={3}>
          <Filters
            priceValue={priceValue}
            setPriceValue={setPriceValue}
            rating={rating}
            setRating={setRating}
          />
          <Stack sx={{ pt: "0.5rem " }}>
            <FlexBetween sx={{ pb: "0.5rem" }}>
              <Typography variant="subtitle1">Freebies</Typography>
              <KeyboardArrowDown />
            </FlexBetween>
            <CheckListHotelTest
              checked={checked}
              setChecked={setChecked}
              data={freebies}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            />
          </Stack>
          <Divider />
          <Stack>
            <FlexBetween sx={{ padding: "0.5rem  0" }}>
              <Typography variant="subtitle1">Amenities</Typography>
              <KeyboardArrowDown />
            </FlexBetween>
            <CheckListHotelTest
              checked={checked}
              setChecked={setChecked}
              data={amenities}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            />
          </Stack>
        </Grid>

        <Grid
          item
          xs={9}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Divider
            sx={{
              backgroundColor: theme.palette.divider,
              borderBottomWidth: "0.5px",
              marginRight: "1.5rem  ",
            }}
            orientation="vertical" // flexItem
            variant="middle"
          />
          <Box>
            <TourList
              length={data.length}
              // data={postsToShow.length > 0 ? postsToShow : data.slice(0, 3)}
              data={postsToShow.length > 0 ? postsToShow : data.slice(0, 3)}
              isLoading={isLoading}
              error={error}
              handleClearFilter={handleClearFilter}
            />
            {postsToShow.length > 0 && !data.length && (
              <ReusableButton
                onClick={handleShowMorePosts}
                bgColor="black"
                color="white"
                width="100%"
                size=""
              >
                Show more tours
              </ReusableButton>
            )}
            {data.length > 0 && (
              <ReusableButton
                onClick={handleShowMorePosts}
                bgColor="black"
                color="white"
                width="100%"
                size=""
              >
                Show more tours
              </ReusableButton>
            )}
          </Box>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default HotelListing;
