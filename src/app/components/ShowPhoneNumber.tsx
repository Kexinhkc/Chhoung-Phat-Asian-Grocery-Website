"use client";
import { Box, Button } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/LocalPhone";


export default function ShowPhoneNumber() {

  return (
    <>
      {/* <Box sx={{mb:5}}> */}
      <Box id="buttonBox" sx={{ width: {xs:"80%",sm:"80%",md:"80%",lg:"75%"}, maxWidth: "md", pt:2 }}>
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
