import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import hero1 from '../assets/hero-5.webp'
import hero2 from '../assets/hero-6.webp'
import hero3 from '../assets/hero-7.webp'
import hero4 from '../assets/hero-8.webp'
import MoreIcon from '../icons/MoreIcon'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SwiperRef = any

const HeroSection = () => {
  const backgroundImages = [hero1, hero2, hero3, hero4]
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const swiperRef = useRef<SwiperRef>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleBulletClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index)
    }
  }

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
    <div className='bg-[#1A1C25] w-full flex justify-center items-center'>
      <div className='relative w-full h-[calc(100vh-80px)] overflow-hidden max-w-[94.5rem] 2xl:max-w-[1999px] mx-auto'>
        <div className='absolute inset-0 bg-gray-800'></div>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, EffectFade]}
          effect='fade'
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1200}
          loop={true}
          className='w-full h-full'
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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

        {/* Left overlay for mobile and tablet - modified to go from bottom left to top right */}
        <div
          className='absolute top-0 bottom-0 left-0 w-full md:w-1/1 2xl:hidden'
          style={{
            background:
              'linear-gradient(225deg, rgba(26, 28, 37, 0.00) 43.94%, rgba(26, 28, 37, 0.70) 73.64%, #1A1C25 100%)',
            zIndex: 1,
          }}
        ></div>

        {/* Left overlay for larger screens (up to 2xl) */}
        <div
          className='absolute top-0 bottom-0 left-0 w-1/1 hidden md:block 2xl:hidden'
          style={{
            background:
              'linear-gradient(135deg, #1A1C25 0%, rgba(26, 28, 37, 0.70) 29.99%, rgba(26, 28, 37, 0.00) 50%)',
            mixBlendMode: 'multiply',
            zIndex: 1,
          }}
        ></div>

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

        <div className='custom-bullets absolute z-50 flex gap-4 right-6 bottom-12 md:right-8 md:bottom-12 lg:right-16 lg:bottom-16 2xl:right-[104px]'>
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleBulletClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`custom-bullet w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 border border-[#C3969A] rounded transition-colors duration-300 ${
                activeIndex === index ? 'bg-[#C3969A]' : 'bg-transparent'
              }`}
            />
          ))}
        </div>

        <div
          id='home'
          className='absolute inset-x-0 bottom-0 top-auto md:inset-0 z-10 flex flex-col justify-end md:justify-start items-start px-6 pb-11 md:pb-0 md:pt-16 sm:px-10 md:px-12 lg:px-8 max-w-7xl 2xl:max-w-[1865px] mx-auto pointer-events-none'
        >
          <div className='max-w-[400px]'>
            <h1
              ref={titleRef}
              className='font-bold text-[#C3969A] text-3xl sm:text-4xl md:text-3xl leading-tight mb-6'
            >
              WHERE BEAUTY KNOWS <br /> NO LIMITS
            </h1>

            <p
              ref={descriptionRef}
              className='text-[#C3969A] text-lg font-light mb-6'
            >
              Experience boundless possibilities for 
              beauty brands, retailers, and salons—grow faster, 
              sell more, and build lasting customer connections.
            </p>

            <div ref={buttonRef}>
              <Link
                to='#work'
                className='border-2 border-[#C3969A] text-[#C3969A] pl-4 pr-2 py-2 rounded-md flex items-center gap-2 hover:opacity-80 transition-all duration-300 pointer-events-auto w-fit'
              >
                Learn More
                <MoreIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
