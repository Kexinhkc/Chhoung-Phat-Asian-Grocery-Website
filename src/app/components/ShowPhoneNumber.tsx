'use client';
import { useState } from "react";
import { Box, Button, Typography, Collapse } from "@mui/material";
import PhoneIcon from "@mui/icons-material/LocalPhone";

export default function ShowPhoneNumber() {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    return (
        <>
        <Box sx={{TextAlign: 'center'}}>
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
      </Box>
        </>
    )
}