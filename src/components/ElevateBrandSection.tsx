import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import video from '../assets/video.mp4'
import ConnectButton from './ConnectButton'
import VideoPlayer from './VideoPlayer'

const ElevateBrandSection: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  const videos = [
    { src: video, title: 'Video 1' },
    { src: video, title: 'Video 2' },
    { src: video, title: 'Video 3' },
  ]

  const goToNextVideo = () => {
    setActiveVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const goToPrevVideo = () => {
    setActiveVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    )
  }

  return (
    <section
      id='work'
      className='px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 md:mb-20 
                max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto 
                py-8 sm:py-12 md:py-16 lg:py-20'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center'>
        <div className='flex flex-col justify-center items-start gap-4 sm:gap-6 md:gap-8 w-full'>
          <div className='flex flex-col items-start gap-3 sm:gap-4 w-full'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
              Let Raver Elevate Your Brand and Bring Your Vision to Life.
            </h2>
          </div>

          <div className='flex flex-col items-start gap-3 sm:gap-4 w-full'>
            <p className='text-base sm:text-lg md:text-xl lg:text-[24px] font-medium leading-relaxed sm:leading-7 md:leading-8'>
              The future of marketing is here and we're ready to help your brand
              thrive!
            </p>
          </div>

          <ConnectButton
            bgColor='#262832'
            textColor='#fff'
            width='100%'
            height='48px'
            className='max-w-[280px] md:max-w-[359px] mt-2 sm:mt-4'
          />
        </div>

        <div className='lg:hidden relative w-full'>
          <div className='relative w-full pt-[56.25%] sm:pt-[75%] md:pt-[65%] rounded-[16px] sm:rounded-[24px] md:rounded-[32px] lg:rounded-[48px] overflow-hidden'>
            <div className='absolute inset-0 w-full h-full'>
              <VideoPlayer
                src={videos[activeVideoIndex].src}
                height='100%'
                maxWidth='100%'
                borderRadius='0'
                className='w-full h-full'
              />
            </div>
          </div>

          <div className='flex justify-center mt-4 sm:mt-6 gap-2'>
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveVideoIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  activeVideoIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToPrevVideo}
            className='absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 
                     bg-white/80 backdrop-blur-sm p-1.5 sm:p-2 md:p-3 
                     rounded-full shadow-md hover:bg-white transition-colors z-10'
            aria-label='Previous video'
          >
            <ArrowLeft size={16} className='sm:w-5 md:w-6 sm:h-5 md:h-6' />
          </button>
          <button
            onClick={goToNextVideo}
            className='absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 
                     bg-white/80 backdrop-blur-sm p-1.5 sm:p-2 md:p-3 
                     rounded-full shadow-md hover:bg-white transition-colors z-10'
            aria-label='Next video'
          >
            <ArrowRight size={16} className='sm:w-5 md:w-6 sm:h-5 md:h-6' />
          </button>
        </div>

        <div className='hidden lg:flex lg:flex-row items-center gap-6'>
          <div className='flex flex-col justify-center items-start gap-6 w-full'>
            <VideoPlayer
              src={video}
              height='289px'
              maxWidth='516px'
              borderRadius='24px md:32px lg:48px'
              className='w-full rounded-[24px]'
            />

            <VideoPlayer
              src={video}
              height='289px'
              maxWidth='516px'
              borderRadius='24px md:32px lg:48px'
              className='w-full rounded-[24px]'
            />
          </div>

          <VideoPlayer
            src={video}
            height='597px'
            maxWidth='336px'
            borderRadius='24px md:32px lg:48px'
            className='w-full md:max-w-[336px] rounded-[24px]'
          />
        </div>
      </div>
    </section>
  )
}

export default ElevateBrandSection
