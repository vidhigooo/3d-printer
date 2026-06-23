export type PrinterModel = {
    id: number;
    name: string;
    slug: string;
    price: number;
    originalPrice?: number;
    badge?: string;
    image: string;
    inStock: boolean;
    description?: string;
    features?: string[];
};

export const mockModels: PrinterModel[] = [
    {
        id: 1,
        name: "Bambu Lab P1S 3D Printer",
        slug: "bambu-lab-p1s-3d-printer",
        price: 45500,
        originalPrice: 53000,
        badge: "",
        image: "/Bamboo_lab_ps1.png",
        inStock: true,
    },
    {
        id: 2,
        name: "Anycubic Kobra 2 Pro 3D Printer",
        slug: "anycubic-kobra-2-pro-3d-printer",
        price: 24500,
        badge: "",
        image: "/anycubic_kobra.png",
        inStock: true,
    },
    {
        id: 3,
        name: "Elegoo Centauri Carbon 3D Printer",
        slug: "elegoo-centauri-carbon-3d-printer",
        price: 45500,
        badge: "New",
        image: "/elegoo_centauri_carbon.png",
        inStock: true,
    },
    {
        id: 4,
        name: "FLASH FORGE AD5X HIGH SPEED MULTI COLOUR 3D PRINTER",
        slug: "flash-forge-ad5x-high-speed-multi-colour-3d-printer",
        price: 36500,
        badge: "",
        image: "/flash_forge.png",
        inStock: true,
    },
    {
        id: 5,
        name: "Creality CR 10 S5 3D Printer",
        slug: "creality-cr-10-s5-3d-printer",
        price: 70500,
        originalPrice: 72000,
        badge: "With Premium Tech Support",
        image: "/creality_cr_10s5.png",
        inStock: false,
    },
    {
        id: 6,
        name: "Creality CR-10 V2 3D Printer",
        slug: "creality-cr-10-v2-3d-printer",
        price: 58500,
        originalPrice: 60000,
        badge: "With Premium Tech Support",
        image: "/creality_cr10v2.png",
        inStock: true,
    },
    {
        id: 7,
        name: "Original Creality CR-10S Pro V2 3D Printer with BL Touch",
        slug: "original-creality-cr-10s-pro-v2-3d-printer-with-bl-touch",
        price: 66800,
        originalPrice: 68000,
        badge: "With Premium Tech Support",
        image: "/og_creality.png",
        inStock: true,
    },
    {
        id: 8,
        name: "Ender-3 V2 3D Printer with silent board high performance",
        slug: "ender-3-v2-3d-printer-with-silent-board-high-performance",
        price: 24500,
        originalPrice: 26000,
        badge: "With Premium Tech Support",
        image: "/ender_3v2.png",
        inStock: true,
    },
];

