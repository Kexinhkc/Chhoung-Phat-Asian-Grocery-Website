import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import BottomBurger from "./components/BottomBurger";

export const metadata: Metadata = {
  title: "Chhoung Phat Asian Grocery",
  description: "Asian grocery store based in Adelaide, South Australia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: '100%', margin: 0, padding: 0 }}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BottomBurger />
            {children}
            
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
