import { notFound } from "next/navigation";
import Image from "next/image";
import { allProducts } from "@/app/data/products"; // Adjust path if needed
import ProductCategories from "@/components/productCategory/ProductCategories";
import ContactForm from "@/components/contact/ContactForm";

// This function tells Next.js which pages to pre-build at build time
export async function generateStaticParams() {
  return Object.keys(allProducts).map((slug) => ({
    slug: slug,
  }));
}

// The main component for the product page
const ProductPage = async ({ params }) => {
  const { slug } = await params; // Await the params object here
  const product = allProducts[slug];

  // If a user navigates to a URL that doesn't match a product, show a 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="">
      <div
        className="h-[400px] md:h-[650px] bg-black/80 bg-cover bg-center flex  items-center text-center w-full justify-center "
        style={{ backgroundImage: "url(/assets/contact-us.webp)" }}
      >
        <div className="flex flex-col items-center text-center w-full justify-center  ">
          <h1 className="text-5xl md:text-7xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 font-bold max-w-7xl mx-auto mb-4 md:mb-6">
            {product.label}
          </h1>
          <p className="text-sm md:text-2xl max-w-4xl text-white md:text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 font-bold px-6">
            {product.description}
          </p>
        </div>
      </div>
      <main className="pt-6 md:pt-20 pb-6 md:pb-20">
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          {/* Page Header */}
          {/* <div className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-7xl font-bold text-black"></h1>
            <p className="text-sm md:text-lg text-gray-600 mt-4 max-w-5xl mx-auto">
              {product.description}
            </p>
          </div> */}

          {product?.productData?.map((pd, index) => (
            <ProductCategories productData={pd} key={index} index={index} />
          ))}
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default ProductPage;
