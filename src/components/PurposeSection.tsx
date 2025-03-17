import { useMediaQuery } from 'react-responsive'
import flowerMobile from '../assets/flower-mobile.png'
import flower from '../assets/flower.png'

export default function PurposeSection() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className='mx-auto px-4 sm:px-6 md:px-0 max-w-[95%] sm:max-w-[90%] md:max-w-[95%] my-8 md:my-12'>
      <div className='bg-[#262832] flex flex-col md:flex-row rounded-[20px] sm:rounded-[24px] md:rounded-[32px] overflow-hidden'>
        <div className='w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 pb-2 sm:pb-12 order-first md:order-none'>
          <h2 className='font-playfair text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
            Every Piece We Create Is Designed with Purpose - to Evoke Emotion,
            Spark Action, and Leave a Lasting Impact.
          </h2>
        </div>

        <div className='w-full md:w-1/2 h-[350px] sm:h-[380px] md:h-[560px] order-last md:order-first mt-auto md:mt-0 relative'>
          <div
            className='absolute inset-0 rounded-[48px] z-0'
            style={{
              background: isMobile
                ? 'radial-gradient(38.27% 73.32% at 35.54% 75.88%, #555555 0%, #262832 100%)'
                : 'radial-gradient(38.27% 73.32% at 35.54% 65.88%, #555555 0%, #262832 100%)',
            }}
          ></div>

          <div className='absolute inset-0 z-10 overflow-hidden'>
            {isMobile ? (
              <img
                src={flowerMobile}
                alt='purpose'
                className='w-full h-full object-cover'
                style={{ mixBlendMode: 'multiply', opacity: 0.9 }}
              />
            ) : (
              <img
                src={flower}
                alt='purpose'
                className='w-full h-full object-cover object-[60%_center]'
                style={{ mixBlendMode: 'multiply', opacity: 0.9 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
