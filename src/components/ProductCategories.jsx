import CommonChipHeading from "./CommonChipHeading";
import ProductCategoryCard from "./ProductCategoryCard";

export default function ProductCategories() {
  const products = [
    {
      name: "IBR Boiler",
      image: "/assets/products/ibr.webp", // Replace with a different image
    },

    {
      name: "Small Industrial Boiler [SIB]",
      image: "/assets/products/sib.webp", // Replace with a different image
    },

    {
      name: "Thermic Fluid Heaters [Thermopack]",
      image: "/assets/products/thermopack.webp",
    },
    {
      name: "Hot Air Generators",
      image: "/assets/products/hot-air-generators.webp",
    },
  ];
  return (
    <div
      className="relative  bg-[#252525]"
      style={{
        backgroundImage: "url('/assets/product-category-bg.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-2 gap-12">
          <h2 className="text-4xl md:text-5xl font-semibold  mb-12 text-white max-w-2xl leading-14">
            Reliable Boilers Built for Every Need
          </h2>
          <div>
            <CommonChipHeading chipTitle={"Product Categories"} />
            <p className="text-white mt-4 text-lg font-semibold">
              Energy Process Equipments (EPE) offers innovative and reliable
              solutions, including IBR Boilers and Heating Systems.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-12">
          <ProductCategoryCard
            imageSrc="/assets/products/ibr.webp" // replace with your actual image
            title="IBR Boiler"
            summary="Proven, Safe Economical, Energy Saving, Smoke Tube Horizontal Steam Boiler"
            details={{
              description:
                "All product designed and manufactured by EPE are highly efficient due to extensive testing and actual product line application.",
              metric1: {
                label: "Solid Fuel Fired Package Steam Boiler",
                value: "$4.8M",
              },
              metric2: {
                label: "Oil / Gas Fired Package Steam Boiler",
                value: "+7%",
              },
              metric3: {
                label: "Water Wall Membrane Steam Boiler",
                value: "High",
              },
            }}
          />
          <ProductCategoryCard
            imageSrc="/assets/products/sib.webp" // replace with your actual image
            title="Small Industrial Boiler [SIB]"
            summary="Compact and efficient Small Industrial Boilers, perfect for small to medium-scale operations."
            details={{
              description:
                "Small Industrial Boiler Design, Manufacturing & Inspection is as per Indian Boiler Regulation Act. Chapter XIV & to provide with all papers like Boiler Certificate (Form XVII).",
              metric1: {
                label: "Horizontal Smoke Tube Type Steam Boiler",
                value: "Revenue growth in first 12 months",
              },
              metric2: {
                label: "Vertical Coil Type Steam Boiler",
                value: "Increase in total partners",
              },
            }}
            isEven={true}
          />
          <ProductCategoryCard
            imageSrc="/assets/products/thermopack.webp" // replace with your actual image
            title="Thermic Fluid Heaters [Thermopack]"
            summary="Advanced Thermic Fluid Heaters that provide high-temperature heat transfer at low pressure."
            details={{
              description: "Details about the ride sharing case.",
              metric1: {
                label: "Solid Fuel Fired Vertical Thermic Fluid Heater",
                value: "$4.8M",
              },
              metric2: {
                label:
                  "Oil / Gas Fired Thermic Fluid Heater [Horizontal / Vertical]",
                value: "+7%",
              },
            }}
          />
          <ProductCategoryCard
            imageSrc="/assets/products/hot-air-generators.webp" // replace with your actual image
            title="Hot Air Generators"
            summary="Robust Hot Air Generators for direct and indirect heating applications in various industries."
            details={{
              description:
                "With a growing number of brands entering the online furniture market, Burrow needed a strategic edge to scale their business.",
              metric1: {
                label: "Direct & Indirect Fired suitable for Oil / Gas",
                value: "Revenue growth in first 12 months",
              },
              metric2: {
                label: "Direct & Indirect Fired suitable for Solid Fuel Firing",
                value: "Increase in total partners",
              },
            }}
            isEven={true}
          />
        </div>
      </div>
    </div>
  );
}
