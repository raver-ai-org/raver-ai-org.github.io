import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import slayyy from '../assets/slayyy.webm'
import VideoPlayer from './VideoPlayer'

const AboutUsSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = [
    {
      src: slayyy,
      caption:
        'Created for Slayyy, this video showcases the beauty of transformation with luxurious hair extensions and high-fashion aesthetics.',
    },
    {
      src: slayyy,
      caption:
        'Highlighting the versatility and elegance of premium hair extensions for the modern fashion enthusiast.',
    },
    {
      src: slayyy,
      caption:
        "Demonstrating the artistry behind Slayyy's signature styling techniques and transformative beauty solutions.",
    },
  ]

  const goToPrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const goToNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  return (
    <div
      className='bg-[#c3969a] w-full flex justify-center items-center'
      id='work'
    >
      <div className='flex flex-col md:flex-row items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 gap-8 md:gap-12 lg:gap-32 bg-[#c3969a] max-w-[94.5rem] mx-auto'>
        <div className='flex flex-col w-full md:w-2/5 lg:w-[360px] gap-4'>
          <div className='relative w-full aspect-[9/16] sm:aspect-auto sm:h-[480px] md:h-[520px] lg:h-[640px] rounded-[3px] overflow-hidden'>
            <VideoPlayer
              showOverlay
              src={videos[currentVideoIndex].src}
              maxWidth='100%'
              height='100%'
              borderRadius='3px'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
              <div className='w-[72px] h-[72px] flex items-center justify-center'></div>
            </div>
          </div>

          <div className='flex flex-col items-center py-2 sm:py-4 gap-3 sm:gap-4'>
            <p className='text-[#272a34] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
              {videos[currentVideoIndex].caption}
            </p>

            <div className='flex justify-between items-center w-full'>
              <p className='text-[#272a34] font-poppins text-base sm:text-lg leading-6 sm:leading-8'>
                0{currentVideoIndex + 1}/
                <span className='text-[#8e6f77]'>03</span>
              </p>

              <div className='flex items-center gap-3 sm:gap-4'>
                <button
                  onClick={goToPrevVideo}
                  className='w-10 h-10 border border-[#8e6f77] rounded-[4px] flex items-center justify-center text-[#8e6f77]'
                  aria-label='Previous video'
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={goToNextVideo}
                  className='w-10 h-10 border border-[#8e6f77] rounded-[4px] flex items-center justify-center text-[#8e6f77]'
                  aria-label='Next video'
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full md:w-3/5 lg:w-[657px] gap-4 sm:gap-6 mt-4 md:mt-0'>
          <div className='flex flex-col gap-2'>
            <p className='text-[#272a34] font-poppins font-medium text-base sm:text-lg leading-6 sm:leading-[27px]'>
              We Don't Just Create Content
            </p>
            <h2 className='text-[#272a34] font-cormorant font-bold text-2xl sm:text-3xl leading-[32px] sm:leading-[39px] uppercase'>
              WE CRAFT EXPERIENCES THAT INSPIRE, ENGAGE, AND CONNECT.
            </h2>
          </div>

          <div className='w-full h-[1px] bg-[#8e6f77]'></div>

          <p className='text-[#272a34] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
            Using the power of AI blended with human creativity, we design
            visually stunning, emotionally compelling marketing content that
            brings brands to life.
          </p>

          <p className='text-[#272a34] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
            Our story-driven digital content helps our clients build deeper
            relationships with their audiences.
          </p>

          <div className='flex gap-4 sm:gap-8 mt-2 sm:mt-4'>
            <div className='w-1.5 sm:w-2 h-12 sm:h-16 bg-[#8e6f77] rounded-[4px]'></div>
            <p className='text-[#272a34] font-semibold text-base sm:text-lg leading-6 sm:leading-8'>
              Every piece we create is designed with purpose - to evoke emotion,
              spark action, and leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection
