import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import hero1 from '../assets/hero-1.webp'
import hero2 from '../assets/hero-2.webp'
import hero3 from '../assets/hero-3.webp'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import ConnectButton from './ConnectButton'

const HeroSection = () => {
  const backgroundImages = [hero1, hero2, hero3]
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    gsap.set(titleRef.current, { x: -50, opacity: 0 })
    gsap.set(descriptionRef.current, { x: -50, opacity: 0 })
    gsap.set(buttonRef.current, { x: -50, opacity: 0 })

    tl.to(titleRef.current, {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: 'power1.out',
    })

    tl.to(
      descriptionRef.current,
      {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: 'power1.out',
      },
      '-=0.7'
    )

    tl.to(
      buttonRef.current,
      {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: 'power1.out',
      },
      '-=0.7'
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className='relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[912px] overflow-hidden'>
      <div className='absolute inset-0 bg-gray-800'></div>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        className='absolute inset-0 w-full h-full'
      >
        {backgroundImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className='w-full h-full bg-cover bg-center'
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        id='home'
        className='absolute inset-0 z-10 flex flex-col justify-center items-start px-6 sm:px-10 md:px-12 lg:px-8 max-w-7xl mx-auto'
      >
        <div className='max-w-xl pt-16 md:pt-0'>
          <h1
            ref={titleRef}
            className='font-bold text-[#F5F4F5] text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-tight mb-4'
          >
            <span className='md:hidden'>
              BRINGING HEART TO AI-POWERED STORYTELLING
            </span>
            <span className='hidden md:inline'>
              BRINGING
              <br />
              HEART TO
              <br />
              AI-POWERED
              <br />
              STORYTELLING
            </span>
          </h1>

          <p
            ref={descriptionRef}
            className='text-white text-base sm:text-lg md:text-xl lg:text-[24px] mb-6 md:mb-8 max-w-[95%] sm:max-w-[95%] md:max-w-full'
          >
            At Raver, we believe that stories inspire action, evoke emotion, and
            build meaningful connections.
          </p>

          <div ref={buttonRef}>
            <ConnectButton
              bgColor='#E3D3CF'
              textColor='#000'
              width='100%'
              height='48px'
              className='sm:h-56px lg:h-64px'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
