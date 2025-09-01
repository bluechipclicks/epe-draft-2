// components/ServiceList.js
import {
  FaProjectDiagram,
  FaGlobe,
  FaTruck,
  FaTiktok,
} from "react-icons/fa";
// import { SiSwipe } from "react-icons/si";

const services = [
  {
    id: "01",
    title: "Affiliate Marketing",
    icon: <FaProjectDiagram className="text-white text-xl" />,
    bg: "bg-[#2b2b2b]",
  },
  {
    id: "02",
    title: "Global Partner Marketing",
    icon: <FaGlobe className="text-white text-xl" />,
    bg: "bg-[#454545]",
  },
  {
    id: "03",
    title: "Amazon Affiliates",
    icon: <FaTruck className="text-white text-xl" />,
    bg: "bg-[#5a5a5a]",
  },
  {
    id: "04",
    title: "TikTok Shop Affiliates",
    icon: <FaTiktok className="text-white text-xl" />,
    bg: "bg-[#6e6e6e]",
  },
  {
    id: "05",
    title: "Swipehouse",
    icon: <FaTiktok className="text-white text-xl" />,
    bg: "bg-gradient-to-r from-sky-400 via-blue-500 to-white text-white",
  },
];

export default function ServiceList() {
  return (
        <div className="bg-[#2D2D2D] text-white h-screen flex items-center justify-center ">

    <div className="w-full  mt-20  overflow-hidden shadow-lg">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex justify-around items-center px-8 py-6 border-b border-white/60 ${service.bg}`}
        >
          {/* Index */}
          <div className="text-white font-medium w-12 text-center">
            {service.id}
          </div>

          {/* Icon + Title */}
          <div className="flex items-center gap-4">
            {service.icon}
            <span className="text-white text-lg md:text-3xl">
              {service.title}
            </span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
