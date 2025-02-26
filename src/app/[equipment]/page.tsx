import { Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import Grid from "@mui/material/Grid2";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import ShowPhoneNumber from "@/app/components/ShowPhoneNumber";
import Shield from "@mui/icons-material/ShieldOutlined";
import EasyClean from "@mui/icons-material/AutoAwesomeOutlined";
import Portable from "@mui/icons-material/WorkOutlineOutlined";

type Props = Promise<{
  equipment: string;
}>;

const equipmentList = [
  {
    Name: "Lamb Spit",
    Brand: "Gaganis Souvla",
    Image: "/lambspit.png",
    Description: "Cypriot Style BBQ",
    Dimension: "1000 x 500 x 500",
    Power: "240V",
    Price: "$1500/day",
    Feature: [
      {
        text: "Stainless Steel",
        icon: <Shield />,
      },
      {
        text: "Easy to Clean",
        icon: <EasyClean />,
      },
      {
        text: "Portable",
        icon: <Portable />,
      },
    ],
  },
  {
    Name: "Food Warmer",
    Brand: "Vevor",
    Image: "/foodwarmer.jpg",
    Description: "Vevor Commercial Food Warmer",
    Dimension: "500 x 500 x 500",
    Power: "240V",
    Price: "$500/day",
    Feature: [
      {
        text: "Stainless Steel",
        icon: <Shield />,
      },
      {
        text: "Easy to Clean",
        icon: <EasyClean />,
      },
      {
        text: "Portable",
        icon: <Portable />,
      },
    ],
  },
];

// const equipmentHeadings = ["Brand", "Dimensions", "Power", "Price", "Feature"];

export default async function Equipment({ params }: { params: Props }) {
  const { equipment } = await params;

  const item = equipmentList.find(
    (item) => item.Name.toLowerCase().replace(/\s+/g, "-") === equipment
  );

  // If equipment isn't found, show 404
  if (!item) {
    notFound();
  }

  return (
    <>
      <Box
        id="outerbox"
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          pt: 3,
          px: { xs: 4, sm:10, md:8, smalllg: 20 },
          pb: 5,
          backgroundColor: "#f5f0ce",
          minHeight: "100vh",
        }}
      >
        <Box
          id="topbox"
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <ArrowBack
              sx={{
                color: "primary.main",
                fontSize: "20px",
                position: "absolute",
                left: -5,
                top: "50%",
                transform: "translateY(-60%)",
              }}
            />
          </Link>

          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              width: "100%",
            }}
          >
            {item.Description}
          </Typography>
        </Box>

        <Box
          id="outerContentBox"
          sx={{
            height: { md: "95vh" },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            
          }}
        >
          <Box
            id="contentBox"
            sx={{
              display: "flex",
              gap: { md:5, smalllg:12, lg:8 },
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              alignItems: "center",
              
            }}
          >
            <Box
              id="imageBox"
              sx={{
                position: "relative",
                my: { xs: 6, md: 0 },
                pb: {xs:2, md:0},
                width: { xs: "100%", md:'50%', smalllg: "50%" },
                height: { xs:'300px', sm: "400px", md: "570px", smalllg:'660px', xxl: "800px" },
                backgroundColor: "white",       
                borderRadius:2,
                border: "1px solid",
                borderColor: "grey.300",
                px:5,

              }}
            >
              <Image
                src={item.Image}
                fill
                alt={`image of ${item.Description}`}
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Box id="textBox" sx={{width: {sm:'100%', md:'50%' } }}>
              <Grid
                id="featureGrid"
                container
                spacing={4}
                sx={{
                  // Match image width
                  mx: "auto", // Center horizontally
                }}
              >
                {Object.entries(item).map(([key, value]) => {
                  if (
                    key !== "Feature" &&
                    key !== "Image" &&
                    key !== "Name" &&
                    key !== "Description"
                  ) {
                    return (
                      <>
                        <Grid size={6} key={key}>
                          <Typography variant="h4" sx={{textAlign:'center'}}>{key}</Typography>
                        </Grid>

                        {typeof value === "string" && (
                          <Grid size={6}>
                            <Typography
                              variant="body1"
                              sx={{ color: "primary.main", textAlign:'start' }}
                            >
                              {value}
                            </Typography>
                          </Grid>
                        )}
                      </>
                    );
                  } else {
                    return null;
                  }
                })}
              </Grid>

              <Grid
                id="featureGrid"
                container
                spacing={3}
                sx={{
                  // Match image width
                  mx: "auto",
                  pt: 4,
                  pb:{xs:8, lg:6, xl:12},
                }}
              >
                <Grid size={6}>
                  <Typography variant="h4" sx={{ mb: 2, textAlign:'center' }}>
                    Features
                  </Typography>
                </Grid>

                <Grid size={6}>
                  <Grid container spacing={2} sx={{ }}>
                    {item.Feature.map((feature) => (
                      // console.log(feature),
                      <Grid size={12} key={feature.text} sx={{}}>
                        <Stack
                        id="featureStack"
                          key={feature.text}
                          direction="row"
                          spacing={{ xs: 0.5, md:1.5, smalllg: 1 }}
                          alignItems="center"
                          justifyContent="start"
                          color="primary.main"
                        >
                          {feature.icon}
                          <Typography
                            variant="body1"
                            sx={{ color: "primary.main" }}
                          >
                            {feature.text}
                          </Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>

              <Box id="positionButtonBox" sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                <ShowPhoneNumber />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
