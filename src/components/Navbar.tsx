import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import ConnectWithUs from './ConnectWithUs'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const location = useLocation()
  const navigate = useNavigate()

  const isHomePage = location.pathname === '/' || location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const sections = ['home', 'about', 'work', 'team', 'contact']
        const scrollPosition = window.scrollY + 100

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section) {
            const sectionTop = section.offsetTop
            if (scrollPosition >= sectionTop) {
              if (activeSection !== sections[i]) {
                setActiveSection(sections[i])
              }
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection, isHomePage])

  useEffect(() => {
    if (isHomePage && location.hash) {
      const sectionId = location.hash.replace('#', '')
      const element = document.getElementById(sectionId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
          setActiveSection(sectionId)
        }, 100)
      }
    }
  }, [location.hash, isHomePage])

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string, isMobile = false) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(sectionId)
      }
    } else {
      navigate(`/#${sectionId}`)
    }

    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm'>
        <div className='max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-12 xl:px-16'>
          <div className='flex items-center justify-between h-20'>
            <div className='flex-shrink-0'>
              <Link
                to='/'
                className='flex items-center'
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault()
                    scrollToSection('home')
                  }
                }}
              >
                <img
                  src={logo}
                  alt='Raver Logo'
                  className='h-8 md:h-9 lg:h-10'
                />
              </Link>
            </div>

            <div className='hidden md:flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10'>
              <Link
                to={isHomePage ? '#home' : '/#home'}
                className={`uppercase font-normal text-base xl:text-lg transition-all whitespace-nowrap ${
                  activeSection === 'home' && isHomePage
                    ? 'border-b border-[#272A34] text-[#272A34] pb-2'
                    : 'text-[#C3969A] pb-2 border-b border-transparent'
                }`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault()
                    scrollToSection('home')
                  }
                }}
              >
                Home
              </Link>
              <Link
                to={isHomePage ? '#about' : '/#about'}
                className={`uppercase font-normal text-base xl:text-lg transition-all whitespace-nowrap ${
                  activeSection === 'about' && isHomePage
                    ? 'border-b border-[#272A34] text-[#272A34] pb-2'
                    : 'text-[#C3969A] pb-2 border-b border-transparent'
                }`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault()
                    scrollToSection('about')
                  }
                }}
              >
                About
              </Link>
              <Link
                to={isHomePage ? '#work' : '/#work'}
                className={`uppercase font-normal text-base xl:text-lg transition-all whitespace-nowrap ${
                  activeSection === 'work' && isHomePage
                    ? 'border-b border-[#272A34] text-[#272A34] pb-2'
                    : 'text-[#C3969A] pb-2 border-b border-transparent'
                }`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault()
                    scrollToSection('work')
                  }
                }}
              >
                Work
              </Link>
              <Link
                to={isHomePage ? '#team' : '/#team'}
                className={`uppercase font-normal text-base xl:text-lg transition-all whitespace-nowrap ${
                  activeSection === 'team' && isHomePage
                    ? 'border-b border-[#272A34] text-[#272A34] pb-2'
                    : 'text-[#C3969A] pb-2 border-b border-transparent'
                }`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault()
                    scrollToSection('team')
                  }
                }}
              >
                Team
              </Link>
            </div>
            <div className='flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8'>
              <div className='md:hidden flex items-center justify-center'>
                <button
                  onClick={toggleMenu}
                  className='text-gray-700 focus:outline-none'
                  aria-label='Toggle menu'
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
              <ConnectWithUs
                variant='accent'
                iconOnlyMobile
                className='scale-75 sm:scale-80 md:scale-85 lg:scale-90 xl:scale-100'
              />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className='fixed inset-0 md:hidden bg-white z-50 flex flex-col'>
            <div className='flex justify-between items-center p-2 border-b border-gray-200 h-20'>
              <div className='flex-shrink-0'>
                <Link
                  to='/'
                  className='flex items-center'
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      scrollToSection('home')
                      setIsMenuOpen(false)
                    }
                  }}
                >
                  <img src={logo} alt='Raver Logo' className='h-8 sm:h-9' />
                </Link>
              </div>
              <button
                onClick={toggleMenu}
                className='text-gray-700 focus:outline-none'
                aria-label='Close menu'
              >
                <X size={24} />
              </button>
            </div>
            <div className='flex flex-col justify-center flex-grow px-6 py-8 space-y-8'>
              <Link
                to={isHomePage ? '#home' : '/#home'}
                className={`text-center py-3 text-xl uppercase ${
                  activeSection === 'home' && isHomePage
                    ? 'text-[#272A34] font-medium'
                    : 'text-[#C3969A]'
                }`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault()
                    scrollToSection('home', true)
                  }
                }}
              >
                Home
              </Link>
              <Link
                to={isHomePage ? '#about' : '/#about'}
                className={`text-center py-3 text-xl uppercase ${
                  activeSection === 'about' && isHomePage
                    ? 'text-[#272A34] font-medium'
                    : 'text-[#C3969A]'
                }`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault()
                    scrollToSection('about', true)
                  }
                }}
              >
                About Us
              </Link>
              <Link
                to={isHomePage ? '#work' : '/#work'}
                className={`text-center py-3 text-xl uppercase ${
                  activeSection === 'work' && isHomePage
                    ? 'text-[#272A34] font-medium'
                    : 'text-[#C3969A]'
                }`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault()
                    scrollToSection('work', true)
                  }
                }}
              >
                Our Work
              </Link>
              <Link
                to={isHomePage ? '#team' : '/#team'}
                className={`text-center py-3 text-xl uppercase ${
                  activeSection === 'team' && isHomePage
                    ? 'text-[#272A34] font-medium'
                    : 'text-[#C3969A]'
                }`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault()
                    scrollToSection('team', true)
                  }
                }}
              >
                Meet Our Team
              </Link>
            </div>
            <div className='p-6 flex justify-center'>
              <ConnectWithUs variant='accent' />
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
