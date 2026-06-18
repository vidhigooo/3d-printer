export interface TechnoPolymerProduct {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  extraImages?: string[];
  price: string;
  outOfStock: boolean;
  description: string;
  specs?: Record<string, string>;
}

export const technoPolymers: TechnoPolymerProduct[] = [
  {
    id: "elegoo-pla-plus",
    slug: "elegoo-pla-plus",
    name: "Elegoo PLA PLUS",
    subtitle: "High-Quality Multi-color Filament",
    image: "/resin/p1.png",
    extraImages: ["/resin/p1_1.png", "/resin/p1_2.png"],
    price: "₹1,249.00",
    outOfStock: false,
    description: "Elegoo PLA PLUS is a premium quality filament designed for easy printing, excellent layer adhesion, and vibrant multi-color finishes. It delivers high-strength and warp-free models, making it ideal for both beginners and experienced makers.",
    specs: {
      "Color": "Multi-color PLA+ Filament",
      "Diameter": "1.75mm",
      "Net Weight": "1kg/Spool",
      "Printing Temp": "205-230 °C",
      "Recommended Print Speed": "40-70 mm/s",
      "Suggest Printer Temp": "215 °C and Heat Bed 50-65 °C",
      "Material": "PLA+"
    }
  },
  {
    id: "vektor3d-petg-premium",
    slug: "vektor3d-petg-premium",
    name: "Vektor3D PETG Premium",
    subtitle: "Durable & Strong (White)",
    image: "/resin/p2_1.png",
    extraImages: ["/resin/p2_2.png", "/resin/p2_3.png"],
    price: "₹850.00",
    outOfStock: false,
    description: "Vektor3D 1.75mm PETG Premium White Filament (1 KG Spool).\n\n100% No Bubbles.\nVacuum Packed: Yes\nMelting Temperature: 200 - 220 Deg C\nMaterial: PETG\nFilament Diameter: 1.75 mm\nFilament Color: White\nNon Toxic: Yes",
    specs: {
      "Color": "White PETG Filament",
      "Diameter": "1.75mm",
      "Net Weight": "1Kg/Spool, 2.2lbs/Spool",
      "Printing Temp": "190-220 (375-430)",
      "Recommended Print Speed": "30-60 mm/s",
      "Suggest Printer Temp": "220 (428) and Heat Bed 50-60 (122-140)",
      "Notes": "PETG Filament Series Brings Arts, Crafts, 3D Projects Smooth Satin Beautiful Surface. Designed for Most FDM 3D Printers. It Supports Diverse FDM 3D Printers in Market Very Well."
    }
  },
  {
    id: "vektor3d-abs-premium",
    slug: "vektor3d-abs-premium",
    name: "Vektor3D ABS Premium",
    subtitle: "Industrial-grade Strength (White)",
    image: "/resin/p2_1.png",
    extraImages: ["/resin/p2_2.png", "/resin/p2_3.png"],
    price: "₹850.00",
    outOfStock: false,
    description: "Vektor3D 1.75mm ABS Premium White Filament (1 KG Spool).\n\n100% No Bubbles.\nVacuum Packed: Yes\nMelting Temperature: 200 - 220 Deg C\nMaterial: ABS\nFilament Diameter: 1.75 mm\nFilament Color: White\nNon Toxic: Yes",
    specs: {
      "Color": "White ABS Filament",
      "Diameter": "1.75mm",
      "Net Weight": "1Kg/Spool, 2.2lbs/Spool",
      "Printing Temp": "190-220 (375-430)",
      "Recommended Print Speed": "30-60 mm/s",
      "Suggest Printer Temp": "220 (428) and Heat Bed 50-60 (122-140)",
      "Notes": "ABS Filament Series Brings Arts, Crafts, 3D Projects Smooth Satin Beautiful Surface. Designed for Most FDM 3D Printers. It Supports Diverse FDM 3D Printers in Market Very Well."
    }
  },
  {
    id: "vektor3d-pla-premium-plus",
    slug: "vektor3d-pla-premium-plus",
    name: "Vektor3D PLA Premium Plus",
    subtitle: "Precision & Detail (White)",
    image: "/resin/p2_1.png",
    extraImages: ["/resin/p2_2.png", "/resin/p2_3.png"],
    price: "₹850.00",
    outOfStock: false,
    description: "Vektor3D 1.75mm PLA Premium Plus White Filament (1 KG Spool).\n\n100% No Bubbles.\nVacuum Packed: Yes\nMelting Temperature: 200 - 220 Deg C\nMaterial: PLA\nFilament Diameter: 1.75 mm\nFilament Color: White\nNon Toxic: Yes",
    specs: {
      "Color": "White PLA Filament",
      "Diameter": "1.75mm",
      "Net Weight": "1Kg/Spool, 2.2lbs/Spool",
      "Printing Temp": "190-220 (375-430)",
      "Recommended Print Speed": "30-60 mm/s",
      "Suggest Printer Temp": "220 (428) and Heat Bed 50-60 (122-140)",
      "Notes": "PLA Filament Series Brings Arts, Crafts, 3D Projects Smooth Satin Beautiful Surface. Designed for Most FDM 3D Printers. It Supports Diverse FDM 3D Printers in Market Very Well."
    }
  }
];
