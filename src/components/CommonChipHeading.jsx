import React from 'react'

const CommonChipHeading = ({chipTitle}) => {
  return (
   <div className=" font-semibold flex items-center gap-4">
           <div className="relative w-4 h-4">
              <span className="absolute inset-0 bg-red-500 rounded-full animate-ping"></span>
              <span className="absolute inset-0 bg-gradient-to-b from-red-400 via-red-500 to-red-600 rounded-full"></span>
            </div>  <h2 className='text-gray-300 text-lg md:text-xl uppercase font-bold'>{chipTitle}</h2>
          </div>
  )
}

export default CommonChipHeading