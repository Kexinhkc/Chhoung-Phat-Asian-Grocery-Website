"use client";
import { Box, Button } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/LocalPhone";


export default function ShowPhoneNumber() {

  return (
    <>
      {/* <Box sx={{mb:5}}> */}
      <Box sx={{ width: "100%", maxWidth: "md" }}>
        <Button
          component="a"
          href="tel:0881823555"
          fullWidth
          disableRipple
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "30px",
            color: "white",

            py: 2,
            "&:hover": {
              backgroundColor: "#913434",
            },
          }}
        >
          CONTACT US
        </Button>
      </Box>
    </>
  );
}
