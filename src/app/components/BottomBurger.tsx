"use client";
import React, { useEffect } from "react";
import { Box, Fab } from "@mui/material";
import SideMenu from "./SideMenu";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";

export default function BottomBurger() {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  //function to toggle
  const toggle = (ifOpen: boolean) => {
    setOpen(ifOpen);
  };

  useEffect(() => {
    console.log("useEffect executed");
    const container = document.querySelector(".scroll-container");


    const handleScroll = () => {
      const currrentYPosition = container?.scrollTop || 0;
      
      const heroSectionHeight = window.innerHeight;
      // console.log("Scroll position:", currrentYPosition);
      // console.log("window inner height:", heroSectionHeight);
      const isBelowHero = currrentYPosition >= heroSectionHeight; // curr postion more than height of hero section -> yes then it's below hero section

      setShow(isBelowHero); // if
    };

    handleScroll();

    container?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
     sx={{
      
        display: show ? 'block' : 'none',  // Explicit display control
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 1200,
    
    }}
    >
        <Fab
          onClick={() => toggle(true)}
          disableRipple
          size="small"
          sx={{
            backgroundColor: "white",
      
          }}
        >
          {open ? <Close /> : <Menu />}
        </Fab>
      
     
      {open && <SideMenu open={open} toggle={toggle} />}
    </Box> 
    </>
  );
}
