// components/GoogleMap.tsx
import { Box } from '@mui/material';

const GoogleMap = () => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  
  return (
    <Box
      component="iframe"
      sx={{
        width: '100%',
        height: {xs:'250px',lg:'350px',xl:'400px',xxl:'600px'},
        border: 0,
        borderRadius: 1
      }}
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:ChIJuaGowVS3sGoRrY0xs5iYCc4&zoom=15`}
      allowFullScreen
      loading="lazy"
    />
  );
};

export default GoogleMap;