import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import SideMenu from "./components/HeroBurger";
import { ScrollStyles } from "./styles/ScrollStyles";
import GoogleMap from "./components/GoogleMap";
// import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";
// import AnimatedText from "./components/AnimatedUnderline";

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
  {
    src: "/Snacks.jpg",
    alt: "Chhoung Phat Asian Grocery Snacks",
  },
  {
    src: "/Drink.jpg",
    alt: "Chhoung Phat Asian Grocery Drinks",
  },
  {
    src: "/IceCreamFridge.jpg",
    alt: "Chhoung Phat Asian Grocery Ice Cream",
  },
  {
    src: "/Pastry.jpg",
    alt: "Chhoung Phat Asian Grocery Pastry",
  },
  {
    src: "/Kimchi.png",
    alt: "Chhoung Phat Asian Grocery Kimchi",
  },
  {
    src: "/AsianCookingTools.jpg",
    alt: "Chhoung Phat Asian Grocery Tools",
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
            backgroundColor: "#f5f0ce",
            overflowY: "auto",
            px: { xs: 4, sm: 10, md: 20 },
            width: "100%",
            minHeight: "100vh",
            // boxSizing: "border-box",
          }}
        >
          <Box
            id="aboutUs"
            sx={{
              width: "100%",
              height: "100vh",
              // overflowY: "auto",
              display: "flex",
              mt: { xs: 5, md: 0 },
              alignItems: { md: "center" },
            }}
          >
            <Box
              id="aboutBox"
              sx={{
                display: "flex",
                gap: {xs:8, xl:12},
                alignItems: "center",
                flexDirection: { xs: "column", smalllg: "row" },
                backgroundColor: "#f5f0ce",
              }}
            >
              <Box
                id="leftSide"
                sx={{
                  display: { xs: "none", smalllg: "block" },
                  width: { xs: "100%", smalllg: "50%" },
                  height: { xs: "250px", smalllg: "700px" },
                  position: "relative",
                }}
              >
                <Image
                  src={"/Store_Front.jpg"}
                  alt="Chhoung Phat Asian Grocery Store Front"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box
                id="rightSide"
                sx={{
                  width: { xs: "100%", smalllg: "50%" },
                }}
              >
                <Box
                  id="textBox"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      display: "flex",
                      color: "primary.main",
                      pb: { xs: 0.3, md: 0.5 },
                      pt: { xs: 0.5, sm: 4, md: 0 },

                      // pb: 3,
                    }}
                  >
                    Welcome to
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      display: "flex",
                      color: "primary.main",
                      pb: { xs: 3, md: 2, smalllg: 6 },
                    }}
                  >
                    Chhoung Phat Asian Grocery
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { xs: 2.5, md: 2, lg:3.5 },
                      // width: { xs: "100%", md: "100%" },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: "primary.main",
                        width: "100%",
                      }}
                    >
                      Chhoung Phat Asian Grocery is a family owned and operated
                      business that has been serving the Parafield Garden community for over 15
                      years. We are committed to providing the best quality
                      products to our customers.
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: "primary.main",
                        width: "100%",
                        pb: { xs: 1, md: 2 },
                      }}
                    >
                      We have everything you need to make your favourite Asian
                      dishes, plus convenient ready-to-eat options for those
                      busy days. As your ultimate one-stop Asian grocery
                      destination, we&apos;re here to bring authentic Asian flavours
                      to your kitchen.
                    </Typography>

                    <Box
                      id="BottomImage"
                      sx={{
                        display: { xs: "block", smalllg: "none" },
                        width: { xs: "100%" },
                        height: { xs: "250px", sm: "350px", md: "450px" },
                        position: "relative",
                      }}
                    >
                      <Image
                        src={"/Store_Front.jpg"}
                        alt="Chhoung Phat Asian Grocery Store Front"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "center", smalllg: "start" },
                        mt: { xs: 2, sm: 7, md: 2, smalllg: 7, xxl:12 },
                      }}
                    >
                    
                      
                      {/* <AnimatedText
                         text = "What We Offer"
                         variant="body2"
                         lineColor = "primary.main"
                         fontWeight={650}
                         /> */}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            id="photoGallery"
            sx={{
              width: "100%",
              minheight: "100vh",
              my: { xs: 0, md: 1 },
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "center",
              mb: { xs: 8, md: 5 },
            }}
          >
            <Box sx={{ px: { xs: 0, md: 15 }, mt: { xs: 6 } }}>
              <Typography variant="h4" sx={{ color: "primary.main" }}>
                We offer an extensive range of fresh produce, meats, seafood and
                snacks that you won&apos;t easily find in your local supermarkets.
              </Typography>
            </Box>

            <Box id="gridBox" sx={{ width: { xs: "100%", md: "88%" } }}>
              <Grid
                container
                rowSpacing={{ xs: 0.2, md: 1 }}
                columnSpacing={{ xs: 0.2, md: 1 }}
              >
                {groceryImages.map((image, index) => (
                  <Grid key={index} size={{ xs: 6, md: 3 }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1/1",
                        overflow: "hidden",
                        // mb:0.5
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
        </Box>

        <Box
          className="scroll-section"
          id="equipments"
          sx={{
            pb: 5,
            pt: { xs: 5, md:7, smalllg: 8},
            height: "100vh",
            overflowY: "auto",
            backgroundColor: "#fffce4",
            px: { xs: 4, sm: 10, md: 20 },
          }}
        >
          <Typography variant="h4" sx={{ px: {xs:0, smalllg:7}, pb: { md: 6 } }}>
            Make your special occasions more convenient with our equipment
            rental service. All items are thoroughly sanitised between rentals
            and available at competitive daily rates.
          </Typography>

          <Box
            sx={{
              // mx: 4,
              justifyContent: "center",
              alignItems: {xs:"center", md:"start"},
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 5, smalllg: 8 },
              pt: { xs: 3, sm:4, md: 0 },
            }}
          >
            {equipmentImages.map((image, index) => (
              <Box
                id="boxInsideMap"
                key={index}
                sx={{
                  border: "1px solid",
                  borderColor: "white",
                  py: 3,
                  pt: {xs:2,smalllg:4},
                  pb: 12,
                  backgroundColor: "white",
                  borderRadius: 10,
                  width: { xs: "100%", sm:'85%', smalllg: "45%" },
                  boxShadow: 6,
                  position: "relative",
                  // display: "flex",
                  minHeight: {xs: '500px', md:'556px',smalllg: '592px',lg:'597px'},
                  
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5, position:"relative", height:{xs:'250px',smalllg:'300px'} }}>
                  <Image
                    src={image.src}
                    fill
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
                  variant="body2"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mx: 4,
                    textAlign: "center",
                    fontWeight: "500",
                    color: "primary.main",
                    pt:0.5,
                  }}
                >
                  {image.description}
                </Typography>

                <Box
                  id="buttonBox"
                  sx={{
                    bottom: 20,
                    width: "100%",
                    textAlign: "center",
                    position: "absolute",
                  }}
                >
                  <Button
                    href={image.link}
                    variant="outlined"
                    disableRipple
                    sx={{
                      borderWidth: "2px",
                      justifyContent: "center",
                      mt: 3,
                      px: 3,
                      py: 1,
                      color: "primary.main",
                      borderRadius: 10,
                      fontWeight: "600",
                      width: { xs: "auto", sm: "auto" },
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
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
            pb: 5,
            pt: 7,
            px: { xs: 4, lg: 20 },
            height: "100vh",
            backgroundColor: "#f5f0ce",
            overflowY: "auto",
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
            <Typography variant="h3" sx={{ pb: 1 }} color="primary.main">
              Contact Us
            </Typography>

            <Typography variant="body1" sx={{ color: "primary.main" }}>
              Explore your one-stop Asian grocery destination with an extensive
              selection of pantry essentials, premium fresh meats, seafood, and
              handpicked produce, all under one roof. Visit us today and
              experience the Chhoung Phat difference.
            </Typography>
          </Box>

          <ContactInfo />

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
          ></Box>

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

          {/* <Footer /> */}
        </Box>
       
      </Box>
      
    </>
  );
}
