// app/page.tsx (Next.js 13+ App Router)
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-[#1a1a1d]">
      {/* Container */}
      <div className="relative flex w-[900px] h-[500px] bg-[#222225] rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center p-10 w-1/2 text-white space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Blvck <br /> Tumbler
          </h1>
          <div>
            <h2 className="text-sm uppercase tracking-widest opacity-70">Blvck Lifestyle Lovers</h2>
            <p className="mt-2 text-sm opacity-60 max-w-xs">
              A premium matte black tumbler designed for minimalists and lifestyle lovers.
            </p>
          </div>
          <div className="h-1 w-20 bg-orange-500 rounded"></div>
        </div>

        {/* Center Product */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/assets/products/sib.webp" // Replace with your image
            alt="Blvck Tumbler"
            width={300}
            height={300}
            className="drop-shadow-2xl"
          />
          {/* Orange Circle Accent */}
          <div className="absolute top-10 -right-20 w-36 h-36 border-[8px] border-orange-500 rounded-full"></div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-end p-10 w-1/2 text-white">
          <div className="max-w-sm text-right">
            <h2 className="text-sm uppercase tracking-widest opacity-70">The Design</h2>
            <p className="mt-2 text-sm opacity-60">
              Minimal matte look with premium finish and ergonomic design for everyday use.
            </p>
          </div>
          <div className="mt-8">
            <button className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
              Explore →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
