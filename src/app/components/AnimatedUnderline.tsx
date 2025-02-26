'use client'

import { motion } from 'framer-motion'
import { Typography, Box } from '@mui/material'
import { AnimatedTextProps } from '../lib/interface'
import { useTheme } from '@mui/material/styles'

const AnimatedText = ({ text, variant, lineColor, fontWeight= 400 }: AnimatedTextProps) => {
  const theme = useTheme();

  const actualLineColor = lineColor === 'primary.main' 
    ? theme.palette.primary.main 
    : lineColor;

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
    >
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        <Typography variant={variant} fontWeight={fontWeight }sx={{color:'primary.main'}}>
          {text}
        </Typography>
        <motion.div
          variants={{
            initial: { scaleX: 0 },
            hover: { scaleX: 1 }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            bottom: -4,
            left: 0,
            right: 0,
            height: 2,
            background: actualLineColor,
            transformOrigin: 'left',
            zIndex: 1
          }}
        />
      </Box>
    </motion.div>
  )
}

export default AnimatedText