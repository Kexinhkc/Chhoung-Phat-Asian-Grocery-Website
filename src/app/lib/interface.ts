import { SvgIconComponent } from "@mui/icons-material";
import { TypographyProps } from "@mui/material/Typography";


export interface Equipment { 
   
        name: string;
        image: string;
        brand: string;
        dimension: string;
        power: string;
        price: number;
        feature: string[];
  
   
}

export interface EquipmentProps {
    equipment: Equipment;
}

export interface SideMenuProps {
    open: boolean;
    toggle: (isOpen: boolean) => void;  // Function that takes a boolean and returns void
  }


export interface CustomIconProps {
    icon: SvgIconComponent;
  }

export interface AnimatedTextProps {
    text: string;
    variant: TypographyProps['variant'];
    lineColor?: string;
    fontWeight?: number | string; 
  }
  