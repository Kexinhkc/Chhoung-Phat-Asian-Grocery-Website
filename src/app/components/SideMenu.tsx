"use client";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import ContactsIcon from "@mui/icons-material/Contacts";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import { SideMenuProps } from "@/app/lib/interface";

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
    text: "Contact",
    icon: <ContactsIcon />,
    href: "#contact",
  },
];

export default function SideMenu({ open, toggle }: SideMenuProps) {

  //function to handle clicks on menu items
  const handleClick = (href: string) => {
    // console.log(href);
    const element = document.querySelector(href);
    if (element) {
        // Have to use setTimeout to ensure the element is rendered after the menu is closed(toggle(false))
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);}
    toggle(false);
  };
  
  return (
    <>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <Typography variant="h6">Menu</Typography>

            <IconButton onClick={() => toggle(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ paddingTop: 3 }}>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  pb: 2,
                }}
              >
                <ListItemButton
                  onClick={() => handleClick(item.href)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    sx={{
                      color: "white",
                      ".MuiListItemText-primary": {
                        color: "white",
                        fontFamily: "notoSans.style.fontFamily",
                        fontWeight: 600,
                      }, // This ensures the primary text is white
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
