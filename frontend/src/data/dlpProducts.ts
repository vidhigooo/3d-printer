export interface DLPProduct {
  id: string;
  name: string;
  image: string;
  extraImages?: string[];
  description: string;
  specs?: Record<string, string>;
}

export const dlpProducts: DLPProduct[] = [
  {
    id: "elegoo-saturn-3-ultra",
    name: "Elegoo Saturn 3 Ultra 12K",
    image: "/dlp/1.png",
    extraImages: ["/dlp/1_1.png", "/dlp/1_2.png", "/dlp/1_3.png", "/dlp/1_4.png"],
    description: "The Elegoo Saturn 3 Ultra 12K is a high-performance MSLA resin 3D printer designed for ultra-detailed, professional-quality prints. It features a 10-inch 12K mono LCD screen with a resolution of 11520 × 5120, delivering exceptional detail with an XY resolution of 19 × 24 microns for sharp edges and smooth surfaces.\n\nWith a large build volume of 218.88 × 122.88 × 260 mm, it allows users to print bigger models or multiple parts in a single batch, making it ideal for prototyping, miniatures, and production work.\n\nThe printer uses advanced MSLA (Masked Stereolithography) technology with a COB + refractive light source, ensuring uniform light distribution and consistent curing for high-quality results.\n\nPowered by a Linux-based system with 4GB storage, the Saturn 3 Ultra offers fast and stable performance along with Wi-Fi file transfer (6–10 Mbps), allowing seamless wireless printing and improved workflow efficiency.\n\nIt supports high-speed printing up to 150 mm/h with improved ACF release film, reducing peel force and increasing success rates. The dual linear guide rail and ball screw Z-axis ensure smooth, stable movement for precise layer accuracy.\n\nThe printer includes a 4-point leveling system for easy setup, a laser-engraved build plate for strong adhesion, and a plug-in air purifier to help reduce resin odors during operation.\n\nCompatible with a wide range of resins including standard, ABS-like, water-washable, and plant-based materials, the Saturn 3 Ultra is perfect for professionals, hobbyists, and businesses requiring high-detail resin printing.",
    specs: {
      "Technology": "MSLA Resin Printing",
      "LCD": "10-inch 12K Mono Screen",
      "Resolution": "11520 × 5120",
      "XY Resolution": "19 × 24 μm",
      "Build Volume": "218.88 × 122.88 × 260 mm",
      "Print Speed": "Up to 150 mm/h",
      "Layer Thickness": "0.01–0.2 mm",
      "Connectivity": "USB & Wi-Fi",
      "Light Source": "COB + Refractive (405nm)",
      "System": "Linux OS"
    }
  },
  {
    id: "anycubic-photon-mono-4",
    name: "Anycubic Photon Mono 4 (10K)",
    image: "/dlp/2.png",
    extraImages: ["/dlp/2_1.png", "/dlp/2_2.png", "/dlp/2_3.png"],
    description: "The Anycubic Photon Mono 4 (10K) is a high-resolution resin 3D printer designed for detailed and efficient printing. It features a 7-inch monochrome LCD screen with a 10K resolution (9024 x 5120 pixels), delivering an XY resolution of 17 x 17 µm. The printer offers a build volume of 153.4 x 87 x 165 mm and supports layer heights ranging from 0.03 to 0.15 mm. With a maximum printing speed of up to 70 mm/h using compatible high-speed resins, it ensures rapid production without compromising quality. The advanced parallel matrix light source provides 80–90% light uniformity, resulting in consistent curing across the build area. Additional features include a laser-engraved build platform for improved adhesion, 4-point manual leveling for easy calibration, and a compact design weighing 4 kg. This printer is suitable for both hobbyists and professionals seeking precision and reliability in resin 3D printing.",
    specs: {
      "Build volume": "153.4mm*87mm*165mm",
      "Package dimensions": "480mm*300mm*300mm",
      "Printing speed": "Standard Resin 0.1mm layer height: ≤50mm/h peek speed; High Speed Resin 0.1mm layer height: ≤70mm/h peek speed",
      "Machine leveling": "4-point manual leveling",
      "Lcd screen size": "7-inch 10K Mono LCD",
      "Light source": "Parallel matrix upgrade light source",
      "Xy resolution": "17*17μm",
      "Build platform": "Laser-engraved platform 2.0",
      "Operating screen": "2.8\" TFT touch-control",
      "Slicing software": "Photon Workshop",
      "Material": "Supports most resins on the market (water-washable, standard, bio resin, plant-based, etc.)",
      "File transfer": "USB",
      "Machine weight": "4KG"
    }
  },
  {
    id: "elegoo-mars-5-ultra",
    name: "Elegoo Mars 5 Ultra",
    image: "/dlp/3.png",
    extraImages: ["/dlp/3_1.png", "/dlp/3_2.png"],
    description: "The Elegoo Mars 5 Ultra is a high-precision resin 3D printer with a 9K mono LCD screen, designed for fast and detailed printing. It features auto-leveling, a mechanical sensor for better accuracy, and a built-in air purifier to reduce resin odor. With its smart UI, sturdy structure, and upgraded COB light source, it offers smooth operation, excellent print quality, and user-friendly experience—making it ideal for both beginners and professionals."
  },
  {
    id: "phrozen-sonic-mega-8k-v2",
    name: "Phrozen Sonic Mega 8K V2",
    image: "/dlp/4.png",
    extraImages: ["/dlp/4_1.png", "/dlp/4_2.png"],
    description: "The Phrozen Sonic Mega 8K V2 is a large-format resin 3D printer designed for ultra-high detail and large-scale printing. It features a 15-inch 8K monochrome LCD screen for sharp, detailed results and a massive build volume of 33 x 18.5 x 30 cm. With improved speed, stability, and smart features like auto-leveling and dual linear rails, it's ideal for professionals and serious creators who need both quality and size in their prints.",
    specs: {
      "Panel size": "15″",
      "Build size": "33 x 18.5 x 40cm (LWH)",
      "Build plate": "Perforated",
      "Panel resolution": "8K resolution",
      "Average Printing speed": "70mm/hr",
      "XY resolution": "43micron",
      "Z-resolution": "from 10 micron",
      "Operation": "5″ Touch Panel",
      "Connectivity": "USB/Ethernet",
      "Slicer Software": "CHITUBOX V1.8.1",
      "Printer Size": "L40 x W47 x H68cm",
      "Printing Volume": "L33 x W18.5 x H40cm",
      "Printer Weight": "35KG",
      "Housing": "Full metal",
      "Light uniformity": "80-90%",
      "Release film": "FEP",
      "Light intensity": "~3000μW /cm²",
      "Layer height": "0.03-0.15mm"
    }
  },
  {
    id: "anycubic-photon-mono-2",
    name: "Anycubic Photon Mono 2",
    image: "/dlp/5.png",
    extraImages: ["/dlp/5_1.png", "/dlp/5_2.png", "/dlp/5_3.png", "/dlp/5_4.png", "/dlp/5_5.png"],
    description: "The Anycubic Photon Mono 2 is a compact and affordable resin 3D printer equipped with a 6.6-inch 4K+ monochrome LCD screen for high-resolution printing. It offers a build volume of 143 x 89 x 165 mm, making it suitable for detailed models and miniatures. With improved light uniformity, stable Z-axis design, and user-friendly features, it's ideal for beginners and hobbyists looking for reliable and precise resin printing at a budget-friendly price."
  },
  {
    id: "phrozen-sonic-mega-8k-s",
    name: "Phrozen Sonic Mega 8K S",
    image: "/dlp/6.png",
    extraImages: ["/dlp/6_1.png", "/dlp/6_2.png", "/dlp/6_3.png"],
    description: "The Phrozen Sonic Mega 8K S is a large-format resin 3D printer that delivers ultra-high 8K resolution with fast printing speeds and a big build volume of 33 x 18.5 x 30 cm, making it perfect for printing large, detailed models. It features a 15-inch monochrome LCD screen, reliable ParaLED light source, dual linear rails for stability, and supports easy operation through a 3.5-inch touch panel. Designed for professionals and serious hobbyists, it offers high precision, consistent performance, and compatibility with third-party resins."
  },
  {
    id: "phrozen-sonic-mighty-14k-revo",
    name: "Phrozen Sonic Mighty 14K Revo",
    image: "/dlp/7.png",
    description: "The Phrozen Sonic Mighty 14K Revo is a high-resolution LCD resin 3D printer designed for precise and detailed printing. It features a large 10.1-inch 14K monochrome screen, auto-leveling, and smart features like residue and failure detection. With a spacious build volume and fast printing speed, it’s ideal for professionals and hobbyists who want excellent print quality with ease of use."
  },
  {
    id: "phrozen-sonic-mighty-8k",
    name: "Phrozen Sonic Mighty 8K",
    image: "/dlp/8.png",
    extraImages: ["/dlp/8_1.png", "/dlp/8_2.png", "/dlp/8_3.png"],
    description: "The Phrozen Sonic Mighty 8K is a high-resolution LCD resin 3D printer built for detailed and large-scale prints. Featuring a 7680 x 4320 (8K) resolution with 28-micron XY accuracy, it delivers stunning precision across a large build volume of 218 x 123 x 235 mm. With a printing speed of up to 70 mm/h, a manual bed-leveling system, and compatibility with third-party resins, this printer is perfect for both professionals and enthusiasts seeking scale and detail in one machine."
  },
  {
    id: "saturn-4-ultra",
    name: "Saturn 4 Ultra",
    image: "/dlp/9.png",
    extraImages: ["/dlp/9_1.png", "/dlp/9_2.png", "/dlp/9_3.png", "/dlp/9_4.png"],
    description: "The Saturn 4 Ultra is a next-generation resin 3D printer by Elegoo featuring advanced Mono LCD technology, high-resolution printing, and ultra-fast printing speeds. It supports Wi-Fi connectivity, a large build volume, and features a tilting LCD screen for improved efficiency. Designed for enthusiasts and professionals, it ensures detailed prints, quieter operation, and a user-friendly interface, making it ideal for creating miniatures, prototypes, and functional parts with exceptional detail and reliability."
  },
  {
    id: "phrozen-sonic-mini-4k",
    name: "Phrozen Sonic Mini 4K sla 3d printer",
    image: "/dlp/10.png",
    description: "4K with 6.1” Printing Area: 3840 x 2160 ultra-high-definition. Prints at 35µm with 722 PPI, the highest PPI ever, with a large printing area of 6.1”\n Monochrome LCD Screen: Prints up to 4 times faster than traditional 3D printers, taking only two seconds to print one layer. 2000 working hours guaranteed for all LCD screens, free 3-month warranty offered\n Super Easy to Use: Just use a USB flash drive to send over your data to the printer and with a few taps, you’re good to go\n Mini but Mighty: Compact & lightweight, easy to store and fits in different settings for both personal or professional uses",
    specs: {
      "System": "Phrozen OS",
      "Operation": "2.8in Touch Panel",
      "Slicer Software": "ChiTu Box V1.6.5",
      "Connectivity": "USB",
      "Technology": "Resin 3D Printer - LCD Type",
      "Light Source": "405nm ParaLED Matrix 2.0",
      "XY Resolution": "35 µm",
      "Layer Thickness": "0.01-0.30mm",
      "Maximum Printing Speed": "80mm/ hour",
      "Power Requirement": "AC100-240V~50/60Hz",
      "Printer Size": "L9.8 x W9.8 x H12.9 in",
      "Print Volume": "L5.2 x 2.9 x 5.1 in",
      "Printer Weight": "5kg"
    }
  },
  {
    id: "anycubic-photon-mono-x",
    name: "Anycubic Photon Mono X Msla 3D Printer",
    image: "/dlp/11.png",
    extraImages: ["/dlp/11_1.png", "/dlp/11_2.png", "/dlp/11_3.png"],
    description: "3X Fast Printing: single-layer exposure only takes 1-2 seconds, and the printing speed is Max 60mm/h, which is 3 times faster than ordinary resin printers. Do you want to finish printing faster? This printer help you to obtain higher quality models in a shorter time.\n 4K Monochrome Screen: ANYCUBIC Photon Mono X is a new UV Photocuring 3D printer with ultra-high resolution (3840*2400 pixels), highly restored details, and the screen service life is up to 2000h, more durable than ordinary color screen.\n APP Remote Control & Large Printing Volume: Use this Mono X UV Photocuring LCD 3D Printer to realize remote printing management anytime and anywhere, monitor printing progress in real time, and adjust printing parameters at any time. In order to achieve the creation needs of larger models, it has a surprising printing volume, and printing volume size 192 * 120 * 250mm.\n Double Linear Guide: Z-axis adopts the combination of double linear guide + screw motor + anti-backlash nut, improve the stability of Z-axis, run more stable, and eliminate printing layer lines. Independently researched and developed Anycubic slicing software, which is more powerful, supports 8 times anti-aliasing and smoother printing accuracy.\n New Matrix UV Light Source: Using quartz lamp beads, a new generation of new matrix design, the light source is more uniform, and it can be used with 4K monochrome screen to achieve high-precision printing. The resin 3D printer contains exclusive UV heat dissipation channels, which can efficiently cool down.",
    specs: {
      "System": "ANYCUBIC Photon Mono X",
      "Operation": "3.5 inch Touch Screen",
      "Software": "ANYCUBIC Photon workshop",
      "Connectivity": "USB",
      "Technology": "LCD-based SLA",
      "Light-source": "high-quality filament（wavelength 405nm）",
      "XY Res.": "0.050mm 3840*2400（4K）",
      "Z Axis Res.": "0.01mm",
      "Layer Res.": "0.01-0.15mm",
      "Printing Speed": "MAX 60mm/h",
      "Rated Power": "120W",
      "Printer Size": "270mm(L)*290mm(W)*475mm(H)",
      "Build Volume": "192mm(L）*120mm(W）*245mm（H）",
      "Material": "405nm UV Resin",
      "Net Weight": "~10.75kg"
    }
  },
  {
    id: "elegoo-saturn-msla",
    name: "Elegoo Saturn MSLA 3d printer",
    image: "/dlp/12.png",
    extraImages: ["/dlp/12_1.png", "/dlp/12_2.png", "/dlp/12_3.png", "/dlp/12_4.png"],
    description: "About this item\n\n【Faster printing speed】Saturn 3D printer comes with an 8.9inch 4K Monochrome LCD with an HD resolution of 3840 x 2400, reducing the layer printing time to 2s-3s, which is 60% faster than Mars Pro yet still delivers outstanding printing results.\n【Larger build volume】Saturn has a large printing volume of 192*120*200mm/7.55in*4.72in*7.87in, and you can print multiple full-sized models at the same time, which can dramatically improve your productivity.\n【Higher precision and easier printing】Z-axis utilizes a double linear guide-way structure, which can achieve steadier motion and greatly enhanced moving accuracy. With the Ethernet port on the back, Saturn now supports file transfer through your local area network, which is very handy for fast printing.\n【Quality Prints and Consistent Success】Matrix light source consists of 54 UV LED lights with uniform light emission, ensuring superior print results and a more accurate printing size. The set screws on the build plate assure long-lasting leveling, no need for frequent calibration, and the sandblasted surface provides a much stronger adherence, especially when printing large 3D models.\n【Warranty and Service】We provide a 1-year warranty on the whole printer (4K LCD, FEP film, and tool kit excluded). Replacement parts will be shipped from the overseas warehouse to offer you quality and fast customer service.",
    specs: {
      "Saturn 3D Printer": "1",
      "Build Platform": "1",
      "Resin Tank": "1",
      "U Disk 4GB": "1",
      "Mask": "1",
      "Gloves": "3",
      "Metal Scraper": "1",
      "Plastic Scraper": "1",
      "User Instruction": "1",
      "Backup Screws": "1",
      "Adapter 120W": "1",
      "Tool Kit": "1"
    }
  },
  {
    id: "creality-ld-002r",
    name: "Creality LD-002R LCD Resin 3D Printer",
    image: "/dlp/13.png",
    extraImages: ["/dlp/13_1.png", "/dlp/13_2.png", "/dlp/13_3.png"],
    description: "LD-002R LCD Resin 3D Printer:\n\nBUILD AND MOTION: Great emphasis is being placed on the LD-002R’s robust build quality and the components of its motion system, which is underpinned by a ball screw and single linear rail for the Z-axis.\n\nANTI-ALIASING： MSLA 3D printers use an LCD screen to mask an image of a layer over a UV light source. Comprised of hundreds of thousands of pixels, each a little rectangle itself, this tech leaves a telltale sign of the edges of these pixels on the print surface. Often barely visible, this effect can be lessened through the use of a digital processing called anti-aliasing, which interpolates between these edges, smoothing the effect out.\n\nQUICK LEVELING： Quick leveling in the sense that the machine will lower the print plate to the vat for you, yes the LD-002R is quick leveling. Four hex screws feature on the print plate — loosen them before dropping the plate, and it will align to the level of the screen. Tighten and you’re good to go. Standard MSLA fare.\n\nPERFORATED PRINT PLATE： Something of an oddity on a small desktop MSLA machine, the Creality LD-002R 3d printer has a perforated print plate. Typically seen on larger bottom-up machines where larger prints present additional pull that might dislodge an improperly adhered print, it’s unusual, and perhaps even distracting overkill, to see it on a smaller machine. It’s not a bad thing, but it makes you wonder why they did it.\n\nAIR FILTER： A small box at the rear of the print chamber contains a pouch of activated carbon. This should help to remove part of the stench of exposed resin from the air.",
    specs: {
      "Technology": "MSLA/LCD",
      "Type": "Resin",
      "Year": "2019",
      "Assembly": "Fully-assembled",
      "Manufacturer": "Creality",
      "Build Volume": "120 x 65 x 165 mm",
      "Layer Height": "20 – 50 microns",
      "Resolution": "2560 x 1600 pixels",
      "XY-axis positioning accuracy": "0.075 mm",
      "Z-axis positioning accuracy": "n/a",
      "Printing Speed": "50 – 70 mm height/h",
      "Bed-Leveling": "Manual",
      "Display": "3.5 in touchscreen",
      "Third-Party Materials": "Yes",
      "Materials": "405 nm UV resin",
      "Recommended Slicer": "ChiTu Box",
      "Operating system": "Mac, Windows, Linux",
      "File types": "STL, CTB",
      "Connectivity": "USB",
      "Frame dimensions": "221 x 221 x 403 mm",
      "Weight": "7 kg"
    }
  },
  {
    id: "generic-dlp-14",
    name: "DLP 3D Printer Series",
    image: "/dlp/14.png",
    extraImages: ["/dlp/14_1.png", "/dlp/14_2.png", "/dlp/14_3.png", "/dlp/14_4.png", "/dlp/14_5.png"],
    description: "High performance DLP/LCD resin printer for high resolution modeling, prototyping, and jewelry/dental applications."
  }
];
