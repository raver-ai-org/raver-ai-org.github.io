import React from 'react'
import VideoPlayer from './VideoPlayer'

const AdvertisingSection: React.FC = () => {
  return (
    <div className='bg-[#272a34] w-full ' id='about'>
      <div className=' py-32 px-16 flex flex-col gap-16 max-w-[94.5rem] mx-auto'>
        <div className='flex flex-col gap-6 max-w-[719px]'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-[#c3969a] font-cormorant font-bold text-3xl leading-[39px]'>
              Advertising led by the human heart
            </h2>
            <p className='text-[#c3969a] font-poppins font-medium text-lg leading-[27px]'>
              Powered by AI
            </p>
          </div>

          <div className='w-full h-[1px] bg-[#8e6f77]'></div>

          <p className='text-[#c3969a] font-poppins text-base leading-8'>
            We infuse every customer experience with joy, personality, and
            purpose leaving them moved, inspired, and truly connected.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-16 w-full'>
          <div className='flex flex-col gap-6 max-w-[308px]'>
            <h3 className="text-[#c3969a] font-['Cormorant_Infant'] font-bold text-2xl leading-8">
              Raver is your storytelling partner.
            </h3>
            <p className='text-[#8e6f77] font-poppins text-base leading-8'>
              Raver helps businesses connect with their audiences in ways that
              feel personal and relatable.
            </p>
            <p className='text-[#8e6f77] font-poppins text-base leading-8'>
              We bring joy, personality, and purpose to every customer we serve.
            </p>
          </div>

          <div className='flex flex-col gap-6 max-w-[308px]'>
            <h3 className="text-[#c3969a] font-['Cormorant_Infant'] font-bold text-2xl leading-8">
              Saving time and resources while maximizing results.
            </h3>
            <p className='text-[#8e6f77] font-poppins text-base leading-8'>
              Our approach fuses AI efficiency with human emotion, to craft
              deeply engaging, relatable, and impactful marketing campaigns.
            </p>
            <p className='text-[#8e6f77] font-poppins text-base leading-8'>
              We don't just generate content - we create experiences, one story
              at a time.
            </p>
          </div>

          <div className='relative w-full md:w-[640px] h-[360px] rounded-[3px] overflow-hidden'>
            <div className='absolute inset-0 flex items-center justify-center z-10 pointer-events-none'>
              <div className='w-[72px] h-[72px] flex items-center justify-center'></div>
            </div>
            <div className='w-full h-full bg-[#1a1c25] rounded-[3px]'>
              <VideoPlayer
                src='https://example.com/advertising-video.mp4' // Replace with actual video URL
                maxWidth='100%'
                height='360px'
                borderRadius='3px'
                className='w-full h-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvertisingSection
