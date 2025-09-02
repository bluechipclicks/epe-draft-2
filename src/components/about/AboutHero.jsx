import Head from "next/head";
import Image from "next/image";

const AboutHero = () => {
  return (
    <>
      {/* Main container for the page with a light gray background */}
      <div className="h-[400px] md:h-[650px] bg-black/80 bg-cover bg-center" style={{backgroundImage:"url(/assets/about-us.webp)"}}></div>
      <div className="py-12 sm:py-20">
        <div className=" w-full px-6 lg:px-8">
          <h1 className="text-5xl md:text-9xl tracking-wider font-semibold">
            ABOUT US
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-8">
            {/* Column 1 */}
            <div className="w-full md:w-[30%]">
              <div className="  space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Quality
                </h3>
                <p className=" text-sm md:text-base  mb-8">
                  The guiding principle of Energy Process Equipments (EPE) is to
                  "NEVER COMPROMISE ON QUALITY & SAFETY". The company’s boilers
                  have earned a strong reputation for reliable performance and
                  dedicated support. Each boiler is a carefully designed
                  package, engineered and manufactured by skilled professionals.
                  Every unit undergoes precise testing to ensure maximum
                  efficiency before dispatch.
                </p>
                <div className="relative w-full aspect-[4/2] rounded-3xl overflow-hidden shadow-xl">
                  <video
                    className=" w-full h-full object-cover"
                    src="/about-boiler1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>

            {/* Column 2 (Corrected) */}
            <div className="w-full md:w-[40%]">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-full">
                <video
                  className=" w-full h-full object-cover"
                  src="/hero-bg.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="w-full md:w-[30%]">
              <div className="relative w-full aspect-[4/2] rounded-3xl overflow-hidden shadow-xl">
                <video
                  className=" w-full h-full object-cover"
                  src="/about-boiler2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="px-1 mt-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Reliable Solutions{" "}
                </h3>
                <p className="mt-2 text-sm md:text-base ">
                  With over 15 years of expertise, EPE provides reliable
                  boilers, ensuring durability, advancement, and customer-driven
                  innovation. Over the years, the boilers developed by EPE have
                  been successfully applied across numerous industries. The
                  premium quality products manufactured by the company have been
                  well accepted by several users and distributors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
