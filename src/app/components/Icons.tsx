'use client';
import {Box} from "@mui/material";
import { useTheme } from '@mui/material/styles'
import {CustomIconProps} from '../lib/interface'

export default function Icons({ icon }: CustomIconProps) {

    const theme = useTheme(); 
    const Icon = icon;

    return (
        <>
         <Box
                  id="circleBackground"
                  sx={{
                    display: "flex",
                    backgroundColor: "primary.main",
                    border: "1px solid",
                    minWidth: "55px",  
                    minHeight: "55px",
                    [theme.breakpoints.up('md')]: {
                        minWidth: "70px", // Add this to prevent squishing
                        minHeight: "70px" // Add this to prevent squishing
                    },
                    [theme.breakpoints.up('xl')]: {
                        minWidth: "75px", // Add this to prevent squishing
                        minHeight: "75px" // Add this to prevent squishing
                    },
                    borderRadius: "0%",
                    borderColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 0,
                  }}
                >
                  <Icon
                    sx={{
                      color: "white",
                      fontSize: { xs: "30px", md: "35px" },
                      margin: 0,
                    }}
                  />
                </Box>
        </>
    );
}