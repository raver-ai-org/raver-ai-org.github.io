import { ArrowUpRight } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import LogoIcon from '../icons/LogoIcon'
import ConnectWithUs from './ConnectWithUs'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const isHomePage = location.pathname === '/' || location.pathname === '/home'

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(`/#${sectionId}`)
    }
  }

  return (
    <footer className='bg-[#272a34] py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16'>
      <div className='flex flex-col max-w-[94.5rem] mx-auto space-y-6 sm:space-y-8'>
        <div className='flex flex-col space-y-8 sm:space-y-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-2 lg:flex lg:flex-row lg:justify-between'>
            <div className='flex flex-col pt-[10px] space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1 lg:max-w-[448px]'>
              <div className='flex flex-col space-y-4'>
                <h2 className='text-[#c3969a] font-cormorant font-bold text-2xl sm:text-[28px] md:text-[32px] leading-[39px]'>
                  Tell Your Story, Grow Your Brand.
                </h2>
                <div className='h-[1px] w-full bg-[#8e6f77]'></div>
                <p className='text-[#8e6f77] font-poppins font-light text-sm sm:text-base leading-6'>
                  Let's craft high-impact campaigns, engage your audience and
                  boost your growth and success!
                </p>
              </div>

              <ConnectWithUs variant='outline' className='max-w-[204px]' />
            </div>

            <div className='flex flex-col justify-start sm:justify-center sm:items-start '>
              <div className='flex items-start lg:items-center justify-start lg:justify-center p-2 h-[48px]'>
                <button
                  onClick={() => scrollToSection('home')}
                  className='text-[#c3969a] font-poppins text-base sm:text-lg leading-[27px] hover:text-[#e2b1b6] transition-colors duration-300'
                >
                  Home
                </button>
              </div>
              <div className='flex items-start lg:items-center justify-start lg:justify-center p-2 h-[48px]'>
                <button
                  onClick={() => scrollToSection('about')}
                  className='text-[#c3969a] font-poppins text-base sm:text-lg leading-[27px] hover:text-[#e2b1b6] transition-colors duration-300'
                >
                  About Us
                </button>
              </div>
              <div className='flex items-start lg:items-center justify-start lg:justify-center p-2 h-[48px]'>
                <button
                  onClick={() => scrollToSection('work')}
                  className='text-[#c3969a] font-poppins text-base sm:text-lg leading-[27px] hover:text-[#e2b1b6] transition-colors duration-300'
                >
                  Our Work
                </button>
              </div>
              <div className='flex items-start lg:items-center justify-start lg:justify-center p-2 h-[48px]'>
                <button
                  onClick={() => scrollToSection('team')}
                  className='text-[#c3969a] font-poppins text-base sm:text-lg leading-[27px] hover:text-[#e2b1b6] transition-colors duration-300'
                >
                  Meet Our Team
                </button>
              </div>
            </div>

            <div className='flex flex-col justify-start sm:justify-center lg:mr-36'>
              <div className='flex items-start lg:items-center justify-start p-2 h-[48px]'>
                <h3 className='text-[#c3969a] font-poppins text-base sm:text-lg leading-[27px]'>
                  Follow Us
                </h3>
              </div>
              {/* <div className='flex items-start lg:items-center justify-start lg:justify-center px-2 h-[40px]'>
                <a
                  href='https://twitter.com/Hi_RAVER'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-[#8e6f77] font-poppins font-light text-base sm:text-lg leading-[27px] group'
                >
                  <span className='group-hover:text-[#c3969a] group-hover:underline transition-all duration-300'>
                    Twitter
                  </span>
                  <ArrowUpRight
                    size={20}
                    className='text-[#8e6f77] group-hover:text-[#c3969a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'
                  />
                </a>
              </div> */}
              <div className='flex items-start lg:items-center justify-start px-2 h-[40px]'>
                <a
                  href='https://www.instagram.com/hi.raver/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-[#8e6f77] font-poppins font-light text-base sm:text-lg leading-[27px] group'
                >
                  <span className='group-hover:text-[#c3969a] group-hover:underline transition-all duration-300'>
                    Instagram
                  </span>
                  <ArrowUpRight
                    size={20}
                    className='text-[#8e6f77] group-hover:text-[#c3969a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'
                  />
                </a>
              </div>
              {/* <div className='flex items-start lg:items-center justify-start lg:justify-center px-2 h-[40px]'>
                <a
                  href='https://www.facebook.com/hi.raver'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-[#8e6f77] font-poppins font-light text-base sm:text-lg leading-[27px] group'
                >
                  <span className='group-hover:text-[#c3969a] group-hover:underline transition-all duration-300'>
                    Facebook
                  </span>
                  <ArrowUpRight
                    size={20}
                    className='text-[#8e6f77] group-hover:text-[#c3969a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'
                  />
                </a>
              </div> */}
              {/* <div className='flex items-start lg:items-center justify-start lg:justify-center px-2 h-[40px]'>
                <a
                  href='https://www.youtube.com/@Hi_RAVER'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-[#8e6f77] font-poppins font-light text-base sm:text-lg leading-[27px] group'
                >
                  <span className='group-hover:text-[#c3969a] group-hover:underline transition-all duration-300'>
                    YouTube
                  </span>
                  <ArrowUpRight
                    size={20}
                    className='text-[#8e6f77] group-hover:text-[#c3969a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'
                  />
                </a>
              </div>
              <div className='flex items-start lg:items-center justify-start lg:justify-center px-2 h-[40px]'>
                <a
                  href='https://raverai.substack.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-[#8e6f77] font-poppins font-light text-base sm:text-lg leading-[27px] group'
                >
                  <span className='group-hover:text-[#c3969a] group-hover:underline transition-all duration-300'>
                    Substack
                  </span>
                  <ArrowUpRight
                    size={20}
                    className='text-[#8e6f77] group-hover:text-[#c3969a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-6'>
          <div className='h-[1px] w-full bg-[#8e6f77]'></div>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
            <div className='flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-0'>
              <div className='flex items-center px-2 h-[40px]'>
                <a
                  href='/terms'
                  className='flex items-center gap-2 text-[#8e6f77] font-poppins font-light text-base sm:text-lg leading-[27px] group'
                >
                  <span className='group-hover:text-[#c3969a] group-hover:underline transition-all duration-300'>
                    Terms of Service
                  </span>
                  <ArrowUpRight
                    size={20}
                    className='text-[#8e6f77] group-hover:text-[#c3969a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'
                  />
                </a>
              </div>
              <div className='hidden sm:block h-6 w-[1px] bg-[#8e6f77]'></div>
              <div className='flex items-center px-2 h-[40px]'>
                <a
                  href='/privacy'
                  className='flex items-center gap-2 text-[#8e6f77] font-poppins font-light text-base sm:text-lg leading-[27px] group'
                >
                  <span className='group-hover:text-[#c3969a] group-hover:underline transition-all duration-300'>
                    Privacy Policy
                  </span>
                  <ArrowUpRight
                    size={20}
                    className='text-[#8e6f77] group-hover:text-[#c3969a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'
                  />
                </a>
              </div>
            </div>

            <div className='flex items-center justify-center sm:justify-end gap-4'>
              <p className='text-[#8e6f77] font-poppins font-light text-sm sm:text-base leading-6 text-center'>
                © 2025 Raver Inc. All rights reserved.
              </p>
              <LogoIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
