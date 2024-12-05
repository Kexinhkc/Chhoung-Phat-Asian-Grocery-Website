"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import MapIcon from "@mui/icons-material/Map";
import ContactsIcon from "@mui/icons-material/Contacts";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const menuItems = [
  {
    text: "Home",
    icon: <HomeIcon />,
    href: "#hero",
  },
  {
    text: "About Us",
    icon: <InfoIcon />,
    href: "#about",
  },
  {
    text: "Equipments Rental",
    icon: <BuildIcon />,
    href: "#equipments",
  },
  {
    text: "Map",
    icon: <MapIcon />,
    href: "#map",
  },
  {
    text: "Contact",
    icon: <ContactsIcon />,
    href: "#contact",
  },
];

export default function SideMenu() {
  //state to track toggle status
  const [open, setOpen] = useState(false);

  //function to toggle
  const toggle = (ifOpen: boolean) => {
    setOpen(ifOpen);
  };

  //function to handle clicks
  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

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

      <Drawer anchor="right" open={open} onClose={() => toggle(false)}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: 200,
            height: "100%",
          }}
          //Telling screen readers to skip this box as it is a generic container
          role="presentation"
        >
         <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            p: 2,
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
          
            <Typography variant="h6">Menu</Typography>
            
            <IconButton 
              onClick={() => toggle(false)}
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ paddingTop: 3 }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{display:'flex', flexDirection:'column', alignItems:'center', pb:2}}>
                <ListItemButton
                  onClick={() => handleClick(item.href)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    },
                  }}
                >
                  {/* <ListItemIcon sx={{ color: "white" }}>
                    {item.icon}
                  </ListItemIcon> */}
                  <ListItemText
                    primary={item.text}
                    sx={{
                      color: "white",
                      ".MuiListItemText-primary": { color: "white", fontFamily:'notoSans.style.fontFamily', fontWeight:600 }, // This ensures the primary text is white
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Menu items by iterating object */}
    </>
  );
}
