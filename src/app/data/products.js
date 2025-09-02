// This function is a simple utility to convert a label into a URL-friendly slug
const toSlug = (label) => {
  return label
    .toLowerCase()
    .replace(/\[|\]/g, "") // remove brackets
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .trim();
};

export const productCategories = [
  {
    label: "IBR Boiler",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "High-performance IBR Boilers designed for reliability and efficiency in various industrial applications.",
    productData: [
      {
        title: "Solid Fuel Fired Package Steam Boiler",
        productDescription:
          "Proven, Safe Economical, Energy Saving, Smoke Tube Horizontal Steam Boiler",
        imgSrc: "/assets/products/solid-fuel-fired-package-steam-boiler.webp",
        featuresData: [
          "Gross calorific value of imported coal   5,500 Kcal/Kg.",
          "Gross calorific value of steam coal   4,500 Kcal/Kg.",
          "Quick start up and prompt response",
          "Gross calorific value of lignite   3,500 Kcal/Kg.",
        ],
        brochure: "/ibr_boiler.pdf",
      },
      {
        title: "Oil / Gas Fired Package Steam Boiler",
        productDescription:
          "Proven, Safe Economical, Energy Saving, Smoke Tube Horizontal Steam Boiler",
        imgSrc: "/assets/products/oil-gas-fired-package-steam-boiler.webp",

        featuresData: [
          "Gross calorific value of LDO 10,700 Kcal/Kg",
          "Gross calorific value of HSD 10,900 Kcal/Kg",
          "Gross calorific value of FO 10,200 Kcal/Kg",
          "Gross calorific value of LSHS 10,550 Kcal/Kg",
          "Gross calorific value of NG 8,500 Kcal/M3",
        ],
        brochure: "/ibr_boiler.pdf",
      },
      {
        title: "Water Wall Membrane Steam Boiler",
        productDescription:
          "Proven, Safe Economical, Energy Saving, Smoke Tube Horizontal Steam Boiler",
        imgSrc: "/assets/products/water-wall-membrane-steam-boiler.webp",

        featuresData: ["Available Range 600 Kg/Hr to 20000 Kg/Hr"],
        brochure: "/ibr_boiler.pdf",
      },
    ],
  },
  {
    label: "Small Industrial Boiler [SIB]",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Compact and efficient Small Industrial Boilers, perfect for small to medium-scale operations.",
    productData: [
      {
        title:
          "Horizontal Smoke Tube Type Steam Boiler [Oil / Gas / Solid Fuel Fired]",
        productDescription:
          "A proven, safe, and energy-efficient horizontal smoke tube steam boiler designed for solid fuel firing. Built as per Indian Boiler Regulations (IBR), this robust unit offers consistent steam generation, quick start-up, and low maintenance. Ideal for industrial use with various coal and lignite types, providing high thermal efficiency and economical operation.",
        imgSrc: "/assets/products/horizontal-smoke-tube-type-steam-boiler.webp",

        featuresData: [
          "Gross calorific value of   LDO 10,700 Kcal/Kg.",
          "Gross calorific value of   HSD 10,900 Kcal/Kg.",
          "Gross calorific value of   FO 10,200 Kcal/Kg.",
          "Gross calorific value of   LSHS 10,550 Kcal/Kg.",
          "Gross calorific value of   NG 8,500 Kcal/M3",
        ],
      },
      {
        title: "Vertical Coil Type Steam Boiler [Oil / Gas / Fired Model]",
        productDescription:
          "Compact, efficient, and IBR-compliant Small Industrial Boiler (SIB) with a horizontal smoke tube design. Designed as per Indian Boiler Regulation Chapter XIV, it’s ideal for industries seeking a reliable steam source without requiring licensed IBR operators. Suitable for various liquid and gas fuels with high calorific values.",
        imgSrc: "/assets/products/vertical-coil-type-steam-boiler.webp",

        featuresData: [
          "Operation, Construction and Functions of Entech",
          "Fully Automatic Operation and Instant Steaming",
          "Simple and Clear Operation and Fail Safe System",
        ],
      },
    ],
  },
  {
    label: "Thermic Fluid Heaters [Thermopack]",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Advanced Thermic Fluid Heaters that provide high-temperature heat transfer at low pressure.",
    productData: [
      {
        title: "Solid Fuel Fired Vertical Thermic Fluid Heater",
        productDescription:
          "Suitable for Coal, Wood, Lignite, Briquette, Husk, Bagasses, Agro Waste & any Solid Fuel",
        imgSrc:
          "/assets/products/solid-fuel-fired-vertical-thermic-fluid-heater.webp",

        featuresData: [
          "Excess Air Reduction",
          "Air preheating",
          "Balanced Draught System",
          "Multifuel Option",
        ],
        brochure: "/thermopack_solid_fuel_fired.pdf",
        // thermicData.js
        tableData: {
          columns: [
            "Model",
            "TVW 100",
            "TVW 200",
            "TVW 400",
            "TVW 600",
            "TVW 800",
            "TVW 1000",
            "TVW 1500",
            "TVW 2000",
            "TVW 2500",
            "TVW 3000",
            "TVW 4000",
          ],
          rows: [
            {
              label: "Net Heat Output (K.Cal/hr)",
              values: [
                100000, 200000, 400000, 600000, 800000, 1000000, 1500000,
                2000000, 2500000, 3000000, 4000000,
              ],
            },
            {
              label: "Thermic Fluid Flow Rate (Lit./hr)",
              values: [
                9000, 15000, 26000, 40000, 55000, 75000, 110000, 135000, 175000,
                210000, 275000,
              ],
            },
            {
              label: "Circulation (HP)",
              values: [3, 5, 7.5, 12.5, 15, 20, 30, 40, 50, 60, 75],
            },
            {
              label: "Induced Draft Fan (HP)",
              values: [2, 3, 5, 7.5, 10, 15, 20, 25, 30, 30, 40],
            },
            {
              label: "Forced Draft Fan (HP)",
              values: [2, 2, 2, 2, 2, 2, 5, 7.5, 7.5, 7.5, 12.5],
            },
            {
              label: "Fuel Consumption - Coal (Kg/hr)",
              values: [29, 58, 116, 175, 234, 290, 435, 580, 725, 870, 1160],
            },
            {
              label: "Husk (Kg/hr)",
              values: [
                43, 86.5, 173, 260, 344, 435, 650, 870, 1087, 1305, 1740,
              ],
            },
            {
              label: "Total Load Electrical (KW)",
              values: [
                3.7, 6, 9.4, 16.5, 20.25, 27.75, 39, 52.5, 65.62, 73.12, 95.62,
              ],
            },
          ],
        },
      },
      {
        title: "Oil / Gas Fired Thermic Fluid Heater [Horizontal / Vertical]",
        productDescription:
          "Fully Automatic Vertical and Horizontal, High Fuel Efficiency, Instant Heating, Non-IBR, Easy Maintenance, Low Budget Equipment, Indian Boiler Regulation not Required",
        featuresData: [
          "Construction and Function of Entherm",
          "Heat Exchange",
          "Instrumentation and controls",
          "Major Controls and Safeties",
          "Low Budget Equipment no Indian Boiler Regulations",
          "The Thermic Fluid Pump",
        ],
        imgSrc: "/assets/products/oil-gas-fired-thermic-fluid-heater.webp",

        brochure: "/thermopack_oil_gas_fired.pdf",
      },
    ],
  },
  {
    label: "Hot Air Generators",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Robust Hot Air Generators for direct and indirect heating applications in various industries.",
    productData: [
      {
        title: "Direct & Indirect Fired Suitable for Oil / Gas",
        productDescription:
          "These Hot Air Generators are engineered for efficient and reliable operation using oil or gas fuels. Available in both direct and indirect firing designs, they are ideal for industries requiring clean, controlled hot air for processes such as drying, curing, baking, or heating. Designed for optimal fuel combustion and maximum thermal efficiency, with minimal maintenance needs.",
        imgSrc:
          "/assets/products/direct-and-indirect-fired-suitable-for-oil-gas.webp",

        featuresData: [
          "Available in both direct and indirect fired configurations",
          "Operates on multiple fuels including LDO, HSD, FO, and Natural Gas",
          "High thermal efficiency with optimized combustion system",
          "Rapid start-up and uniform hot air temperature control",
          "Compact design with easy installation and low operational footprint",
          "Suitable for clean-air applications where contamination must be avoided",
          "Ideal for drying, coating, baking, or other process heating tasks",
        ],
      },
      {
        title: "Direct & Indirect Fired Suitable for Solid Fuel Firing",
        productDescription:
          "Designed for cost-effective operation using solid fuels, these Hot Air Generators are available in direct and indirect firing models. Engineered for industries needing robust performance and fuel flexibility, these units are suitable for wood, coal, briquettes, and husk, delivering consistent hot air with high efficiency and low emissions.",
        imgSrc:
          "/assets/products/direct-and-indirect-fired-suitable-for-solid fuel-firing.webp",

        featuresData: [
          "Vertical Hot Air Generators with Air Preheater for improved efficiency",
          "Vertical Indirect Fired Hot Air Generators for clean hot air output",
          "Compatible with solid fuels like coal, wood, briquettes, and husk",
          "Heavy-duty construction for continuous industrial operation",
          "Indirect models prevent contamination of process air",
          "Low running costs and reduced fuel consumption",
          "Optional cyclone dust collectors or bag filters for emission control",
        ],
      },
    ],
  },
];

