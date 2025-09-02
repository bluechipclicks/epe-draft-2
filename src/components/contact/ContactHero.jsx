import Image from 'next/image'
import React from 'react'

const ContactHero = () => {
  return (
      <div className="h-[400px] md:h-[650px] bg-black/80 bg-cover bg-center" style={{backgroundImage:"url(/assets/contact-us.webp)"}}>
        <div className='flex w-full justify-center items-center pt-44'>
                  <Image src="/assets/contact-us-text.png" alt="contact us" width={1200} height={600}/>

        </div>
      </div>
  )
}

export default ContactHero