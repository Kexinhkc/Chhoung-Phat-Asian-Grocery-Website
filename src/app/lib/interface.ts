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