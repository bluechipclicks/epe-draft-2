import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";

const ProductCard = ({ productData, index }) => {
  const isEven = index % 2 === 0 ? true : false;
  // Determine the order of columns based on the isEven prop
  const imageOrderClass = isEven ? "md:order-last" : "";
  const contentOrderClass = isEven ? "md:order-first" : "";

  // Determine the position of the background overlay
  const overlayPositionClass = isEven
    ? "md:left-0 md:right-[24%]"
    : "md:left-[30%] md:right-0";

  return (
    // The main container with group utility for hover effects
    <>
      <div className=" pb-12 md:pb-20">
        <div className="group relative overflow-hidden md:rounded-[50px] bg-gray-100/40 md:bg-transparent px-6 md:px-0 pt-6 md:pt-0 rounded-3xl ">
          {/* Background overlay that appears on hover */}
          <div
            className={`absolute top-0 bottom-0 h-full  bg-gray-100/80 rounded-[50px] z-0 ${overlayPositionClass}`}
          ></div>
          <div
            className={`absolute top-0 bottom-0 h-full bg-gray-200/80 rounded-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 ${overlayPositionClass}`}
          ></div>

          {/* Grid container for the two-column layout */}
          <div className="relative grid grid-cols-1 md:grid-cols-2">
            {/* Image Column */}
            <div className={`pr-0 flex justify-center ${imageOrderClass}`}>
              <div className="transition-transform duration-300 group-hover:scale-90">
                {productData?.imgSrc && (
                  <Image
                    src={productData.imgSrc} // Place your image in the `public` folder
                    alt="Bag Filter System"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                )}
              </div>
            </div>

            {/* Content Column */}
            <div className={`pl-0 ${contentOrderClass}`}>
              <div className="block pl-0 text-left md:py-12 md:pl-12">
                <div className="work-card-content">
                  {productData?.title && (
                    <h3 className="text-2xl font-bold  md:text-3xl">
                      {" "}
                      {productData.title}
                    </h3>
                  )}
                  {productData?.productDescription && (
                    <p className="mt-4 text-base text-gray-600">
                      {productData.productDescription}
                    </p>
                  )}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-700">
                      Features
                    </h4>
                  </div>

                  <ul className="mt-4 mb-8 space-y-2">
                    {productData?.featuresData &&
                      productData.featuresData.map((feature, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <FaChevronRight className="text-[#DC2621] " />

                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                  </ul>
                  {productData?.brochure && (
                    <a
                      href={productData.brochure} // The path to your brochure in the public folder
                      download={productData.brochure} // The desired filename for the download
                      className="tag gap-4 py-2 px-8 border hover:border-gray-300/60 w-fit mb-6 flex items-center bg-transparent border-[#DC2621] text-[#DC2621] hover:text-white rounded hover:bg-[#DC2621] transition-colors"
                    >
                       <TbDownload className="animate-bounce" /> Download Brochure
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {productData?.tableData && (
          <div className=" md:px-12 my-6">
            <h3 className=" font-bold  md:text-2xl mb-6 text-left">
              Technical Data of {productData.title}
            </h3>
            <div className="overflow-auto rounded border border-gray-300 shadow-md">
              <table className="min-w-max w-full text-sm text-left text-gray-700 bg-white ">
                <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                  <tr>
                    {productData?.tableData?.columns?.map((col, index) => (
                      <th key={index} className="px-4 py-3 border">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {productData?.tableData?.rows?.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="font-medium px-4 py-3 border">
                        {row.label}
                      </td>
                      {row?.values.map((value, vIdx) => (
                        <td key={vIdx} className="px-4 py-3 border text-right">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
