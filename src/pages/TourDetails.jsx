import { NavLink, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import {
  Box,
  CardMedia,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  CustomContainer,
  FlexBetween,
  RatingComponent,
  SectionTitle,
  theme,
} from "../theme";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteBtn from "../components/FavoriteBtn";
import ReusableButton from "../components/ReusableButton";
import UserReviews from "../components/UserReviews";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Map from "../components/Map";

const navLinkStyle = () => {
  return {
    textDecoration: "none",
    color: "#112211",
  };
};

const TourDetails = () => {
  const params = useParams();
  const { tourId } = params;
  console.log("params: ", params);

  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/hotels/${tourId}`
  );
  console.log("gelmeyen", data);
  console.log("id", tourId);
  return (
    <Box>
      <Navbar isHomePage={false} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && !error && (
        <CustomContainer>
          salam {tourId}
          <Box sx={{ display: " flex", alignItems: "center", gap: "0.7rem" }}>
            <NavLink to="/" style={navLinkStyle}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontFamily: "Montserrat",
                  fontSize: "17px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  textDecoration: "none",
                  color: theme.palette.primary.pink,
                }}
              >
                Ana səhifə
                <ChevronRightIcon />
              </Box>
            </NavLink>
            <NavLink style={navLinkStyle} to="/turlar">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontFamily: "Montserrat",
                  fontSize: "17px",
                  fontWeight: 500,
                  lineHeight: "17px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  textDecoration: "none",
                  color: theme.palette.primary.pink,
                }}
              >
                Turlar
                <ChevronRightIcon />
              </Box>
            </NavLink>
            <Typography>{data.hotelsName}</Typography>
          </Box>
          <FlexBetween sx={{ margin: "1rem 0" }}>
            <Stack spacing={2}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "30px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  {data.hotelsName}
                </Typography>
              </Box>
              <RatingComponent>{data.rating}</RatingComponent>
            </Stack>
            <Stack spacing={2}>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.pink,
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "29px",
                  letterSpacing: "0em",
                  textAlign: "right",
                }}
              >
                $ {data.price}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <FavoriteBtn />
                <ReusableButton
                  bgColor={theme.palette.primary.main}
                  width={150}
                  height={48}
                  size="14px"
                >
                  Bron et
                </ReusableButton>
              </Box>
            </Stack>
          </FlexBetween>
          <Stack
            sx={{ width: "100%", height: "550px" }}
            direction="row"
            spacing={1}
          >
            <Box sx={{ width: "100%", objectFit: "cover" }}>
              <img
                src={data?.pictureURL?.[0]}
                width="100%"
                height="100%"
                alt="main-img"
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {data?.pictureURL?.slice(1, 5)?.map((item) => (
                <img width="316px" height="271px" key={item} src={item} />
              ))}
            </Box>
          </Stack>
          <Divider sx={{ margin: "3rem 0" }} />
          <Box sx={{}}>
            <SectionTitle>Overview</SectionTitle>
            <Typography sx={{ margin: "1rem 0" }} variant="body1">
              {data?.overview}
            </Typography>
          </Box>
          <UserReviews reviews={data.reviews} />
          {data.position && <Map mapPosition={data.position} />}
        </CustomContainer>
      )}
      <Footer />
    </Box>
  );
};

export default TourDetails;
