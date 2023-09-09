import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { CustomContainer, FlexBetween } from "../theme";

const account = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  password: "123456",
  phoneNumber: "+123697477",
  address: "St 32 main downtown, Los Angeles, California, USA",
  "date-of-birth": "07/06/1998",
};

const Account = () => {
  return (
    <Box>
      <CustomContainer>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <FlexBetween sx={{ mb: "1rem" }}>
            <Stack>
              <Typography variant="subtitle2" sx={{ color: "gray" }}>
                name
              </Typography>
              <Typography variant="subtitle1">{account.name}</Typography>
            </Stack>
            <Button>Change</Button>
          </FlexBetween>
          <FlexBetween sx={{ mb: "1rem" }}>
            <Stack>
              <Typography variant="subtitle2" sx={{ color: "gray" }}>
                Email
              </Typography>
              <Typography variant="subtitle1">{account.email}</Typography>
            </Stack>
            <Button>Change</Button>
          </FlexBetween>
          <FlexBetween sx={{ mb: "1rem" }}>
            <Stack>
              <Typography variant="subtitle2" sx={{ color: "gray" }}>
                Password
              </Typography>
              <Typography variant="subtitle1">
                {/* {account.password
                  .toString()
                  .padStart(account.password.length, "*")} */}
                *******
              </Typography>
            </Stack>
            <Button>Change</Button>
          </FlexBetween>
          <FlexBetween sx={{ mb: "1rem" }}>
            <Stack>
              <Typography variant="subtitle2" sx={{ color: "gray" }}>
                Phone Number
              </Typography>
              <Typography variant="subtitle1">{account.phoneNumber}</Typography>
            </Stack>
            <Button>Change</Button>
          </FlexBetween>
          <FlexBetween sx={{ mb: "1rem" }}>
            <Stack>
              <Typography variant="subtitle2" sx={{ color: "gray" }}>
                Address
              </Typography>
              <Typography variant="subtitle1">{account.address}</Typography>
            </Stack>
            <Button>Change</Button>
          </FlexBetween>
          <FlexBetween sx={{ mb: "1rem" }}>
            <Stack>
              <Typography variant="subtitle2" sx={{ color: "gray" }}>
                Date of birth
              </Typography>
              <Typography variant="subtitle1">
                {account["date-of-birth"]}
              </Typography>
            </Stack>
            <Button>Change</Button>
          </FlexBetween>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Account;
