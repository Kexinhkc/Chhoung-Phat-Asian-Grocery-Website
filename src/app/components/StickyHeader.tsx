'use client';
import React, {useState, useEffect} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    useScrollTrigger,
    Slide,
  } from '@mui/material';
  import Menu from '@mui/icons-material/Menu';
import SideMenu from './SideMenu';

//Function to hide the header on scroll
function HideOnScroll({ children }: { children: React.ReactElement }) {
  
  const [show, setShow] = React.useState(false);
  const lastScroll = React.useRef(0); // To track previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY; //get curr position
      const isScrollingUp = currentScroll < lastScroll.current; //if curr position less last scroll position -> yes then it's scrolling up
      const isBelowHero = currentScroll > window.innerHeight; // curr postion more than height of hero section -> yes then it's below hero section
      
      setShow(isScrollingUp && isBelowHero);// if 
      lastScroll.current = currentScroll; // Save current position for next comparison
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Slide appear={false} direction="down" in={show}>
      {children}
    </Slide>
  );

}
  

export default function StickyHeader() {

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          color="default"
          elevation={2}
          sx={{
            backgroundColor: 'primary.main',
            // borderBottom: elevated ? 'none' : '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar 
              disableGutters
              sx={{
                minHeight: { xs: '54px', md: '70px' },
                justifyContent: 'space-between',
              }}
            >
              
              <Typography
                variant="h6"
                component="div"
                sx={{ 
                  textAlign: 'center',
                  fontWeight: 600,
                  color: 'white',
                  fontFamily:'leagueSpartan.style.fontFamily',
                }}
              >
                CHHOUNG PHAT
              </Typography>

              <SideMenu />
                            
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      
    </>
  );
};
