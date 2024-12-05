import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import Grid from "@mui/material/Grid2";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import ShowPhoneNumber from "@/app/components/ShowPhoneNumber";
type Props = Promise<{
  equipment: string
}>


const equipmentList = [
  {
    Name: "Lamb Spit",
    Brand: "Gaganis Souvla",
    Image: "/lambspit.png",
    Description: "Cypriot Style BBQ",
    Dimension: "1000 x 500 x 500",
    Power: "240V",
    Price: "$1500/day",
    Feature: ["Stainless Steel", "Easy to Clean", "Portable"],
  },
  {
    Name: "Food Warmer",
    Brand: "Vevor",
    Image: "/foodwarmer.jpg",
    Description: "Vevor Commercial Food Warmer",
    Dimension: "500 x 500 x 500",
    Power: "240V",
    Price: "$500/day",
    Feature: ["Stainless Steel", "Easy to Clean", "Portable"],
  },
];

// const equipmentHeadings = ["Brand", "Dimensions", "Power", "Price", "Feature"];

export default async function Equipment({ params }: {params: Props}) {
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
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          mx: 4,
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
            {item.Name}
          </Typography>
        </Box>

        <Box sx={{ position: "relative", my: 2 }}>
          <Image
            src={item.Image}
            width={300}
            height={300}
            alt={`image of ${item.Description}`}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {Object.entries(item).map(([key, value]) => {
          if (key !== "Feature" && key !== "Image" && key !== "Name") {
            return (
              <Box
                key={key}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <Typography variant="h4">{key}</Typography>
                <Typography variant="body1" sx={{ color: "primary.main" }}>
                  {value}
                </Typography>
              </Box>
            );
          } else {
            return null;
          }
        })}

        <Typography variant="h4" sx={{ mb: 1 }}>
          Feature
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {item.Feature.map((feature) => (
            // console.log(feature),
            <Grid size={6} key={feature}>
              <Typography
                variant="body1"
                sx={{
                  color: "primary.main",
                  py: 1,
                  px: 1,
                  display: "flex",
                  justifyContent: "center",
                  border: "2px solid",
                  borderRadius: 10,
                  borderColor: "primary.main",
                }}
              >
                {feature}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <ShowPhoneNumber />
      </Box>
    </>
  );
}
