import React from 'react'
import video from '../assets/video.mp4'
import VideoPlayer from './VideoPlayer'

const AboutSection: React.FC = () => {
  return (
    <section
      id='about'
      className='flex flex-col py-12 sm:py-16 md:py-20 gap-10 sm:gap-12 md:gap-16 lg:gap-20 max-w-[95%] sm:max-w-[90%] lg:max-w-[95%] mx-auto'
    >
      <div className='flex flex-col justify-center items-center gap-3 md:gap-4 max-w-[880px] mx-auto'>
        <h2 className='text-center font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight'>
          Advertising led by the human heart - powered by AI
        </h2>
        <p className='text-center text-base sm:text-lg md:text-xl lg:text-[24px] font-medium leading-relaxed sm:leading-7 md:leading-8'>
          We infuse every customer experience with joy, personality, and purpose
          leaving them moved, inspired, and truly connected.
        </p>
      </div>

      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full'>
          <div className='grid grid-cols-1 2xl:grid-cols-2 gap-6 md:gap-8'>
            <div className='p-5 sm:p-6 md:p-8 h-full rounded-[24px] md:rounded-[32px] lg:rounded-[40px] flex flex-col justify-between bg-[#262832]'>
              <div className='flex flex-col gap-4 sm:gap-6 md:gap-8'>
                <h3 className='font-playfair text-xl sm:text-2xl 2xl:text-3xl font-bold text-white leading-snug'>
                  Raver is your storytelling partner, helping businesses connect
                  with their audiences in ways that feel personal and relatable.
                </h3>
                <p className='text-white font-montserrat text-sm sm:text-base md:text-lg 2xl:text-xl font-medium leading-relaxed sm:leading-7'>
                  We bring joy, personality, and purpose to every customer we
                  serve.
                </p>
              </div>
            </div>

            <div className='p-5 sm:p-6 md:p-8 h-full rounded-[24px] md:rounded-[32px] lg:rounded-[40px] flex flex-col justify-between bg-[#F4EDEC]'>
              <div className='flex flex-col gap-4 sm:gap-6 md:gap-8'>
                <h3 className='font-playfair text-xl sm:text-2xl 2xl:text-3xl font-bold text-black leading-snug'>
                  Saving time and resources while maximizing results.
                </h3>
                <p className='text-black font-montserrat text-sm sm:text-base md:text-lg 2xl:text-xl font-medium leading-relaxed sm:leading-7'>
                  Our approach fuses AI efficiency with human emotion, to craft
                  deeply engaging, relatable, and impactful marketing campaigns.
                </p>
                <p className='text-black font-montserrat text-sm sm:text-base md:text-lg 2xl:text-xl font-bold leading-relaxed sm:leading-7'>
                  We don't just generate content - we create experiences, one
                  story at a time.
                </p>
              </div>
            </div>
          </div>

          <div className='w-full h-full flex items-center'>
            <div className='w-full h-full '>
              <VideoPlayer
                src={video}
                borderRadius='16px sm:24px md:32px'
                className='w-full h-full rounded-[24px] md:rounded-[32px] lg:rounded-[40px]'
                height='100%'
                maxWidth='100%'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
