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
      className='w-full h-full bg-[#1A1C25] flex items-center justify-center overflow-hidden relative'
      id={id}
    >
      <div className='w-full h-full max-w-[94.5rem] mx-auto relative'>
        <VideoPlayer
          showOverlay
          src={videoSrc}
          poster={posterImage}
          maxWidth='100%'
          height='100%'
          borderRadius={0}
          aspectRatio='16/9'
          className='w-full h-full'
        />
      </div>
    </section>
  )
}

export default FullWidthVideoSection
