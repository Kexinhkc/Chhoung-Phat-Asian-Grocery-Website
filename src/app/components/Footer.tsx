import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "primary.main", // Or any color that matches your design
          mt: "auto", // This pushes the footer to the bottom of its container
          py: 1,
          px: { xs: 2, md: 2 },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Chhoung Phat Asian Grocery. All rights
          reserved.
        </Typography>
      </Box>
    </>
  );
}
