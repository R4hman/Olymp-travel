import { Grid, Typography, Stack, Divider, Box } from "@mui/material";
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
      "Franfurt",
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

const typeOfTour = [
  "8 Mart",
  "Ailəvi turlar",
  "Bal ayı turları",
  "Ekstrim turları",
  "Erkən rezervasiya turları",
  "Gənclər üçün turlar",
  "Halal turlar",
  "Konsertlər ",
  "Kruiz turları",
  "Lüks turlar",
  "Müalicəvi turlar",
  "Novruz turları",
  "Qrup turları",
  "Ramazan turları",
  "Serial turları",
  "Sevgililər günü",
  "Səyahət turları",
  "Viza tələb olunmayan turlar",
  "Xaricilər üçün ekskursiyalar",
  "Yay turları",
  "Yeni il turları",
  "Çimərlik turları",
  "Əyləncəli turlar",
];

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

const months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "İyun",
  "İyul",
  "Avqust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

const postsPerPage = 3;
let arrayForHoldingPosts = [];

const TourListing = ({
  priceValue,
  setPriceValue,

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

  // if (checked.length > 0) {
  //   cityToShow = countries.filter((country) => {
  //     return country.country === checked[checked.length - 1];
  //   })[0]?.cities;
  // } else if (!cityToShow) {
  //   cityToShow = cities;
  // }

  const cityToShow = countries.filter((country) => {
    return country.country === checked[checked.length - 1];
  })[0]?.cities;

  console.log("icini sikdiyim cities", cities);
  console.log("icini sikdiyim checked", checked);
  console.log("icini sikdiyim cityToShw", cityToShow);
  console.log("typeof cityToShow:  " + Array.isArray(cityToShow));
  // cityToShow.map((c) => console.log("cityToShow: " + c + "b"));

  // console.log("checked", cityToShow);
  // console.log("country  ", cityToShow);
  // console.log("checked", cityToShow);

  const loopWithSlice = (start, end) => {
    const slicedPosts = data.slice(start, end);
    // arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    // setPostsToShow(arrayForHoldingPosts);
    setPostsToShow(slicedPosts);
  };

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
          <Filters priceValue={priceValue} setPriceValue={setPriceValue} />
          <Stack sx={{ pt: "0.5rem " }}>
            <FlexBetween sx={{ pb: "0.5rem" }}>
              <Typography variant="subtitle1">Ölkə</Typography>
              <KeyboardArrowDown />
            </FlexBetween>
            <CheckListHotel
              checked={checked}
              setChecked={setChecked}
              data={countries}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            />
          </Stack>
          <Divider />

          <Stack>
            <FlexBetween sx={{ padding: "0.5rem  0" }}>
              <Typography variant="subtitle1">Şəhər</Typography>
              <KeyboardArrowDown />
            </FlexBetween>
            <CheckListHotel
              checked={checked}
              setChecked={setChecked}
              data={!cityToShow ? cities : cityToShow}
              // data={amenities}
              // data={cities}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            />
          </Stack>
          <Stack>
            <FlexBetween sx={{ padding: "0.5rem  0" }}>
              <Typography variant="subtitle1">Turun növü</Typography>
              <KeyboardArrowDown />
            </FlexBetween>
            <CheckListHotel
              checked={checked}
              setChecked={setChecked}
              data={typeOfTour}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            />
          </Stack>
          <Stack>
            <FlexBetween sx={{ padding: "0.5rem  0" }}>
              <Typography variant="subtitle1">Turun növü</Typography>
              <KeyboardArrowDown />
            </FlexBetween>
            <CheckListHotel
              checked={checked}
              setChecked={setChecked}
              data={months}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
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

export default TourListing;
