// components/AwardsSection.jsx
import React from 'react';

const AwardItem = ({ title, awardName, recipient, description, bgColor, hasGlow = false }) => {
  return (
    <div
      className={`relative p-8 overflow-hidden transition-all duration-300 ease-in-out 
        ${bgColor}
        ${hasGlow ? 'group' : ''} // Add group class for hover effect
      `}
    >
      {/* Hover Glow Effect */}
      <div
        className={`absolute bottom-0 right-0 w-1/3 h-2/5 opacity-0 transition-opacity duration-500 ease-in-out
          bg-gradient-to-br from-[#00c6ff] via-[#0072ff] to-[#00c6ff] rounded-full filter blur-2xl z-0
          group-hover:opacity-40 transform translate-x-1/4 -translate-y-1/4 // Adjust position for top-right corner
        `}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between max-w-7xl mx-auto ">
        <h3 className="text-4xl font-semibold text-gray-200 mb-4 md:mb-0 md:w-3/5">
          {title}
        </h3>
        <div className="flex  text-gray-400 md:w-2/3">
          <span className="text-2xl mr-3">🏆</span> {/* Award icon */}
          <div>
            <p className="text-2xl font-medium text-white">{awardName}</p>
            {/* {recipient && <p className="text-sm mt-6">{recipient}</p>} */}
            {description && <p className="text-lg mt-6 text-gray-300 font-semibold">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceAwards = () => {
  return (
    <section className="min-h-screen  bg-black flex flex-col justify-center items-center">
      <div className=" w-full">
        <AwardItem
          title="US Partnership Awards 2025"
          awardName="Top 3 Boutique Agencies"
          description="Shortlisted as one of the Top 3 Boutique Agencies at the US Partnership Awards 2025."
          bgColor="bg-[#262626]"
          hasGlow={true}
        />
        <AwardItem
          title="US Partnership Awards 2025"
          awardName="One to Watch Finalist (MVP Award)"
          recipient="Joseph Waite, Account Manager"
          description="— One to Watch Finalist (MVP Award), US Partnership Awards 2025."
          bgColor="bg-[#202020]"
          hasGlow={true}
        />
        <AwardItem
          title="Forbes 30 under 30 2023"
          awardName="Marketing"
          recipient="Faique Moqeet, CEO"
          description="— Forbes 30 Under 30 for Marketing, 2023"
          bgColor="bg-[#262626]"
          hasGlow={true}
        />
      </div>
    </section>
  );
};

export default ServiceAwards;