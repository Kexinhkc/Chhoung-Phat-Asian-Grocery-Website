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
      
    },
    h2: {
      fontFamily: leagueSpartan.style.fontFamily,
      fontWeight: 500,
      color: '#fff',
    },
    h3: { fontFamily: leagueSpartan.style.fontFamily,
      fontWeight: 600,
      color: '#762620',
      
    },

    h4: { fontFamily: leagueSpartan.style.fontFamily,
      fontWeight: 550,
      color: '#762620',
      fontSize: '1.5rem',},

    body1: {
      fontFamily: notoSans.style.fontFamily,
      fontWeight: 400,
      color: '#000',
      
    },
    body2: {
      fontFamily: notoSans.style.fontFamily,
      fontWeight: 400,
      color: '#000',
      
    },
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

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.up('lg')]: {
    fontSize: '4.75rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '5.5rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '4.5rem',
  },
  [theme.breakpoints.only('xs')]: {
    fontSize: '4.5rem',
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.only('xs')]: {
    fontSize: '2.5rem',
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.only('xs')]: {
    fontSize: '1.75rem',
  },
};

theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.only('xs')]: {
    fontSize: '1rem',
  },
};

theme.typography.body2 = {
  ...theme.typography.body2,
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.only('xs')]: {
    fontSize: '0.875rem',
  },
};
export default theme;
