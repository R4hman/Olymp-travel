import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { Star } from "@mui/icons-material";
import { CustomContainer } from "../theme";

const data = [
  {
    id: 4,
    title: "A real sense of community, nurtured",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus exercitationem, perspiciatis expedita aliquam accusantium quia dolorum quam enim consequatur distinctio cupiditate doloremque velit a sequi tempora eos, amet ipsa.,",
    name: "Olga",
    job: "Weave studios- Kai Tai",
    star: 4,
    img: "../assets/reviewFirst.png",
  },
  {
    id: 5,
    title: "A real sense of community, nurtured",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus exercitationem, perspiciatis expedita aliquam accusantium quia dolorum quam enim consequatur distinctio cupiditate doloremque velit a sequi tempora eos, amet ipsa.,",
    name: "Olga",
    job: "Weave studios- Kai Tai",
    star: 6,
    img: "../assets/reviewSecond.png",
  },
  {
    id: 3,
    title: "A real sense of community, nurtured",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus exercitationem, perspiciatis expedita aliquam accusantium quia dolorum quam enim consequatur distinctio cupiditate doloremque velit a sequi tempora eos, amet ipsa.,",
    name: "Olga",
    job: "Weave studios- Kai Tai",
    star: 5,
    img: "../assets/reviewThird.png",
  },
];

export default function Reviews() {
  const tablet = useMediaQuery("(max-width: 900px)");
  const laptop = useMediaQuery("(max-width: 1200px)");
  return (
    <CustomContainer
      display="grid"
      gridTemplateColumns="repeat(6, 1fr)"
      gap={4}
    >
      <CssBaseline />

      {data.map((box) => (
        <Box
          key={box.id}
          gridColumn={tablet ? "span 6" : laptop ? "span 3" : "span 2"}
          sx={{
            maxWidth: "420px",
            padding: "20px",
            borderRadius: "10px",
            height: "auto",
            position: "relative",
            backgroundColor: "white",
            margin: "0 auto",
            // margin: {
            //   xs: "0 auto",
            //   sm: "0 auto",
            // },
          }}
        >
          <CardContent sx={{ zIndex: 1500 }}>
            <Typography gutterBottom variant="h5" sx={{ marginTop: "0" }}>
              {box.title}
            </Typography>

            <ReviewSubtitle>{box.subtitle}</ReviewSubtitle>

            <Box sx={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
              {Array.from({ length: box.star }).map((star) => (
                <Star key={box.id} sx={{ color: "#FFC107" }} />
              ))}
            </Box>
            <Box sx={{ marginTop: "1rem" }}>
              <Typography variant="subtitle1">{box.name}</Typography>
              <Typography variant="subtitle1">{box.job}</Typography>
            </Box>
          </CardContent>
          <CardMedia
            sx={{ height: 200, borderRadius: "10px" }}
            image={box.img}
            title="green iguana"
          />
        </Box>
      ))}
    </CustomContainer>
  );
}

function ReviewSubtitle({ children }) {
  const [viewMore, setViewMore] = useState(true);

  return (
    <Box
      sx={{
        transition: "all 1s linear",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "17px",
          letterSpacing: "0em",
          textAlign: "left",
          marginTop: "2rem",
        }}
        variant="body2"
        color="text.secondary"
      >
        {viewMore ? children.split(" ").slice(0, 15).join(" ") : children}
      </Typography>
      <Typography
        variant="subtitle2"
        onClick={() => setViewMore((curr) => !curr)}
        sx={{
          textAlign: "right",
          cursor: "pointer",
          transition: "all 1s linear",
        }}
      >
        {viewMore ? "...Ətraflı" : "Daha az"}
      </Typography>
    </Box>
  );
}
