"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  IconButton,
} from "@mui/material";
import SideMenu from "./SideMenu";

export default function HeroBurger() {
  //state to track toggle status
  const [open, setOpen] = useState(false);

  //function to toggle
  const toggle = (ifOpen: boolean) => {
    setOpen(ifOpen);
  };

;

  return (
    <>
      {/* Put icon inside IconButton, Call toggle function when clicked */}

      <IconButton
        onClick={() => toggle(true)}
        sx={{
          color: "white",
          position: "absolute",
          right: 8,
          top: 6,
          zIndex: 1000,
        }}
      >
        <MenuIcon sx={{ fontSize: "32px" }} />
      </IconButton>

      {/* Drawer comp, call toggle func when close */}

      <SideMenu open={open} toggle={toggle} />

      {/* Menu items by iterating object */}
    </>
  );
}
