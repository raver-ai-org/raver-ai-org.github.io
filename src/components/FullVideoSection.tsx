import React from 'react'
import VideoPlayer from './VideoPlayer'

interface FullWidthVideoSectionProps {
  videoSrc: string
  posterImage?: string
  id?: string
}

const FullWidthVideoSection: React.FC<FullWidthVideoSectionProps> = ({
  videoSrc,
  posterImage,
  id,
}) => {
  return (
    <section
      className='w-full h-screen bg-[#1A1C25] flex items-center justify-center overflow-hidden relative'
      id={id}
    >
      <div className='w-full h-full max-w-[94.5rem] mx-auto relative'>
        <VideoPlayer
          src={videoSrc}
          poster={posterImage}
          maxWidth='100%'
          height='100%'
          borderRadius={0}
          className='w-full h-full'
        />

        {/* Left overlay for 2xl screens */}
        <div
          className='absolute top-0 bottom-0 left-0 w-1/4 hidden 2xl:block'
          style={{
            background:
              'linear-gradient(90deg, #1A1C25 0%, rgba(26, 28, 37, 0.70) 59.99%, rgba(26, 28, 37, 0.00) 100%)',
            zIndex: 1,
          }}
        ></div>

        {/* Right overlay for 2xl screens */}
        <div
          className='absolute top-0 bottom-0 right-0 w-1/4 hidden 2xl:block'
          style={{
            background:
              'linear-gradient(270deg, #1A1C25 0%, rgba(26, 28, 37, 0.70) 59.99%, rgba(26, 28, 37, 0.00) 100%)',
            zIndex: 5,
          }}
        ></div>
      </div>
    </section>
  )
}

export default FullWidthVideoSection
