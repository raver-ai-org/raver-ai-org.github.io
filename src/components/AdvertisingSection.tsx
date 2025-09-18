import adVideo from '../assets/vid0-DiorLipstick.webm'
import VideoPlayer from './VideoPlayer'

const AdvertisingSection = () => {
  return (
    <div className='bg-[#272a34] w-full' id='about'>
      <div className='py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-8 sm:gap-10 md:gap-12 max-w-[90rem] mx-auto'>
        <div className='flex flex-col gap-4 max-w-full sm:max-w-[70%] md:max-w-[650px]'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-[#c3969a] font-cormorant font-bold text-2xl sm:text-3xl leading-[32px] sm:leading-[39px] uppercase'>
              Ready to Create Limitless Beauty Experiences?
            </h2>
            <p className='text-[#c3969a] font-poppins font-medium text-base sm:text-lg leading-[24px] sm:leading-[27px]'>
              Get Started with RAVER
            </p>
          </div>

          <div className='w-full h-[1px] bg-[#8e6f77]'></div>

          <p className='text-[#c3969a] font-poppins text-sm sm:text-base leading-6 sm:leading-7'>
            Reach your audience with the energy and authenticity 
            they crave. RAVER makes it effortless to launch 
            visually stunning, results-driven campaigns that 
            inspire loyalty and drive business growth, 
            powered by AI, always true to your unique brand voice.
          </p>
        </div>
      
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 w-full'>
          <div className='relative w-full h-[240px] sm:h-[300px] md:h-[360px] sm:col-span-2 lg:col-span-6 rounded-[3px] overflow-hidden mt-4 sm:mt-6 lg:mt-0 lg:max-w-[640px]'>
            <div className='absolute inset-0 flex items-center justify-center z-10 pointer-events-none'>
              <div className='w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] flex items-center justify-center'></div>
            </div>

            <div className='w-full h-full rounded-[3px] flex justify-center items-center'>
              <div className='w-full max-w-[640px] h-full flex justify-center flex-col'>
                <VideoPlayer
                  showOverlay
                  src={adVideo}
                  maxWidth='100%'
                  height='100%'
                  borderRadius='3px'
                  className='h-full w-full'
                  aspectRatio='16/9'
                />

                <div className='mt-4 text-[#8E6F77] font-poppins text-base font-normal leading-8'>
                  The journey of advertising through the lens of Raver.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvertisingSection
