import React from 'react'
import TextAnimation from './TestAnimation'

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text animation */}
      <div className="absolute inset-0 ">
        <TextAnimation />
      </div>
    </div>
  )
}

export default HeroSection
