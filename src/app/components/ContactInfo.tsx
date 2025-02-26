"use client";
import { Box, Typography } from "@mui/material";
import Icons from "./Icons";
import OpenIcon from "@mui/icons-material/Schedule";
import Grid from "@mui/material/Grid2";
import StoreIcon from "@mui/icons-material/Store";
import PhoneIcon from "@mui/icons-material/Phone";

export default function ContactInfo() {
  return (
    <>
      {/* 1199 - 1354px */}
      {/* lg:grid:Mon-sat grid:9am-7pm size12*/}
      {/* xl:rid:Mon-sat grid:9am-7pm size6 */}
      <Grid
        container
        spacing={4}
        sx={{
          px: { xs: 3, md: 0 }, // Add some spacing between map and contact info on desktop
          ml: { md: 0 }, // Add some spacing between map and contact info on desktop
          pt: { xs: 5, md: 3 }, // Add top padding on mobile
          pb: { xs: 2, md: 4 },
        }}
      >
        <Grid size={{ xs: 12, smalllg: 6, lg: 3.6 }}>
          <Box sx={{ display: "flex", gap: 2.5, alignItems: "center" }}>
            <Icons icon={OpenIcon} />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", gap: 2.5 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: "primary.main" }}>
                    Mon - Sat
                  </Typography>
                  <Typography variant="body2" sx={{ color: "primary.main" }}>
                    Sun
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ color: "primary.main" }}>
                    9 am - 7 pm
                  </Typography>
                  <Typography variant="body2" sx={{ color: "primary.main" }}>
                    9 am - 6 pm
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, smalllg: 6, lg: 6 }}>
          <Box
            sx={{
              display: "flex",
              gap: 2.5,
              alignItems: "center",
              // height: "24px",
            }}
          >
            {/* Icon remains in fixed position */}
            <Icons icon={StoreIcon} />
            {/* Wrapper for text - handles vertical alignment independently */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" sx={{ color: "primary.main" }}>
                Shop 18/237 Martins Rd, Parafield Gardens SA 5107
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, smalllg: 6, lg: 2.4 }}>
          <Box
          id='firstBox'
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", lg: "flex-end" },
            }}
          >
            <Box id='secondBox' sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Icons icon={PhoneIcon} />
              <Typography
                id="phoneNum"
                variant="body2"
                sx={{ color: "primary.main", width: "100%" }}
              >
                (08) 8182 3555
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
