import { Avatar, Box, Typography, Stack, Divider } from "@mui/material";
import React from "react";
import { FlexBetween, SectionTitle } from "../theme";
import FlagIcon from "@mui/icons-material/Flag";
const UserReviews = ({ reviews }) => {
  let averagReview = 4.2;
  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        gap: "1.5rem",
        flexDirection: "column",
        mt: "3rem",
        // width: "600px",
      }}
    >
      <SectionTitle>Reviews</SectionTitle>
      <Box
        sx={{
          fontSize: "50px",
          fontWeight: 700,
          lineHeight: "63px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        {averagReview}
      </Box>
      <Box sx={{ pt: "0" }}>
        <Divider sx={{}} />
        {reviews?.map((review) => (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                position: "relative",
                padding: "1.5rem 0",
              }}
              key={review?.name}
            >
              <FlagIcon
                sx={{ position: "absolute", right: "0", top: "10px" }}
              />
              <Avatar alt="Remy Sharp" src={review?.src} />
              <Stack direction="column">
                <FlexBetween>
                  <Typography>{review?.name}</Typography>
                </FlexBetween>
                <Typography>{review?.text}</Typography>
              </Stack>
            </Box>
            <Divider />
          </>
        ))}
      </Box>
    </Box>
  );
};

export default UserReviews;
