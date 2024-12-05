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
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
      <Paper  elevation={0} id='paperele'
      sx={{ 
        borderRadius: '30px',
        overflow: 'hidden',
        backgroundColor: 'primary.main',
      }}>
       
        
      
      <Button
        fullWidth
        disableRipple
        onClick={() => setExpanded(!expanded)}
        endIcon={expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: "primary.main",
          borderRadius: "30px",
          color: "white",
         
          py: 2,
          "&:hover": {
            backgroundColor: "primary.main",
          },
        }}
      >
        CONTACT US
      </Button>

      <Collapse in={expanded}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            p: 3,
            // borderLeft: 1,
            //   borderRight: 1,
            //   borderBottom: 1,
            borderTop:expanded ? 1 : 0,
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px",
            borderColor: "white",
            // border: "1px solid",
          }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            Call us at (08) 8182 3555 for more information
          </Typography>
        </Box>
      </Collapse>

      {/* <Box sx={{ TextAlign: "center",  }}>
        <Button
          disableRipple
          onClick={() => setShowPhoneNumber(!showPhoneNumber)}
          sx={{
            mt: 2,
            mb: 3,
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: 20,
            px: 3,
            py: 1,
            width: "100%",
          }}
        >
          Contact Us
        </Button>
      </Box> */}

      {/* </Box> */}
      </Paper>
      </Box>
    </>
  );
}
