import React, { useEffect, useRef, useState } from 'react'
import PlayIcon from '../icons/PlayIcon'

interface VideoPlayerProps {
  src: string
  poster?: string
  maxWidth?: string | number
  height?: string | number
  mobileHeight?: string | number
  borderRadius?: string | number
  className?: string
  aspectRatio?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  maxWidth = '100%',
  height = '506px',
  mobileHeight = '555px',
  borderRadius = '32px',
  className = '',
  aspectRatio,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const currentHeight = isMobile
    ? typeof mobileHeight === 'number'
      ? `${mobileHeight}px`
      : mobileHeight
    : typeof height === 'number'
    ? `${height}px`
    : height

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
  }

  if (aspectRatio) {
    containerStyle.aspectRatio = aspectRatio
  } else {
    containerStyle.height = currentHeight
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
    >
      <div
        className='absolute inset-0 overflow-hidden'
        style={{
          borderRadius:
            typeof borderRadius === 'number'
              ? `${borderRadius}px`
              : borderRadius,
        }}
      >
        <video
          ref={videoRef}
          poster={poster}
          className='w-full h-full'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          preload='metadata'
          onClick={handlePlayClick}
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      {!isPlaying && (
        <>
          <div className='absolute left-4 sm:left-6 bottom-4 sm:bottom-6 z-30'>
            <PlayIcon />
          </div>
          <div
            className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer'
            onClick={handlePlayClick}
          >
            <svg
              width='48'
              height='48'
              viewBox='0 0 64 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='play-icon sm:w-[64px] sm:h-[64px]'
            >
              <path
                d='M51.0417 29.211C52.6632 30.123 53.4739 30.5791 53.744 31.1783C53.9794 31.7008 53.9794 32.2992 53.744 32.8217C53.4739 33.4209 52.6632 33.877 51.0417 34.789L18.1022 53.3175C16.5345 54.1993 15.7507 54.6402 15.1087 54.5676C14.5485 54.5043 14.0411 54.2076 13.7114 53.7504C13.3333 53.2264 13.3333 52.3271 13.3333 50.5285V13.4715C13.3333 11.6729 13.3333 10.7736 13.7114 10.2496C14.0411 9.79242 14.5485 9.49567 15.1087 9.43235C15.7507 9.35977 16.5345 9.80067 18.1022 10.6825L51.0417 29.211Z'
                fill='white'
              ></path>
            </svg>
          </div>
        </>
      )}
    </div>
  )
}

export default VideoPlayer