export const anycubicFolderModels: PrinterModel[] = [
    {
        id: 101,
        name: "Elegoo Saturn 3 Ultra 12K MSLA",
        slug: "elegoo-saturn-3-ultra-12k-msla",
        price: 43000,
        image: "/anycubic/img1.png",
        inStock: true,
    },
    {
        id: 102,
        name: "Anycubic Photon Mono 4 (10K)",
        slug: "anycubic-photon-mono-4-10k",
        price: 18999,
        image: "/anycubic/img2.png",
        inStock: true,
    },
    {
        id: 103,
        name: "Elegoo Mars 5 Ultra 3D Printer",
        slug: "elegoo-mars-5-ultra-3d-printer",
        price: 32000,
        image: "/anycubic/img3.png",
        inStock: true,
    },
    {
        id: 104,
        name: "Phrozen Sonic Mega 8K V2",
        slug: "phrozen-sonic-mega-8k-v2",
        price: 350000,
        image: "/anycubic/img4.png",
        inStock: true,
    },
    {
        id: 105,
        name: "Phrozen Sonic Mega 8K S",
        slug: "phrozen-sonic-mega-8k-s",
        price: 150000,
        image: "/anycubic/img5.png",
        inStock: true,
    },
    {
        id: 106,
        name: "Phrozen Sonic Mighty 14k 3D Printer",
        slug: "phrozen-sonic-mighty-14k-3d-printer",
        price: 125000,
        image: "/anycubic/img6.png",
        inStock: true,
    },
    {
        id: 107,
        name: "Phrozen Sonic Mighty 8K 3D Printer",
        slug: "phrozen-sonic-mighty-8k-3d-printer",
        price: 75000,
        image: "/anycubic/img7.png",
        inStock: true,
    },
    {
        id: 108,
        name: "Phrozen Sonic Mighty 8K 3D Printer",
        slug: "phrozen-sonic-mighty-8k-3d-printer-2",
        price: 75000,
        image: "/anycubic/img8.png",
        inStock: true,
    },
    {
        id: 109,
        name: "Elegoo Saturn 4 Ultra 3D Printer",
        slug: "elegoo-saturn-4-ultra-3d-printer",
        price: 61500,
        image: "/anycubic/img9.png",
        inStock: true,
    },
    {
        id: 110,
        name: "Phrozen Sonic Mini 4K SLA 3D Printer",
        slug: "phrozen-sonic-mini-4k-sla-3d-printer",
        price: 35000,
        image: "/anycubic/img10.png",
        inStock: true,
    },
    {
        id: 111,
        name: "Anycubic Photon Mono X MSLA 3D Printer",
        slug: "anycubic-photon-mono-x-msla-3d-printer",
        price: 60000,
        image: "/anycubic/img11.png",
        inStock: true,
    },
    {
        id: 112,
        name: "Elegoo Saturn Resin 3D Printer",
        slug: "elegoo-saturn-resin-3d-printer",
        price: 43000,
        image: "/anycubic/img12.png",
        inStock: true,
    },
    {
        id: 113,
        name: "Creality LD-002R LCD Resin 3D Printer",
        slug: "creality-ld-002r-lcd-resin-3d-printer",
        price: 29800,
        image: "/anycubic/img13.png",
        inStock: true,
    },
];

export const waxModels: PrinterModel[] = [
    {
        id: 201,
        name: "Flashforge WaxJet 51C Build Material – 20 Pack | High-Precision Castable Wax",
        slug: "flashforge-waxjet-51c-build-material",
        price: 12000,
        image: "/3d-printing-wax/hq-build.jpg",
        inStock: true,
        description: "Professional castable wax material designed for the Flashforge WaxJet 51C, delivering ultra-fine detail accuracy, smooth surface finish, and reliable investment casting performance for jewelry manufacturing.",
        features: [
            "100% castable wax material.",
            "Ultra-high detail accuracy for jewelry printing.",
            "Clean ash-free burnout performance.",
            "Smooth surface finish with fine detailing.",
            "Optimized for Flashforge WaxJet 51C.",
            "Stable melting point (68°C) for reliable printing.",
            "Ideal for filigree and complex geometries.",
            "20 blocks – 72 g (Approx. 1.4 Kg total)."
        ]
    },
    {
        id: 202,
        name: "Flashforge WJ 51C Support Material (White Wax) – 8 Blocks × 180 g | FFMS3200",
        slug: "flashforge-wj-51c-support-material",
        price: 8000,
        image: "/3d-printing-wax/hq-support.jpg",
        inStock: true,
        description: "Professional dissolvable white wax support material for Flashforge WJ 51C, designed to provide stable support for complex jewelry geometries and easy post-processing removal.",
        features: [
            "Includes 8 white wax support blocks.",
            "Reliable support for intricate geometries.",
            "Hands-free dissolvable support material.",
            "Protects delicate jewelry details.",
            "Optimized for Flashforge WaxJet 51C.",
            "Stable melting point (~55°C).",
            "Ideal for professional production workflows.",
            "Total weight: Approx. 1.44 Kg."
        ]
    }
];

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(price);
};