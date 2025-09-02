import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { RiArrowRightDoubleFill } from "react-icons/ri";

export default function ProductCategoryCard({
  imageSrc,
  title,
  summary,
  details,
  isEven,
}) {
  return (
    <div
      className={`w-full overflow-hidden rounded-2xl cursor-pointer group transition-transform duration-300 hover:-translate-y-2 ${
        isEven ? "mt-28" : "mt-0"
      }`}
    >
      {/* Image Section (Now relative for overlay positioning) */}
      <div className="relative bg-[#202020] dark:bg-[#e6f0e6] p-6 rounded-2xl flex justify-center items-center h-[650px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={700}
          height={700}
          className="object-contain rounded-lg z-0"
        />

        {/* Hover Details (Overlay ONLY on image) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-red-50 rounded-2xl dark:bg-[#f4f9f4] p-6 md:p-12 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10">
          <h3 className="font-semibold text-4xl mb-6">{title}</h3>
          <p className="text-sm md:text-lg mb-6 text-[#252525]">
            {details.description}
          </p>
          <div className="space-y-6 text-xl font-semibold text-[#252525]">
            <p className="border-b border-gray-200 pb-4  flex items-center gap-2">
              <RiArrowRightDoubleFill className="text-[#DC2621]" /> {details.metric1.label}
            </p>
            <p className="border-b border-gray-200 pb-4  flex items-center gap-2">
              <RiArrowRightDoubleFill className="text-[#DC2621]" />
              {details.metric2.label}
            </p>
            {details.metric3 && (
              <p className="  flex items-center gap-2">
                <RiArrowRightDoubleFill className="text-[#DC2621]" />
                {details.metric3.label}
              </p>
            )}
          </div>
          <div className="absolute bottom-8 bg-[#DC2621] text-white px-8 py-2 text-lg rounded-lg">
            <Link href={"#"} className="flex items-center gap-2">
              View Products <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Text Summary (below image) */}
      <div className="text-white p-4">
        <h3 className="font-bold text-4xl">{title}</h3>
        <p className="text-lg mt-4 text-gray-300 max-w-md">{summary}.</p>
      </div>
    </div>
  );
}
