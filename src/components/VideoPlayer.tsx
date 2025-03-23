import { Maximize, Minimize, Pause, Volume2, VolumeX, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import ReactPlayer from 'react-player'
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
  showOverlay?: boolean
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
  showOverlay = false,
}) => {
  const playerRef = useRef<ReactPlayer>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [progress, setProgress] = useState(0)
  const [seeking, setSeeking] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [controlsTimeout, setControlsTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isPlaying || !showControls) return

    if (controlsTimeout) {
      clearTimeout(controlsTimeout)
    }

    const timeout = setTimeout(() => {
      setShowControls(false)
    }, 3000)

    setControlsTimeout(timeout)

    return () => {
      if (controlsTimeout) clearTimeout(controlsTimeout)
    }
  }, [showControls, isPlaying])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying && !isExpanded) {
      setIsExpanded(true)
    }
    setShowControls(true)
  }

  const handleProgress = (state: {
    played: number
    playedSeconds: number
    loaded: number
    loadedSeconds: number
  }) => {
    if (!seeking) {
      setProgress(state.played * 100)
      setCurrentTime(state.playedSeconds)
    }
  }

  const handleDuration = (duration: number) => {
    setDuration(duration)
  }

  const handleSeekMouseDown = () => {
    setSeeking(true)
  }

  const handleSeekChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget
    const rect = progressBar.getBoundingClientRect()
    const clickPosition = (e.clientX - rect.left) / rect.width

    setProgress(clickPosition * 100)
  }

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget
    const rect = progressBar.getBoundingClientRect()
    const clickPosition = (e.clientX - rect.left) / rect.width

    setSeeking(false)
    if (playerRef.current) {
      playerRef.current.seekTo(clickPosition)
    }
  }

  const handleVolumeChange = (value: number) => {
    setVolume(value)
    setIsMuted(value === 0)
  }

  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
    setVolume(isMuted ? 1 : 0)
  }

  const handleMouseMove = () => {
    if (isPlaying) {
      setShowControls(true)
    }
  }

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const handleClose = () => {
    setIsPlaying(false)
    setIsExpanded(false)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setIsExpanded(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    overflow: 'hidden',
  }

  if (aspectRatio) {
    containerStyle.aspectRatio = aspectRatio
  } else {
    const currentHeight = isMobile
      ? typeof mobileHeight === 'number'
        ? `${mobileHeight}px`
        : mobileHeight
      : typeof height === 'number'
      ? `${height}px`
      : height

    containerStyle.height = currentHeight
  }

  const renderVideoPlayer = () => (
    <div
      className={`relative ${isExpanded ? 'w-full h-full' : ''} ${className}`}
      style={!isExpanded ? containerStyle : { overflow: 'hidden' }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {!isExpanded && showOverlay && (
        <div className='absolute inset-0 bg-[#00000099] bg-opacity-60 z-[5]'></div>
      )}
      <div
        className={`absolute inset-0 ${isExpanded ? 'w-full h-full' : ''}`}
        style={{
          borderRadius: !isExpanded
            ? typeof borderRadius === 'number'
              ? `${borderRadius}px`
              : borderRadius
            : 0,
          overflow: 'hidden',
        }}
      >
        <ReactPlayer
          ref={playerRef}
          url={src}
          width='100%'
          height='100%'
          playing={isPlaying}
          volume={volume}
          muted={isMuted}
          playsinline
          light={!isPlaying && poster ? poster : false}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleEnded}
          onProgress={handleProgress}
          onDuration={handleDuration}
          style={{
            objectFit: isExpanded ? 'contain' : 'cover',
            backgroundColor: 'black',
          }}
          config={{
            file: {
              attributes: {
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: isExpanded ? 'contain' : 'cover',
                },
              },
            },
          }}
          onClick={isPlaying ? () => setShowControls(true) : handlePlayPause}
        />
      </div>

      {!isPlaying && (
        <div
          className='absolute inset-0 cursor-pointer flex items-center justify-center'
          onClick={handlePlayPause}
        >
          <div className='z-10'>
            <PlayIcon />
          </div>
        </div>
      )}

      {isPlaying && showControls && (
        <div
          className='absolute inset-0 flex flex-col justify-between p-4 sm:p-6 transition-opacity duration-300 bg-black/40'
          onClick={(e) => e.stopPropagation()}
        >
          {isExpanded && (
            <div className='flex justify-end'>
              <button
                onClick={handleClose}
                className='bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-all'
              >
                <X size={24} />
              </button>
            </div>
          )}

          <div className='flex flex-col gap-2 z-10'>
            <div
              className='h-1 sm:h-1.5 w-full bg-white/30 rounded-full cursor-pointer group'
              onMouseDown={handleSeekMouseDown}
              onClick={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
            >
              <div
                className='h-full bg-white rounded-full relative'
                style={{ width: `${progress}%` }}
              >
                <div className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity' />
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-4'>
                <button
                  onClick={handlePlayPause}
                  className='text-white hover:text-gray-200 transition'
                >
                  <Pause size={24} />
                </button>

                <button
                  onClick={handleMuteToggle}
                  className='text-white hover:text-gray-200 transition hidden sm:block'
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>

                <div className='hidden sm:block relative w-20 group'>
                  <input
                    type='range'
                    min={0}
                    max={1}
                    step='any'
                    value={volume}
                    onChange={(e) =>
                      handleVolumeChange(parseFloat(e.target.value))
                    }
                    className='w-full accent-white opacity-70 hover:opacity-100 cursor-pointer'
                  />
                </div>

                <div className='text-white text-xs sm:text-sm'>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <button
                onClick={handleExpandToggle}
                className='text-white hover:text-gray-200 transition'
              >
                {isExpanded ? <Minimize size={20} /> : <Maximize size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  return isExpanded
    ? createPortal(
        <div className='fixed inset-0 z-50 bg-black flex items-center justify-center'>
          {renderVideoPlayer()}
        </div>,
        document.body
      )
    : renderVideoPlayer()
}

export default VideoPlayer
