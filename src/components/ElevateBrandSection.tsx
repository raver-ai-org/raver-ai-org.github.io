import React, { useRef } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import elevateBrand1 from '../assets/elevate-brand-1.webp'
import elevateBrand2 from '../assets/elevate-brand-2.webp'
import elevateBrand3 from '../assets/elevate-brand-3.webp'
import ConnectWithUs from './ConnectWithUs'

const ElevateBrandSection: React.FC = () => {
  const elevateRef = useRef(null)

  return (
    <div className='bg-[#e6d2cf] w-full flex justify-center items-center'>
      <div
        ref={elevateRef}
        className='flex flex-col lg:flex-row items-center justify-center py-32 px-8 md:px-16 lg:px-16 gap-8 lg:gap-32 bg-[#e6d2cf] max-w-[94.5rem] mx-auto'
      >
        <div className='flex flex-col justify-center items-start gap-16 w-full max-w-[657px]'>
          <div className='flex flex-col items-start gap-6 w-full'>
            <div className='flex flex-col items-start gap-2 w-full'>
              <p className='text-[#8e6f77] font-poppins font-medium text-lg leading-[27px]'>
                Faster, Smarter and More Effective
              </p>
              <h2 className='text-[#8e6f77] font-cormorant font-bold text-3xl leading-[39px] uppercase'>
                Let Raver elevate your brand and bring your vision to life.
              </h2>
            </div>

            <div className='w-full h-[1px] bg-[#c3969a]'></div>

            <p className='text-[#8e6f77] font-poppins text-base leading-8'>
              Our AI-powered technology personalizes content, optimizes
              campaigns in real time, and ensures your message reaches the right
              audience with greater exposure and impact.
            </p>

            <p className='text-[#8e6f77] font-poppins text-base leading-8'>
              With Raver, you get creativity at scale and better results -
              helping your brand stay ahead in a rapidly evolving digital world.
            </p>

            <div className='flex gap-8 w-full'>
              <div className='w-2 h-16 bg-[#c3969a] rounded-[4px]'></div>
              <p className='text-[#8e6f77] font-poppins font-semibold text-lg leading-8'>
                The future of marketing is here and we're ready to help your
                brand thrive!
              </p>
            </div>
          </div>

          <ConnectWithUs variant='filled' />
        </div>

        <div className='w-full max-w-[360px] h-[752px]'>
          <Swiper
            direction='vertical'
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            loop={true}
            speed={7000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className='h-full w-full'
          >
            <SwiperSlide>
              <div className='w-full h-[360px] rounded-md overflow-hidden shadow-lg'>
                <img
                  src={elevateBrand1}
                  alt='Abstract design showing innovation'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full h-[360px] rounded-md overflow-hidden shadow-lg'>
                <img
                  src={elevateBrand2}
                  alt='Abstract design showing technology'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full h-[360px] rounded-md overflow-hidden shadow-lg'>
                <img
                  src={elevateBrand3}
                  alt='Abstract design showing digital transformation'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full h-[360px] rounded-md overflow-hidden shadow-lg'>
                <img
                  src={elevateBrand1}
                  alt='Abstract design showing innovation'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full h-[360px] rounded-md overflow-hidden shadow-lg'>
                <img
                  src={elevateBrand2}
                  alt='Abstract design showing technology'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full h-[360px] rounded-md overflow-hidden shadow-lg'>
                <img
                  src={elevateBrand3}
                  alt='Abstract design showing digital transformation'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ElevateBrandSection
