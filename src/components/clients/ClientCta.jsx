import React from 'react'

const ClientCta = () => {
  return (
  <div className="bg-black py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium mb-10 text-center text-white">
            Want To Explore Our Client Network?
          </h2>

          <a
            href={"/clientele.pdf"}
            download={"energy-process-equipments-clients.pdf"}
            className="bg-[#DC2621] text-white py-3 h-fit mt-8 md:mt-0 px-8 rounded hover:bg-transparent hover:border-white   font-medium  border border-black transition-colors duration-300 md:text-base text-sm"
          >
            View All Clients
          </a>
        </div>
      </div>  )
}

export default ClientCta