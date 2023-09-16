import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TourListItem from "../components/TourListItem";
import { CustomContainer } from "../theme";

const FavoriteTours = () => {
  const favorites = useSelector((store) => store.favorite.favorites);
  // let data;

  // useEffect(() => {
  //   favorites.forEach((item) => fetch(`http://localhost:5173/hotels/${item}`));
  // }, []);

  return (
    <Box>
      <Navbar />
      <CustomContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {favorites.map((item) => (
            <TourListItem favorite sx={{}} key={item.id} item={item} />
          ))}
        </Box>
      </CustomContainer>
      <Footer />
    </Box>
  );
};

export default FavoriteTours;
