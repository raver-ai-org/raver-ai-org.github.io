import flower from '../assets/flower.png'

export default function PurposeSection() {
  return (
    <div className='mx-auto px-4 sm:px-6 md:px-0 max-w-[95%] sm:max-w-[90%] md:max-w-[80%] my-8 md:my-12'>
      <div className='bg-[#262832] flex flex-col md:flex-row rounded-[20px] sm:rounded-[24px] md:rounded-[32px] overflow-hidden'>
        <div className='w-full md:w-1/2 h-[280px] sm:h-[320px] md:h-[560px]'>
          <img
            src={flower}
            alt='purpose'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12'>
          <h2 className='font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
            Every Piece We Create Is Designed with Purpose - to Evoke Emotion,
            Spark Action, and Leave a Lasting Impact.
          </h2>
        </div>
      </div>
    </div>
  )
}
