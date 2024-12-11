import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import StoreIcon from "@mui/icons-material/Storefront";
import OpenIcon from "@mui/icons-material/Schedule";
import PhoneIcon from "@mui/icons-material/LocalPhone";
import SideMenu from "./components/HeroBurger";
import { ScrollStyles } from "./styles/ScrollStyles";
import GoogleMap from "./components/GoogleMap";

const groceryImages = [
  {
    src: "/Fish.png",
    alt: "Chhoung Phat Asian Grocery Fish",
  },
  {
    src: "/Meat.png",
    alt: "Chhoung Phat Asian Grocery Meat",
  },
  {
    src: "/Ramen.png",
    alt: "Chhoung Phat Asian Grocery Ramen",
  },
  {
    src: "/Veggies.png",
    alt: "Chhoung Phat Asian Grocery Vegetables",
  },
  {
    src: "/Fruit.png",
    alt: "Chhoung Phat Asian Grocery Fruit",
  },
  {
    src: "/Sauces.png",
    alt: "Chhoung Phat Asian Grocery Sauces",
  },
];

const equipmentImages = [
  {
    src: "/LambSpit.png",
    alt: "Chhoung Phat Asian Grocery Lamb Spit Rotisserie",
    name: "Lamb Spit Rotisserie",
    description: "Gaganis Souvla Black Steel Cypriot Style BBQ",
    link: "/lamb-spit",
  },
  {
    src: "/FoodWarmer.jpg",
    alt: "Chhoung Phat Asian Grocery Food Warmer",
    name: "Food Warmer",
    description: "Vevor Commercial Food Warmer",
    link: "/food-warmer",
  },
];
export default function Page() {
  return (
    <>
      {ScrollStyles}
      <Box className="scroll-container" sx={{ width: "100%" }}>
        <Box
          className="scroll-section"
          id="hero"
          sx={{
            overflow: "hidden",
            width: "100%",
            height: "100vh",
            position: "relative", // Added this
            boxSizing: "border-box", // Added this
          }}
        >
          <Image
            src={"/ChhoungPhat_Banner.png"}
            alt="Chhoung Phat Asian Grocery Banner"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
            sizes="100vw"
            quality={100}
          />
          <SideMenu />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              transform: "translateY(-80px)",
            }}
          >
            <Image
              src="/Logo.svg"
              priority
              width={150}
              height={150}
              alt="Chhoung Phat Asian Grocery Logo"
            />
            <Box
              sx={{
                mt: -2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h1">CHHOUNG</Typography>
              <Typography variant="h1" sx={{ mt: -2 }}>
                PHAT
              </Typography>
              <Typography variant="h3" sx={{ mt: -1, color: "white" }}>
                Asian Grocery
              </Typography>
            </Box>
          </Box>

          {/* open hours */}
          {/* phone num */}
        </Box>

        <Box
          className="scroll-section"
          id="about"
          sx={{
            width: "100%",
            py: { xs: 6, lg: 8 },
            backgroundColor: "primary.main",
            height: "100vh",
            px: { xs: 4, lg: 20 },
            // overflowY: "auto",
          }}
        >
          <Box id="textbox" sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h3"
              sx={{ display: "flex", justifyContent: "center", color: "#fff" }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#fff",
                mt: 2,
                mb: { xs: 4, lg: 5 },
              }}
            >
              Chhoung Phat Asian Grocery is a family owned and operated business
              that has been serving the community for over 20 years. We are
              committed to providing the best quality products to our customers.
            </Typography>
          </Box>

          <Box id="gridbox" sx={{ mb: 2 }}>
            <Grid container spacing={0.5}>
              {groceryImages.map((image, index) => (
                <Grid key={index} size={{ xs: 6, md: 3 }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1/1",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={image.src}
                      fill
                      alt={image.alt}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box
          className="scroll-section"
          id="equipments"
          sx={{
            py: 5,
            height: "100vh",
            overflowY: "auto",
            backgroundColor: "white",
            px: { xs: 4, lg: 20 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Equipment Rental
          </Typography>

          <Box
            sx={{
              mx: 4,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {equipmentImages.map((image, index) => (
              <Box id="boxInsideMap" key={index}>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                  <Image
                    src={image.src}
                    width={300}
                    height={300}
                    alt={image.alt}
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5,
                    color: "primary.main",
                  }}
                >
                  {image.name}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mx: 4,
                    textAlign: "center",
                    fontWeight: "500",
                    color: "primary.main",
                  }}
                >
                  {image.description}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    href={image.link}
                    variant="outlined"
                    disableRipple
                    sx={{
                      display: "flex",
                      borderWidth: "2px",
                      justifyContent: "center",
                      mt: 4,
                      px: 3,
                      py: 1,
                      color: "primary.main",
                      borderRadius: 10,
                      fontWeight: "600",
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          className="scroll-section"
          id="contact"
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 5,
            px: { xs: 4, lg: 20 },
            height: "100vh",
            backgroundColor: "primary.main",
          }}
        >
          <Box
            id="contactTitles"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
              pb: { md: 4 },
            }}
          >
            <Typography variant="h3" sx={{ pb: 1 }} color="white">
              Contact Us
            </Typography>

            <Typography variant="body1" sx={{ color: "white" }}>
              Explore your one-stop Asian grocery destination with an extensive
              selection of pantry essentials, premium fresh meats, seafood, and
              handpicked produce, all under one roof. Visit us today and
              experience the Chhoung Phat difference!
            </Typography>
          </Box>
          {/* Call to action sentence*/}
          {/* background under icon */}

          {/* Map and text side by side */}

            <Grid container spacing={1} sx={{ px: { md: 6 }, // Add some spacing between map and contact info on desktop
              pt: { xs: 2, md: 4 }, // Add top padding on mobile
              pb: { xs: 2, md: 2 },}}>
              <Grid size={{ xs: 6, md:4 }}>
                <Box sx={{ display: "flex", alignItems: "center", }}>
                  <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', 
              
                  }}>
                     <Box id='circleBackground' sx={{ backgroundColor:'white', border:'1px solid', borderRadius:10, borderColor:'white', justifyContent:'center', alignItems:'center', }}> 
                    <StoreIcon sx={{ color: "primary.main", fontSize: { xs: "30px", md: "35px",margin:0 } }}
                />
                </Box>
                  </Box>
                 
               
                <Typography variant="body2" sx={{ color: "#fff", mx: 3 }}>
                  Shop 18/237 Martins Rd, Parafield Gardens SA 5107
                </Typography>
              </Box>
              </Grid>

              <Grid size={{ xs: 6, md: 4 }}>
                <Box sx={{ display: "flex" }}>
                <OpenIcon
                  sx={{ color: "#fff", fontSize: { xs: "30px", md: "35px" } }}
                />
                <Box sx={{ display: "flex",  }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#fff", mx: 3, mb: 1 }}
                  >
                    Mon - Sat <br /> 9 am - 7 pm 
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#fff", mx: 3 }}>
                    Sun <br /> 9 am - 6 pm
                  </Typography>
                </Box>
              </Box>
              </Grid>

              <Grid size={{ xs: 6, md: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                <PhoneIcon
                  sx={{ color: "#fff", fontSize: { xs: "30px", md: "35px" } }}
                />
                <Typography variant="body2" sx={{ color: "#fff", mx: 3 }}>
                  (08) 8182 3555
                </Typography>
              </Box>
              </Grid>
            </Grid>

          <Box
            id="contactInfo"
            sx={{
              display: "flex",
              gap: 6,
              pl: { md: 6 }, // Add some spacing between map and contact info on desktop
              pt: { xs: 2, md: 0 }, // Add top padding on mobile
              pb: { xs: 2, md: 4 },
              // Add bottom padding on mobile
            }}
          >
           

            

           
          </Box>

          <Box
            id="mapContainer"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              pr: { md: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                position: "relative",
                // asp ectRatio: "16/9",
              }}
            >
              <GoogleMap />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
