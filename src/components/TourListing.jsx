import {
  Grid,
  Typography,
  Stack,
  Divider,
  Box,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";
import Filters from "./Filters";
import CheckListHotel from "./CheckListHotel";
import { CustomContainer, FlexBetween } from "../theme";
import { KeyboardArrowDown } from "@mui/icons-material";
import TourList from "./TourList";
import { useTheme } from "@mui/material/styles";
import ReusableButton from "./ReusableButton";
import { useState } from "react";

const freebies = [
  "Free breakfast",
  "Free parking",
  "Free internet",
  "Free Airport shuttle",
  "Free coencillation",
];

const amenities = ["24hr front desk", "Air condition", "fitness", "pool"];
const countries = [
  {
    country: "ABŞ",
    cities: [
      "Nyu york",
      "San Francisco",
      "Kaliforniya",
      "Vaşinqton",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
  {
    country: "Almaniya",
    cities: [
      "Berlin",
      "Frankfurt",
      "Leipzig",
      "Vaşinqton",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
  {
    country: "İspaniya",
    cities: [
      "Barselona",
      "Madrid",
      "Sevilya",
      "Vaşinqton",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
  {
    country: "Portuqaliya",
    cities: [
      "Lisabon",
      "San Francisco",
      "Kaliforniya",
      "Vaşinqton",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
  {
    country: "Hollandiya",
    cities: [
      "Amsterdam ",
      "Eindhoven",
      "Kaliforniya",
      "Vaşinqton",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
  {
    country: "İtaliya",
    cities: [
      "Roma",
      "Florensiya",
      "Venesiya",
      "Milan",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
  {
    country: "Fransa",
    cities: [
      "Paris",
      "Marsel",
      "Tuluz",
      "Vaşinqton",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
  {
    country: "Norveç",
    cities: [
      "Oslo ",
      "Eindhoven",
      "Kaliforniya",
      "Vaşinqton",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
  {
    country: "Birləşmiş Ərəb Əmirlikləri",
    cities: [
      "London ",
      "Liverpul",
      "Lester",
      "Mançester",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
  {
    country: "Böyük Britaniya",
    cities: [
      "London ",
      "Liverpul",
      "Lester",
      "Mançester",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
  {
    country: "Braziliya",
    cities: [
      "Sao Paolo",
      "Rio de Janeiro",
      "Lester",
      "Mançester",
      "Massachusetts",
      "Orlando",
      "Mayami",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
    ],
  },
];

// const typeOfTour = [
//   "8 Mart",
//   "Ailəvi turlar",
//   "Bal ayı turları",
//   "Ekstrim turları",
//   "Erkən rezervasiya turları",
//   "Gənclər üçün turlar",
//   "Halal turlar",
//   "Konsertlər ",
//   "Kruiz turları",
//   "Lüks turlar",
//   "Müalicəvi turlar",
//   "Novruz turları",
//   "Qrup turları",
//   "Ramazan turları",
//   "Serial turları",
//   "Sevgililər günü",
//   "Səyahət turları",
//   "Viza tələb olunmayan turlar",
//   "Xaricilər üçün ekskursiyalar",
//   "Yay turları",
//   "Yeni il turları",
//   "Çimərlik turları",
//   "Əyləncəli turlar",
// ];

let cities = [
  "Sao Paolo",
  "Rio de Janeiro",
  "Lester",
  "Mançester",
  "Massachusetts",
  "Orlando",
  "Mayami",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
];

const postsPerPage = 3;
let arrayForHoldingPosts = [];

const TourListing = ({
  priceValue,
  setPriceValue,
  city,
  setCity,
  country,
  setCountry,
  setMonth,
  months,
  setChecked,
  checked,
  data,
  isLoading,
  error,
  handleClearFilter,
  handleSortChange,
  sort,
  setNext,
  next,
}) => {
  const [postsToShow, setPostsToShow] = useState([]);

  const theme = useTheme();

  const cityToShow = countries.filter((country) => {
    return country.country === checked[checked.length - 1];
  })[0]?.cities;

  const loopWithSlice = (start, end) => {
    console.log("start", start);
    console.log("end", end);
    const slicedPosts = data.slice(start, end);
    console.log("sliced posts", slicedPosts);
    // arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    // setPostsToShow(arrayForHoldingPosts);
    setPostsToShow(slicedPosts);
  };

  console.log("next", next);

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

  const handleMonthToggle = (value) => () => {
    console.log("handleToggle", value);
    setMonth(value);
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <CustomContainer>
      <Grid container columns={12} spacing={2}>
        <Grid item xs={3}>
          <Filters priceValue={priceValue} setPriceValue={setPriceValue} />
          <Stack sx={{ pt: "0.5rem " }}>
            <FlexBetween sx={{ pb: "0.5rem 0", mb: "1rem" }}>
              <Typography variant="subtitle1">Ölkə</Typography>
              <KeyboardArrowDown />
            </FlexBetween>
            <CheckListHotel
              checked={checked}
              setChecked={setChecked}
              country={country}
              setCountry={setCountry}
              data={countries}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            />
          </Stack>
          <Divider />

          <Stack>
            <FlexBetween sx={{ padding: "0.5rem  0", mb: "1rem" }}>
              <Typography variant="subtitle1">Şəhər</Typography>
              <KeyboardArrowDown />
            </FlexBetween>
            <CheckListHotel
              checked={checked}
              setChecked={setChecked}
              country={country}
              setCountry={setCountry}
              city={city}
              setCity={setCity}
              data={!cityToShow ? cities : cityToShow}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            />
          </Stack>
          <Stack sx={{ mb: "1rem" }}>
            <FlexBetween sx={{ padding: "0.5rem  0", mb: "1rem" }}>
              <Typography variant="subtitle1">Ay</Typography>
              <KeyboardArrowDown />
            </FlexBetween>

            <Grid
              container
              spacing={2}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid
                item
                sx={{
                  "&.MuiGrid-root": {
                    paddingLeft: "0",
                    paddingTop: "0",
                    width: "100%",
                  },
                }}
              >
                <List
                  sx={{
                    width: "100%",
                    // maxWidth: 360,
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 300,
                    "& ul": { padding: 0 },
                  }}
                  dense
                  component="div"
                  role="list"
                >
                  {months.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                      <ListItem
                        key={value}
                        role="listitem"
                        button
                        onClick={handleMonthToggle(value)}
                        sx={{
                          "&.MuiListItem-root": {
                            padding: "0",
                            width: "100%",
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            "&.MuiListItemIcon-root": {
                              minWidth: "42px",
                            },
                          }}
                        >
                          <Checkbox
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`${value}`} />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
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
              handleSortChange={handleSortChange}
              sort={sort}
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
            {data.length > 3 && next < data.length && (
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

export default TourListing;
