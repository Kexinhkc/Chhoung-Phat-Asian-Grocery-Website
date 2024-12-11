"use client";
import { useState } from "react";
import { Box, Button, Collapse, Typography, Paper } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/LocalPhone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ShowPhoneNumber() {
  const [expanded, setExpanded] = useState(false);

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
