import { GlobalStyles } from "@mui/material";

export const ScrollStyles = (
  <GlobalStyles
    styles={{
      html: {
        scrollBehavior: "smooth",
      },
      ".scroll-container": {
        height: "100vh",
        //show scroll bar and allow vertical scrolling when content height > 100%vh
        overflowY: "scroll",
        //create a "ruler with notches" using different sections. y means snap points work on vertical axis, mandatory means always snap to the nearest section
        // scrollSnapType:'y mandatory',
        scrollSnapType: "y mandatory", // Change from 'mandatory' to 'proximity'
      },
      ".scroll-section": {
        height: "100vh",
        //snap points are at the start of each section
        scrollSnapAlign: "start",
        //snaps to each section as opposed to through multiple sections
        scrollSnapStop: 'always', 
        //each section stays visible at the top until the next section pushes it away
        // position: "sticky",
        //top of the section is always at the top of the viewport
        top: 0,
      },
    }}
  />
);