export const otherProducts = [
  {
    label: "Hot Water Generator",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Efficient and durable hot water generators designed for continuous supply of hot water with low fuel consumption.",

    productData: [
      {
        title: "Hot Water Generator",
        imgSrc: "/assets/products/solid-fuel-fired-package-steam-boiler.webp",
        productDescription:
          "Efficient and durable hot water generators designed for continuous supply of hot water with low fuel consumption.",
        featuresData: [
          "Compact design with easy operation",
          "High thermal efficiency for cost savings",
          "Available in various capacities",
          "Low maintenance and long service life",
          "Environmentally friendly performance",
        ],
      },
    ],
  },
  {
    label: "Water Softening Plant",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Advanced water softening systems that remove hardness, reduce scaling, and improve overall plant efficiency.",

    productData: [
      {
        title: "Water Softening Plant",
        imgSrc: "/assets/products/water-softening-plant.webp",
        productDescription:
          "Advanced water softening systems that remove hardness, reduce scaling, and improve overall plant efficiency.",
        featuresData: [
          "Compact and economical design",
          "Easy installation and minimal space requirement",
          "Reduces fuel consumption and improves efficiency",
          "Prevents scale formation and chemical wastage",
          "Low maintenance and operational cost",
        ],
        brochure: "/water_softner.pdf",
      },
    ],
  },
  {
    label: "Waste Heat Recovery Boiler",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Energy-saving boilers that utilize waste heat from industrial processes to generate steam and improve efficiency.",

    productData: [
      {
        title: "Waste Heat Recovery Boiler",
        productDescription:
          "Energy-saving boilers that utilize waste heat from industrial processes to generate steam and improve efficiency.",
        imgSrc: "/assets/products/waste-heat-recovery-boiler.webp",

        featuresData: [
          "Recovers heat from flue gases",
          "Reduces fuel costs significantly",
          "Eco-friendly with lower emissions",
          "Customizable designs for applications",
          "Durable construction for long life",
        ],
      },
    ],
  },
  {
    label: "Electric Operated Steam Boiler",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Reliable and eco-friendly electric steam boilers suitable for industries requiring clean and efficient steam.",

    productData: [
      {
        imgSrc: "/assets/products/electrical-boiler.webp",

        title: "Electrical Boiler available Range",
        productDescription:
          "Compact electric boilers with wide range capacity, designed for safe and efficient steam generation.",
        featuresData: [
          "Range from 10 Kg/Hr to 400 Kg/Hr",
          "Pollution-free operation",
          "Quick start-up and shut down",
          "Compact and space-saving design",
          "Low noise and vibration",
        ],
      },
      {
        imgSrc: "/assets/products/electrical-heated-dual-type-boiler.webp",

        title: "Electrical Heated Dual Type Thermic / Boiler",
        productDescription:
          "Dual heating design for versatile applications in thermic and boiler operations.",
        featuresData: [
          "Dual heating capability for flexibility",
          "High efficiency with minimal losses",
          "Automatic temperature control",
          "Robust and safe construction",
          "Low maintenance operation",
        ],
        brochure: "/",
      },
    ],
  },
  {
    label: "Solid And Liquid Waste Incinerator",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Advanced incinerators for safe and eco-friendly disposal of solid, liquid, and hazardous waste.",
    productData: [
      {
        imgSrc: "/assets/products/incinerator.webp",

        title: "Incinerator",
        productDescription:
          "General-purpose waste incinerator designed for efficient and safe combustion.",
        featuresData: [
          "Capacity range 10 Kg/Hr to 400 Kg/Hr",
          "Efficient waste reduction",
          "Safe and pollution-controlled operation",
          "Long-lasting refractory lining",
          "Automatic temperature control",
        ],
      },
      {
        imgSrc: "/assets/products/incinerator-vertical-gas-fired.webp",

        title: "Incinerator Vertical Gas Fired",
        productDescription:
          "Vertical design gas-fired incinerator suitable for compact spaces and continuous waste disposal.",
        featuresData: [
          "Space-saving vertical design",
          "Gas-fired for clean burning",
          "Energy-efficient operation",
          "Easy ash removal system",
          "Durable construction",
        ],
      },
      {
        imgSrc: "/assets/products/incinerator-liquid-waste.webp",

        title: "Incinerator Liquid Waste",
        productDescription:
          "Specialized incinerator for safe and effective disposal of liquid hazardous waste.",
        featuresData: [
          "Handles liquid and semi-liquid waste",
          "High destruction efficiency",
          "Low emission design",
          "Robust burners for reliability",
          "Automatic control system",
        ],
      },
      {
        imgSrc: "/assets/products/incinerator-tarry-waste.webp",

        title: "Incinerator Tarry Waste",
        productDescription:
          "Designed for tarry, sticky, and high-residue waste incineration with efficient combustion.",
        featuresData: [
          "Efficient combustion of tarry waste",
          "Anti-clogging design",
          "High temperature resistant lining",
          "Low operational cost",
          "Safe emission control system",
        ],
      },
    ],
  },
  {
    label: "Dust Collectors Or Bag Filter",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Reliable dust collection and filtration systems for clean air, compliance, and improved working environments.",
    productData: [
      {
        imgSrc: "/assets/products/simplex-cyclone-seperator.webp",

        title: "Dust Collectors - Simplex Cyclone Seperator",
        productDescription:
          "Single cyclone separator designed for efficient dust removal from industrial exhaust.",
        featuresData: [
          "Compact and durable design",
          "High dust collection efficiency",
          "Low maintenance operation",
          "Handles wide range of dust loads",
          "Cost-effective solution",
        ],
        brochure: "/",
      },
      {
        imgSrc: "/assets/products/multi-cyclone-seperator.webp",

        title: "Dust Collectors - Multi Cyclone Seperator",
        productDescription:
          "Multiple cyclone separator system for higher efficiency in dust removal applications.",
        featuresData: [
          "Enhanced dust separation efficiency",
          "Suitable for heavy dust load",
          "Modular and customizable design",
          "Low pressure drop",
          "Long service life",
        ],
        brochure: "/",
      },
      {
        imgSrc: "/assets/products/bag-filter.webp",

        title: "Bag Filter",
        productDescription:
          "Heavy-duty bag filter system with ladder and railings for safe operation and maintenance.",
        featuresData: [
          "Robust metallic structure",
          "Optional climbing ladder and railings",
          "High dust collection capacity",
          "Easy bag replacement",
          "Ensures clean workplace environment",
        ],
        brochure: "/",
      },
    ],
  },
  {
    label: "Dowtherm Evaporator [Reboiler]",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Efficient dowtherm evaporators designed for heating, evaporation, and energy-efficient reboiling processes.",
    productData: [
      {
        imgSrc: "/assets/products/dowtherm-evaporator.webp",
        title: "Dowtherm Evaporator [Reboiler]",
        productDescription:
          "Efficient dowtherm evaporators designed for heating, evaporation, and energy-efficient reboiling processes.",
        featuresData: [
          "High heat transfer efficiency",
          "Robust and durable construction",
          "Handles wide temperature ranges",
          "Low energy consumption",
          "Minimal maintenance requirement",
        ],
        brochure: "/",
      },
    ],
  },
  {
    label: "Boiler Spares",
    get href() {
      return `/product/${toSlug(this.label)}`;
    },
    description:
      "Wide range of quality boiler spare parts ensuring reliable operation and long boiler life.",
    productData: [
      {
        imgSrc: "/assets/boiler-spares/broze-globe-valve-se.webp",

        title: "Bronze Globe Valve S/E",
        productDescription:
          "Durable bronze valve suitable for steam and water applications.",
        featuresData: [
          "Compact design",
          "Leak-proof sealing",
          "Long service life",
          "Easy installation",
          "Corrosion resistance",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/broze-globe-valve-fe.webp",
        title: "Bronze Globe Valves F/E",
        productDescription:
          "Flanged end globe valves for industrial steam systems.",
        featuresData: [
          "High strength design",
          "Smooth flow control",
          "Easy maintenance",
          "High temperature resistance",
          "Durable body construction",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/y-type-strainer-fe.webp",
        title: "'Y' Type Strainer F/E",
        productDescription:
          "Strainer for removing impurities and ensuring clean fluid flow.",
        featuresData: [
          "Efficient dirt removal",
          "Flanged connection",
          "Low pressure drop",
          "Durable mesh screen",
          "Easy cleaning process",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/non-return-valve.webp",
        title: "Non Return Valve",
        productDescription:
          "Reliable NRV to prevent reverse flow in piping systems.",
        featuresData: [
          "Prevents backflow effectively",
          "High pressure capacity",
          "Long service durability",
          "Compact design",
          "Easy to install",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/feed-check-valve.webp",
        title: "Acc. Feed Check Valve",
        productDescription:
          "Special valve for boiler feed regulation with accuracy.",
        featuresData: [
          "Precise feed water control",
          "Robust design",
          "Leak-proof operation",
          "Handles high pressure",
          "Long service life",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/cs-safety-relief-valve.webp",
        title: "C.S. Blow Down Valve",
        productDescription:
          "Carbon steel valve for efficient boiler blowdown operations.",
        featuresData: [
          "High strength construction",
          "Handles high temperature",
          "Quick discharge operation",
          "Prevents scale buildup",
          "Low maintenance",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/bronze-thermodynamic-steam-trap.webp",
        title: "Bronze Thermodynamic Steam Trap",
        productDescription:
          "Steam trap designed for automatic discharge of condensate.",
        featuresData: [
          "Reliable condensate removal",
          "Durable bronze construction",
          "High efficiency operation",
          "Long-lasting design",
          "Easy installation",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/cs-safety-relief-valve.webp",
        title: "C.S. Safety Relief Valve",
        productDescription:
          "Safety valve for pressure relief in steam systems.",
        featuresData: [
          "Automatic pressure release",
          "Carbon steel body",
          "High reliability",
          "Easy maintenance",
          "Protects equipment safety",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/steam-stop-globe-valve.webp",
        title: "Steam Stop Globe Valve",
        productDescription:
          "Valve used to regulate or stop steam flow in pipelines.",
        featuresData: [
          "Strong sealing performance",
          "Precise control",
          "Durable construction",
          "Heat resistant",
          "Easy operation",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/bronze-water-level-glass-coke-set.webp",
        title: "Bronze Water Level Glass Coke Set",
        productDescription: "Set for monitoring boiler water level accurately.",
        featuresData: [
          "Durable bronze build",
          "Clear glass visibility",
          "Leak-proof fittings",
          "Easy to replace",
          "Reliable performance",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/bronze-fusible-plug.webp",
        title: "Bronze Fusible Plug (2 Pcs. Design)",
        productDescription:
          "Safety fusible plug for boiler overheat protection.",
        featuresData: [
          "Two-piece safety design",
          "Quick melt protection",
          "Durable material",
          "Ensures boiler safety",
          "Reliable performance",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/ibr-mobery-dual-control-switch.webp",
        title: "IBR Mobery Dual Control Switch",
        productDescription:
          "Dual control switch for automatic boiler operation monitoring.",
        featuresData: [
          "Accurate level control",
          "Dual safety mechanism",
          "Easy installation",
          "Long life operation",
          "Reliable performance",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/ss-float-for-ibr-mobery-switch.webp",
        title: "S.S. Float for IBR Mobery Switch",
        productDescription:
          "Stainless steel float designed for Mobery switches.",
        featuresData: [
          "High corrosion resistance",
          "Accurate floating action",
          "Long service durability",
          "Robust SS material",
          "Reliable performance",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/air-break-switch.webp",
        title: "Air Break Switch",
        productDescription:
          "Switch designed for safe isolation of electrical circuits.",
        featuresData: [
          "High breaking capacity",
          "Ensures operator safety",
          "Durable contacts",
          "Easy to operate",
          "Compact design",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/heavy-duty-glass-tube.webp",
        title: "Heavy Duty Glass Tube",
        productDescription:
          "Strong glass tube for boiler water level indication.",
        featuresData: [
          "High pressure resistance",
          "Clear visibility",
          "Long life durability",
          "Easy installation",
          "Safe operation",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/graphite-sleeve.webp",
        title: "Graphite Sleeve (Gauge Glass Coke)",
        productDescription:
          "Graphite sleeve for sealing and supporting gauge glasses.",
        featuresData: [
          "High temperature resistance",
          "Leak-proof sealing",
          "Durable material",
          "Easy replacement",
          "Reliable fitting",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/ss-vertical-water-feed-pump.webp",
        title: "S. S. Vertical Water Feed Pump",
        productDescription:
          "Stainless steel water pump for efficient feed to boilers.",
        featuresData: [
          "High pumping efficiency",
          "Corrosion resistant SS body",
          "Compact vertical design",
          "Durable and reliable",
          "Low maintenance",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/danfos-pressure-switch.webp",
        title: "'Danfos' Pressure Switch",
        productDescription:
          "Pressure switch for controlling and protecting boiler systems.",
        featuresData: [
          "Accurate pressure detection",
          "Quick switching action",
          "Durable and reliable",
          "Compact design",
          "Ensures safety",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/heavy-duty-rubber-cone.webp",
        title: "Heavy Duty Rubber Cone",
        productDescription:
          "Robust rubber cone for industrial boiler applications.",
        featuresData: [
          "High wear resistance",
          "Durable rubber material",
          "Long operational life",
          "Easy fitting",
          "Reliable sealing",
        ],
      },
      {
        imgSrc: "/assets/boiler-spares/oil-spray-nozzle.webp",
        title: "Oil Spray Nozzle",
        productDescription:
          "Efficient nozzle designed for proper fuel oil atomization in burners.",
        featuresData: [
          "Uniform spray pattern",
          "High combustion efficiency",
          "Durable material",
          "Reduces fuel consumption",
          "Easy to maintain",
        ],
      },
    ],
  },
];

// Combine all products into one lookup object for the dynamic page
export const allProducts = [...productCategories, ...otherProducts].reduce(
  (acc, product) => {
    const slug = toSlug(product.label);
    acc[slug] = product;
    return acc;
  },
  {}
);
