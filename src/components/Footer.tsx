import { ArrowUpRight } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import ConnectButton from './ConnectButton'

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

  const handleContactClick = () => {
    if (isHomePage) {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/', { state: { openContact: true } })
    }
  }

  return (
    <footer className='py-12 md:py-16'>
      <div className='max-w-[90%] lg:max-w-[80%] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8'>
          <div className='lg:col-span-4 flex flex-col gap-6'>
            <img src={logo} alt='Raver Logo' className='w-[107px] h-[32px]' />

            <div className='space-y-4'>
              <h3 className='font-serif text-2xl md:text-[32px] font-bold leading-tight'>
                Tell Your Story, Grow Your Brand.
              </h3>

              <p className='text-base md:text-[18px] font-medium leading-6 text-gray-700'>
                Let's craft high-impact campaigns, engage your audience and
                boost your growth and success!
              </p>
            </div>

            <ConnectButton
              text='Connect With Us'
              bgColor='#262832'
              textColor='#fff'
              height='48px'
              width='100%'
              className='max-w-[220px] mt-2'
              onClick={handleContactClick}
            />
          </div>

          <div className='lg:col-span-2 flex flex-col gap-5'>
            <h4 className='text-montserrat font-semibold text-lg'>
              Navigation
            </h4>
            <Link
              to={isHomePage ? '#home' : '/#home'}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
              className='text-base font-medium hover:underline transition-all'
            >
              Home
            </Link>
            <Link
              to={isHomePage ? '#about' : '/#about'}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
              className='text-base font-medium hover:underline transition-all'
            >
              About Us
            </Link>
            <Link
              to={isHomePage ? '#work' : '/#work'}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('work')
              }}
              className='text-base font-medium hover:underline transition-all'
            >
              Our Work
            </Link>
            <Link
              to={isHomePage ? '#team' : '/#team'}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('team')
              }}
              className='text-base font-medium hover:underline transition-all'
            >
              Meet Our Team
            </Link>
          </div>

          <div className='lg:col-span-2 flex flex-col gap-5'>
            <h4 className='text-montserrat font-semibold text-lg'>Legal</h4>
            <Link
              to='/terms'
              className='flex items-center gap-2 text-base md:text-lg group'
            >
              <span className='group-hover:underline transition-all'>
                Terms of Service
              </span>
              <ArrowUpRight
                size={16}
                className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
              />
            </Link>
            <Link
              to='/privacy'
              className='flex items-center gap-2 text-base md:text-lg group'
            >
              <span className='group-hover:underline transition-all'>
                Privacy Policy
              </span>
              <ArrowUpRight
                size={16}
                className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
              />
            </Link>
          </div>

          <div className='lg:col-span-2 flex flex-col gap-5'>
            <h4 className='text-montserrat font-semibold text-lg'>Follow Us</h4>
            <a
              href='https://instagram.com'
              className='flex items-center gap-2 text-base md:text-lg group'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='group-hover:underline transition-all'>
                Instagram
              </span>
              <ArrowUpRight
                size={16}
                className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
              />
            </a>
            <a
              href='https://youtube.com'
              className='flex items-center gap-2 text-base md:text-lg group'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='group-hover:underline transition-all'>
                YouTube
              </span>
              <ArrowUpRight
                size={16}
                className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
              />
            </a>
            <a
              href='https://tiktok.com'
              className='flex items-center gap-2 text-base md:text-lg group'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='group-hover:underline transition-all'>
                TikTok
              </span>
              <ArrowUpRight
                size={16}
                className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
              />
            </a>
          </div>

          <div className='lg:col-span-2 flex flex-col gap-5'>
            <h4 className='text-montserrat font-semibold text-lg'>
              Contact Us
            </h4>
            <a
              href='mailto:info@raver.com'
              className='text-base hover:underline transition-all'
            >
              info@raver.com
            </a>
          </div>
        </div>
        <div className='mt-12 pt-6'>
          <p className='text-sm text-gray-600'>
            © 2025 Raver Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
