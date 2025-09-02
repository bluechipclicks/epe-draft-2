import React from "react";
import { productCategories } from "@/app/data/products";
import ProductCategories from "@/components/productCategory/ProductCategories";
import ContactForm from "@/components/contact/ContactForm";

const page = () => {
  return (
    <>
      <div
        className="h-[400px] md:h-[650px] bg-black/80 bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/contact-us.webp)" }}
      >
        <div className="flex w-full justify-center pt-32 md:pt-72 ">
          <h1 className="text-5xl md:text-7xl lg:text-9xl text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 font-bold">
            OUR PRODUCTS
          </h1>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-6 md:px-8 ">
        {productCategories?.map((productCategory, categoryIndex) => (
          <div key={categoryIndex} className="text-center ">
            <h1 className="text-3xl md:text-7xl font-bold text-black">
              {productCategory.label}
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mt-4 mb-4 md:mb-20 max-w-5xl mx-auto">
              {productCategory.description}
            </p>
            {productCategory.productData?.map((product, productIndex) => (
              <ProductCategories
                productData={product}
                key={productIndex}
                index={productIndex}
              />
            ))}
          </div>
        ))}
      </div>
      <ContactForm/>
    </>
  );
};

export default page;
