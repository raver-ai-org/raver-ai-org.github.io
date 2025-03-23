import adVideo from '../assets/journey-of-ads.webm'
import VideoPlayer from './VideoPlayer'

const AdvertisingSection = () => {
  return (
    <div className='bg-[#272a34] w-full' id='about'>
      <div className='py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-8 sm:gap-12 md:gap-16 max-w-[94.5rem] mx-auto'>
        <div className='flex flex-col gap-4 sm:gap-6 max-w-full sm:max-w-[80%] md:max-w-[719px]'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-[#c3969a] font-cormorant font-bold text-2xl sm:text-3xl leading-[32px] sm:leading-[39px] uppercase'>
              Advertising led by the human heart
            </h2>
            <p className='text-[#c3969a] font-poppins font-medium text-base sm:text-lg leading-[24px] sm:leading-[27px]'>
              Powered by AI
            </p>
          </div>

          <div className='w-full h-[1px] bg-[#8e6f77]'></div>

          <p className='text-[#c3969a] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
            We infuse every customer experience with joy, personality, and
            purpose leaving them moved, inspired, and truly connected.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 w-full'>
          <div className='flex flex-col gap-4 sm:gap-6 w-full'>
            <h3 className="text-[#c3969a] font-['Cormorant_Infant'] font-bold text-xl sm:text-2xl leading-7 sm:leading-8">
              Raver is your storytelling partner.
            </h3>
            <p className='text-[#8e6f77] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
              Raver helps businesses connect with their audiences in ways that
              feel personal and relatable.
            </p>
            <p className='text-[#8e6f77] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
              We bring joy, personality, and purpose to every customer we serve.
            </p>
          </div>

          <div className='flex flex-col gap-4 sm:gap-6 w-full'>
            <h3 className="text-[#c3969a] font-['Cormorant_Infant'] font-bold text-xl sm:text-2xl leading-7 sm:leading-8">
              Saving time and resources while maximizing results.
            </h3>
            <p className='text-[#8e6f77] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
              Our approach fuses AI efficiency with human emotion, to craft
              deeply engaging, relatable, and impactful marketing campaigns.
            </p>
            <p className='text-[#8e6f77] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
              We don't just generate content - we create experiences, one story
              at a time.
            </p>
          </div>

          <div className='relative w-full h-[240px] sm:h-[300px] md:h-[360px] sm:col-span-2 lg:col-span-1 rounded-[3px] overflow-hidden mt-4 sm:mt-8 lg:mt-0'>
            <div className='absolute inset-0 flex items-center justify-center z-10 pointer-events-none'>
              <div className='w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] flex items-center justify-center'></div>
            </div>
            <div className='w-full h-full bg-[#1a1c25] rounded-[3px]'>
              <VideoPlayer
                src={adVideo}
                maxWidth='100%'
                height='100%'
                borderRadius='3px'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvertisingSection
