import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TourListItem from "../components/TourListItem";

const FavoriteTours = () => {
  const favorites = useSelector((store) => store.favorite.favorites);
  // let data;

  // useEffect(() => {
  //   favorites.forEach((item) => fetch(`http://localhost:5173/hotels/${item}`));
  // }, []);

  return (
    <Box>
      <Navbar />
      <Box>
        {favorites.map((item) => (
          <TourListItem key={item.id} item={item} />
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default FavoriteTours;
