'use client';

import { createTheme } from '@mui/material/styles';
import { League_Spartan, Noto_Sans} from 'next/font/google';


// Font configurations
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500','600', '700'],
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500','600', '700'],
});

// const lexend = Lexend({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['400', '500', '700'],
// });

// Theme configuration
const theme = createTheme({
  typography: {
    h1: {
      fontFamily: leagueSpartan.style.fontFamily,
      fontWeight: 700,
      color: '#fff',
      fontSize: '4.5rem',
    },
    h2: {
      fontFamily: leagueSpartan.style.fontFamily,
      fontWeight: 600,
      color: '#fff',
      fontSize: '1.875rem',
    },
    h3: { fontFamily: leagueSpartan.style.fontFamily,
      fontWeight: 600,
      color: '#762620',
      fontSize: '1.75rem',},

    h4: { fontFamily: leagueSpartan.style.fontFamily,
      fontWeight: 550,
      color: '#762620',
      fontSize: '1.5rem',},

    body1: {
      fontFamily: notoSans.style.fontFamily,
      fontWeight: 400,
      color: '#000',
      fontSize: '1rem',
    }
  },
  palette: {
    primary: {
      main: '#762620',
      // Generated lighter/darker shades
      light: '#9e332c',
      dark: '#521a16',
    },
  },
});

export default theme;
